import { message, Modal } from "antd";
import { BigNumber, utils } from "ethers";
import { action, computed, makeAutoObservable } from "mobx";
import { Marry3Contract } from "../../contracts";
import { deploySolpass, factory, SolpassContract } from "../../contracts";
import wallet from "../../contracts/wallet";
import { web3Config } from "../config";
import { IStore, StoreType } from "../store.interface";
import useStore from "../useStore";
import { WalletStore } from "./wallet.store";
import { v4 as uuidv4 } from "uuid";
import qs from "qs";
import moment from "moment";
import { randomBytes } from "crypto";

const walletStore = useStore(WalletStore);

export type Offers = {
    id?: string;
    Aaddress?: string;
    Baddress?: string;
    contractId?: string;
    contractAddr?: string;
    Asignature?: string;
    Bsignature?: string | null;
    Aname?: string | null;
    Bname?: string | null;
    status?: number;
    burnAuth?: number;
    nftName?: string | null;
    tokenId?: string | null;
    Acomment?: string | null;
    cover?: string | null;
    inviteLink?: string | null;
    bgIndex?: number | null;
    mintedAt?: Date | null;
    expirationDate?: Date | null;
    imageData?: string;
    totalMinted?: number;
    totalSigned?: number;

};

export type Tokens = {
    id?: string;
    offersId?: string;
    tokenId?: string;
    Bsignature?: string;
    Bname?: string;
    Iaddress?: string;
    Raddress?: string;
    Caddress?: string;
    minted?: number;
};

export class SolpassStore implements IStore {
    static type = StoreType.solpass;
    type = StoreType.solpass;

    mintPrice: BigNumber;
    mintPriceFormated: string = "0.00";
    ethBalance: BigNumber;
    ethBalanceFormated: string = "0.00";

    marryCount = 0;

    pendingOfferIndex;

    info: Offers = {
        burnAuth: 0,
        expirationDate: null
    };

    pendingOffer: Offers = {};

    allPendingOffers: Offers[] = [];

    pendingOfferTokens: Tokens[] = [];

    proof: string[] = [];

    lastdayGases: any[] = [];
    todayGases: any[] = [];

    nowGas = 0;

    constructor() {
        makeAutoObservable(this);
    }
    shareClicked = false;

