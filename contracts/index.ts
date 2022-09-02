import { Contract, ethers } from "ethers";
import { web3Config } from "../stores/config";

import ABI_MARRY3 from "../abi/Marry3.json";
import ABI_SOLPASS from "../abi/Solpass.json";
import BYTECODE_SOLPASS from "../abi/Solpass_bytecode.json";
import wallet from "./wallet";
import { Marry3, Solpass } from "../typechain-types";


export async function factory(abi: any, address: string): Promise<Solpass> {
  if (!wallet.connected()) {
    await new Promise<void>((resolve, reject) => {
      wallet.on("connected", async () => {
        resolve();
      });
    });
  }

  const signer = await wallet.getWalletSigner();
  const provider = await wallet.getEthProvider();
  const Contract = new ethers.Contract(address, abi, provider);
  const contract = Contract.connect(signer);

  return contract as any as Solpass;
}

async function deploy(abi: any, bytecode: any, burnAuth: number, nftName: string, baseURI: string, signerAddr: string): Promise<Contract> {
  let deployedContract;
  const signer = await wallet.getWalletSigner();
  const addr = await signer.getAddress();
  if (addr !== signerAddr) {
    console.log("Incorrect signer address");
    return;
  }
  const factory = new ethers.ContractFactory(abi, bytecode, signer);
  deployedContract = await factory.deploy(burnAuth, nftName, nftName, baseURI);
  console.log("contract deployment initiated:", deployedContract);

  return deployedContract;
}

export const SolpassContract = async (address: string): Promise<Solpass> => await factory(ABI_SOLPASS, address) as any as Solpass;

export const Marry3Contract = undefined;


export async function deploySolpass(burnAuth: number, nftName: string, baseURI: string, signerAddr: string): Promise<Contract> {
  return await deploy(
    ABI_SOLPASS,
    BYTECODE_SOLPASS,
    burnAuth,
    nftName,
    baseURI,
    signerAddr);
}
