import { message, Modal } from "antd";
import { BigNumber, utils } from "ethers";
import { action, computed, makeAutoObservable } from "mobx";
import { Marry3Contract } from "../../contracts";
import wallet from "../../contracts/wallet";
import { web3Config } from "../config";
import { IStore, StoreType } from "../store.interface";
import useStore from "../useStore";
import { WalletStore } from "./wallet.store";

import { NFTStore } from "./nfts.store";
const walletStore = useStore(WalletStore);

export type Offers = {
  id?: string;
  Aaddress?: string;
  Baddress?: string;
  Asignature?: string;
  Bsignature?: string | null;
  Aname?: string | null;
  Bname?: string | null;
  status?: number;
  tokenId?: string | null;
  Acomment?: string | null;
  cover?: string | null;
  inviteLink?: string | null;
};

export type Token = {
  id?: string;
  offersId?: string;
  tokenId?: string | null;
  Bsignature?: string | null;
  Bname?: string;
  Iaddress?: string;
  Raddress?: string;
  Caddress?: string;
  minted?: number;
}
export class OfferStore implements IStore {
  static type = StoreType.offer;
  type = StoreType.offer;

  offer: Offers = {};

  token: Token = {};

  signed = false;

  form = {
    Baddress: "",
    Bname: "",

  };

  is404 = false;
  constructor() {
    makeAutoObservable(this);
  }
  @action
  stepStatus() {
    if (this.offer.status === 0) {
      return 1;
    } else if (this.offer.status === 1) {
      return 2;
    } else if (this.offer.status === 2) {
      return 3;
    } else {
      return 0;
    }
  }

  async accept() {
    const nonce = "i will";
    //use uuid of offer as nonce
    const body = {
      nonce,
      signature: "",
      id: this.offer.id,
      //address: (await walletStore.getWalletInfo()).account, changes to walletstore getWalletInfo breaks this
      address: walletStore.walletInfo.account,
      Bname: this.form.Bname,
    };
    if (!body.Bname) {
      message.error("please input your nickname");
      return;
    }
    if (body.Bname.indexOf(".eth") != -1) {
      const ens = await walletStore.getENS(body.address);
      console.log(ens);
      if (body.Bname?.toLowerCase() != ens?.toLowerCase()) {
        message.error(
          ".eth ens name must be yourself, you can input no .eth name"
        );
        return;
      }
    }
    const msg = await walletStore.signMessage(nonce);
    body.signature = msg;
    const token = await fetch("/api/offer-b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await token.json();
    if (json.message) {
      message.error(json.message);
    } else {
      this.signed = true;
      this.token = json as Token;
      message.success("accept success");
    }
  }

  async getOffer() {
    const result = await fetch("/api/offer?id=" + this.offer.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await result.json();
    if (json.message) {
      message.error(json.message);
      this.is404 = true;
    } else {
      this.offer = json;
    }
  }

  async getToken() {
    console.log("gettoken");
    if (this.token.id) {
      const result = await fetch("/api/token?tokenId=" + this.token.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();
      if (json.message) {
        message.error(json.message);
        this.is404 = true;
      } else {
        this.token = json;
      }
    }
    if (!this.token.minted) {
      setTimeout(() => {
        this.getToken();
      }, 3000);
    }
  }
}