    async getMerkle() {
        const walletInfo = await walletStore.getWalletInfo();
        const r = await fetch("/api/merkle?address=" + walletInfo.account, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await r.json();
        if (json.proof) {
            this.proof = json.proof;
        }
    }
    @action
    stepStatus() {
        if (this.pendingOffer.status === 0) {
            return 1;
        } else if (this.pendingOffer.status === 1) {
            return 2;
        } else if (this.pendingOffer.status === 2) {
            return 4;
        } else {
            return 0;
        }
    }
    async signA() {
        //generates random uuid
        const uuid = uuidv4();
        const baseURI = "https://ipfs.infura.io/ipfs/";

        const body = {
            nonce: uuid,
            signature: "",
            Aaddress: this.info.Aaddress,
            Aname: this.info.Aname,
            Acomment: this.info.Acomment,
            cover: this.info.cover,
            burnAuth: this.info.burnAuth,
            nftName: this.info.nftName,
            expirationDate: this.info.expirationDate,
            contractAddr: "",
        };
        if (!body.cover) {
            message.error("solpass cover empty");
            return;
        }
        if (body.burnAuth != 0 && body.burnAuth != 1 && body.burnAuth != 2 && body.burnAuth != 3) {
            message.error("invalid burnAuth");
            return;
        }
        if (!body.Aname) {
            message.error('solpass issuer name empty');
        }
        if (!body.nftName) {
            message.error("solpass name empty");
            return;
        }
        if (!body.Acomment) {
            message.error("solpass description empty");
            return;
        }
        if (!body.Aaddress) {
            message.error("Wallet unconnected");
            return;
        }
        if (body.Aname?.indexOf(".eth") != -1) {
            const ens = await walletStore.getENS(this.info.Aaddress);
            if (body.Aname?.toLowerCase() != ens?.toLowerCase()) {
                message.error(
                    ".eth ens name must be yourself, you can input no .eth name"
                );
                return;
            }
        }
        const msg = await walletStore.signMessage(uuid);
        const result = await deploySolpass(body.burnAuth, body.nftName, baseURI, body.Aaddress);
        if (!result) {
            message.error('Deployment failed, please make sure your wallet is connected and try again');
            return;
        }
        if (!result.address) {
            message.error("Deployment failed, please make sure your wallet is connected and try again");
            return;
        }
        await result.wait();
        message.success("Solpass Contract Deployed");
        body.signature = msg;
        body.contractAddr = result.address;

        const offer = await fetch("/api/offer-a", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const res = await offer.json();
        const result2 = await fetch("/api/offer-pending?Aaddress=" + body.Aaddress, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await result2.json();
        if (json.message) {
            message.error(json.message);
        } else {
            this.allPendingOffers = json;
        }

        if (res.id) {
            this.pendingOfferIndex = 0;
            this.pendingOffer = res;
            this.info.inviteLink = "/offer/" + res.id;
        } else {
            message.error(res.message);
        }
    }
    async mint(
        _addressB: string,
        _tokenURI: string,
        _expDate: string,
        _signatureB: string,
    ) {
        //const walletInfo = await walletStore.getWalletInfo();
        try {
            if (this.proof) {
                /*const solpassContract = factory(
                    ABI_SOLPAS,
                    web3Config.address.marry3
                );*/
                console.log("yes man");
                const result = await SolpassContract()[
                    "mint(address,string,uint256,bytes)"
                ](_addressB, _tokenURI, 20080808, _signatureB, {
                    value: this.mintPrice,
                });
                await result.wait();
                console.log("mint result", result);
                message.success("mint success");
                this.pendingOffer.tokenId = result.toString();

                this.pendingOffer.status = 2;

                return result.blockNumber;
            } else {
                throw new Error('"proof" is empty');
            }
        } catch (e) {
            throw new Error(e.error?.message || e.message);
        }
    }

    async getNowGas() {
        const r3 = await fetch(
            "https://app.defisaver.com/api/gas-price/1559/current",

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const json3 = await r3.json();
        if (
            json3.blockPrices &&
            json3.blockPrices.length &&
            json3.blockPrices[0].baseFeePerGas
        ) {
            this.nowGas = Math.floor(json3.blockPrices[0].baseFeePerGas);
        }
    }
    async getMintInfo() {
        this.getNowGas();
        const r = await fetch(
            "https://api.chainbase.online/v1/account/balance?chain_id=1&address=" +
            web3Config.address.solpass,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": web3Config.chainbase_key,
                },
            }
        );

        const json = await r.json();

        if (json.data) {
            this.ethBalance = BigNumber.from(json.data);
            this.ethBalanceFormated = Number(
                Number(utils.formatEther(this.ethBalance)).toFixed(2)
            ).toLocaleString();
        }
        console.log("ethBalanceFormated", this.ethBalanceFormated);
        const r2 = await fetch(
            "https://api.chainbase.online/v1/token/metadata?chain_id=1&contract_address=" +
            web3Config.address.solpass,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": web3Config.chainbase_key,
                },
            }
        );
        const json2 = await r2.json();

        if (json2.data?.total_supply) {
            const mintCount = BigNumber.from(json2.data.total_supply);
            this.marryCount = Math.floor(mintCount.toNumber() / 2);

            console.log("mintCount", this.marryCount);
        }

        const r3 = await fetch(
            "https://app.defisaver.com/api/gas-price/1559/history?days=2",

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const json3 = await r3.json();
        console.log("fas", json3);

        if (json3 && json3.history) {
            const lastDayStart = moment().subtract(1, "days").startOf("day");
            const lastDayEnd = moment().subtract(1, "days").endOf("day");
            const todayStart = moment().startOf("day");
            const todayEnd = moment().endOf("day");
            const lastDayGases = [];
            const todayGases = [];
            json3.history.forEach((item) => {
                const t = item[0];
                const gas = item[1];
                if (t > lastDayStart && t < lastDayEnd) {
                    lastDayGases.push({
                        t: t,
                        v: gas,
                    });
                }
                if (t > todayStart && t < todayEnd) {
                    todayGases.push({
                        t: t,
                        v: gas,
                    });
                }
            });
            this.lastdayGases = lastDayGases;
            this.todayGases = todayGases;
        }

        const walletInfo = await walletStore.getWalletInfo();
        await this.getMerkle();
        //const mintPrice = await Marry3Contract().getPriceByProof(this.proof);
        this.mintPrice = BigNumber.from('0');
        this.mintPriceFormated = utils.formatEther(this.mintPrice);
        console.log("mintPrice", this.mintPriceFormated);

        // const ethBalance = await (
        //   await wallet.getEthProvider()
        // ).getBalance(Marry3Contract().address);

        // this.ethBalance = ethBalance;
        // this.ethBalanceFormated = Number(
        //   Number(utils.formatEther(ethBalance)).toFixed(2)
        // ).toLocaleString();
        // console.log("ethBalance", ethBalance);
    }

    async getOffer() {
        const account = (await walletStore.getWalletInfo()).account;
        try {
            const result = await fetch("/api/offer-pending?Aaddress=" + account, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await result.json();
            if (!json.message) {
                this.allPendingOffers = json;
                this.pendingOffer = json[0];
            }
        } catch (e) { }

        if (this.pendingOffer?.status == 0) {
            setTimeout(() => {
                this.getOffer();
            }, 3000);
        }
    }

    async getTokens() {
        const account = walletStore.walletInfo.account;
        try {
            //const uuid = uuidv4();
            //const msg = await walletStore.signMessage(uuid);
            //add sig check to improve api security
            const body = {
                Aaddress: account,
                offerId: this.pendingOffer.id,
            };
            const result = await fetch("/api/fetch-offer-tokens", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const json = await result.json();
            if (!json.message) {
                this.pendingOfferTokens = json;
            }
            else {
                message.error(json.message);
                console.log(json.message);
            }
        } catch (e) {
            message.error(e);
        }

        if (this.pendingOffer) {
            setTimeout(() => {
                this.getTokens();
            }, 3000);
        }

    }
    async revoke() {
        const uuid = uuidv4();
        const msg = await walletStore.signMessage(uuid);
        const body = {
            nonce: uuid,
            signature: msg,
            id: this.pendingOffer.id,
        };
        const offer = await fetch(
            `/api/offer-revoke?nonce=${body.nonce}&signature=${body.signature}&id=${body.id}`,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}