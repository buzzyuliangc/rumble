/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Ownable,
  OwnableInterface,
} from "../../../../contracts/ownership/ownable.sol/Ownable";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "CANNOT_TRANSFER_TO_ZERO_ADDRESS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NOT_CURRENT_OWNER",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556102b7806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063860d248a146100515780638da5cb5b1461008c578063f2fde38b146100b7578063f3fe3bc3146100cc575b600080fd5b6100766040518060400160405280600681526020016518189c18181960d11b81525081565b60405161008391906101fc565b60405180910390f35b60005461009f906001600160a01b031681565b6040516001600160a01b039091168152602001610083565b6100ca6100c5366004610251565b6100f1565b005b6100766040518060400160405280600681526020016530313830303160d01b81525081565b60005460408051808201909152600681526530313830303160d01b6020820152906001600160a01b031633146101435760405162461bcd60e51b815260040161013a91906101fc565b60405180910390fd5b5060408051808201909152600681526518189c18181960d11b60208201526001600160a01b0382166101885760405162461bcd60e51b815260040161013a91906101fc565b50600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b600060208083528351808285015260005b818110156102295785810183015185820160400152820161020d565b8181111561023b576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561026357600080fd5b81356001600160a01b038116811461027a57600080fd5b939250505056fea26469706673582212208e85c7134566d8f661170d3de3037d00061de8aa64eeb9c2a4977cd43657303964736f6c63430008090033";

type OwnableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Ownable__factory extends ContractFactory {
  constructor(...args: OwnableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Ownable> {
    return super.deploy(overrides || {}) as Promise<Ownable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Ownable {
    return super.attach(address) as Ownable;
  }
  override connect(signer: Signer): Ownable__factory {
    return super.connect(signer) as Ownable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnableInterface {
    return new utils.Interface(_abi) as OwnableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Ownable {
    return new Contract(address, _abi, signerOrProvider) as Ownable;
  }
}
