import { Contract, ethers } from "ethers";
import { web3Config } from "../stores/config";

import ABI_MARRY3 from "../abi/Marry3.json";
import ABI_SOLPASS from "../abi/Solpass.json";
import BYTECODE_SOLPASS from "../abi/Solpass_bytecode.json";
import wallet from "./wallet";
import { Marry3 } from "../typechain-types";

function factory(abi: any, address: string) {
  let contract;
  // let contract = Contract.connect(web3Provider.getSigner());
  wallet.on("connected", async () => {
    const signer = await wallet.getWalletSigner();
    const provider = await wallet.getEthProvider();
    const Contract = new ethers.Contract(address, abi, provider);
    contract = Contract.connect(signer);
  });

  return () => {
    return contract;
  };
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

export const Marry3Contract = factory(
  ABI_MARRY3,
  web3Config.address.marry3
) as () => Marry3;

export async function deploySolpass(burnAuth: number, nftName: string, baseURI: string, signerAddr: string): Promise<Contract> {
  return await deploy(
    ABI_SOLPASS,
    BYTECODE_SOLPASS,
    burnAuth,
    nftName,
    baseURI,
    signerAddr);
}
