/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721_520Token,
  ERC721_520TokenInterface,
} from "../../../../contracts/tokens/erc520-token.sol/ERC721_520Token";

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
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenIdA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenIdB",
        type: "uint256",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_approved",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_a",
        type: "address",
      },
      {
        internalType: "address",
        name: "_b",
        type: "address",
      },
    ],
    name: "check",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "_a",
        type: "address",
      },
    ],
    name: "getPairInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "partner",
            type: "address",
          },
          {
            internalType: "enum ERC721_520.Sex",
            name: "sex",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct ERC721_520.AddressInfo",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "partner",
            type: "address",
          },
          {
            internalType: "enum ERC721_520.Sex",
            name: "sex",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct ERC721_520.AddressInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "_owner",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060085534801561001557600080fd5b50600060208190527f67be87c3ff9960ca1e9cfac5cab2ff4747269cf9ed20c9b7306235ac35a491c5805460ff1990811660019081179092556380ac58cd60e01b9092527ff7815fccbf112960a73756e185887fedcb9fc64ca0a16cc5923b7960ed7808008054909216179055611443806100916000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063b88d4fde11610066578063b88d4fde14610231578063c87b56dd14610244578063d4ff73f714610265578063e985e9c51461028657600080fd5b806370a08231146101e257806395d89b4114610203578063a22cb4651461020b578063b3154db01461021e57600080fd5b8063095ea7b3116100d3578063095ea7b31461019457806323b872dd146101a957806342842e0e146101bc5780636352211e146101cf57600080fd5b806301ffc9a7146100fa57806306fdde0314610154578063081812fc14610169575b600080fd5b61013f6101083660046110bf565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081526020819052604090205460ff1690565b60405190151581526020015b60405180910390f35b61015c6102c2565b60405161014b9190611130565b61017c610177366004611143565b610354565b6040516001600160a01b03909116815260200161014b565b6101a76101a2366004611178565b6103d6565b005b6101a76101b73660046111a2565b6105be565b6101a76101ca3660046111a2565b610779565b61017c6101dd366004611143565b610799565b6101f56101f03660046111de565b6107f1565b60405190815260200161014b565b61015c610855565b6101a76102193660046111f9565b610864565b61013f61022c366004611235565b6108d0565b6101a761023f366004611268565b610aca565b61015c610252366004611143565b5060408051602081019091526000815290565b6102786102733660046111de565b610b13565b60405161014b929190611363565b61013f610294366004611235565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6060600680546102d19061137f565b80601f01602080910402602001604051908101604052809291908181526020018280546102fd9061137f565b801561034a5780601f1061031f5761010080835404028352916020019161034a565b820191906000526020600020905b81548152906001019060200180831161032d57829003601f168201915b5050505050905090565b6000818152600160209081526040808320548151808301909252600682526518181998181960d11b9282019290925283916001600160a01b03166103b45760405162461bcd60e51b81526004016103ab9190611130565b60405180910390fd5b506000838152600260205260409020546001600160a01b031691505b50919050565b60008181526001602052604090205481906001600160a01b03163381148061042157506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b6040518060400160405280600681526020017f3030333030330000000000000000000000000000000000000000000000000000815250906104755760405162461bcd60e51b81526004016103ab9190611130565b50600083815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528491906001600160a01b03166104cf5760405162461bcd60e51b81526004016103ab9190611130565b50600084815260016020908152604091829020548251808401909352600683527f3030333030380000000000000000000000000000000000000000000000000000918301919091526001600160a01b03908116919087168214156105465760405162461bcd60e51b81526004016103ab9190611130565b5060008581526002602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038a811691821790925591518893918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050505050565b60008181526001602052604090205481906001600160a01b0316338114806105fc57506000828152600260205260409020546001600160a01b031633145b8061062a57506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b604051806040016040528060068152602001650c0c0ccc0c0d60d21b815250906106675760405162461bcd60e51b81526004016103ab9190611130565b50600083815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528491906001600160a01b03166106c15760405162461bcd60e51b81526004016103ab9190611130565b50600084815260016020908152604091829020548251808401909352600683526530303330303760d01b918301919091526001600160a01b039081169190881682146107205760405162461bcd60e51b81526004016103ab9190611130565b5060408051808201909152600681526530303330303160d01b60208201526001600160a01b0387166107655760405162461bcd60e51b81526004016103ab9190611130565b506107708686610d2d565b50505050505050565b61079483838360405180602001604052806000815250610d75565b505050565b600081815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091526001600160a01b031690816103d05760405162461bcd60e51b81526004016103ab9190611130565b60408051808201909152600681526530303330303160d01b60208201526000906001600160a01b0383166108385760405162461bcd60e51b81526004016103ab9190611130565b50506001600160a01b031660009081526003602052604090205490565b6060600780546102d19061137f565b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6001600160a01b03828116600090815260056020908152604080832081516080810190925280549485168252929384939192830190600160a01b900460ff16600281111561092057610920611303565b600281111561093157610931611303565b815260200160018201548152602001600282015481525050905060006001600160a01b031681600001516001600160a01b031614156040518060400160405280600e81526020016d3737ba103b30b634b2103830b4b960911b815250906109ab5760405162461bcd60e51b81526004016103ab9190611130565b506001600160a01b038381166000908152600560209081526040808320815160808101909252805494851682529293909291830190600160a01b900460ff1660028111156109fb576109fb611303565b6002811115610a0c57610a0c611303565b815260200160018201548152602001600282015481525050905060006001600160a01b031681600001516001600160a01b031614156040518060400160405280600e81526020016d3737ba103b30b634b2103830b4b960911b81525090610a865760405162461bcd60e51b81526004016103ab9190611130565b50836001600160a01b031682600001516001600160a01b0316148015610ac15750846001600160a01b031681600001516001600160a01b0316145b95945050505050565b610b0c85858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d7592505050565b5050505050565b610b3f604080516080810190915260008082526020820190815260200160008152602001600081525090565b610b6b604080516080810190915260008082526020820190815260200160008152602001600081525090565b6001600160a01b038381166000908152600560209081526040808320815160808101909252805494851682529293909291830190600160a01b900460ff166002811115610bba57610bba611303565b6002811115610bcb57610bcb611303565b815260200160018201548152602001600282015481525050905060006001600160a01b031681600001516001600160a01b031614156040518060400160405280600e81526020016d3737ba103b30b634b2103830b4b960911b81525090610c455760405162461bcd60e51b81526004016103ab9190611130565b5080516001600160a01b039081166000908152600560209081526040808320815160808101909252805494851682529293909291830190600160a01b900460ff166002811115610c9757610c97611303565b6002811115610ca857610ca8611303565b815260200160018201548152602001600282015481525050905060006001600160a01b031681600001516001600160a01b031614156040518060400160405280600e81526020016d3737ba103b30b634b2103830b4b960911b81525090610d225760405162461bcd60e51b81526004016103ab9190611130565b509094909350915050565b60405162461bcd60e51b815260206004820152600e60248201527f63616e6f74207472616e7366657200000000000000000000000000000000000060448201526064016103ab565b60008281526001602052604090205482906001600160a01b031633811480610db357506000828152600260205260409020546001600160a01b031633145b80610de157506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b604051806040016040528060068152602001650c0c0ccc0c0d60d21b81525090610e1e5760405162461bcd60e51b81526004016103ab9190611130565b50600084815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528591906001600160a01b0316610e785760405162461bcd60e51b81526004016103ab9190611130565b50600085815260016020908152604091829020548251808401909352600683526530303330303760d01b918301919091526001600160a01b03908116919089168214610ed75760405162461bcd60e51b81526004016103ab9190611130565b5060408051808201909152600681526530303330303160d01b60208201526001600160a01b038816610f1c5760405162461bcd60e51b81526004016103ab9190611130565b50610f278787610d2d565b610f39876001600160a01b0316611052565b1561104857604051630a85bd0160e11b81526000906001600160a01b0389169063150b7a0290610f739033908d908c908c906004016113b4565b602060405180830381600087803b158015610f8d57600080fd5b505af1158015610fa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc591906113f0565b60408051808201909152600681527f303033303035000000000000000000000000000000000000000000000000000060208201529091507fffffffff000000000000000000000000000000000000000000000000000000008216630a85bd0160e11b146110455760405162461bcd60e51b81526004016103ab9190611130565b50505b5050505050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081158015906110865750808214155b949350505050565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146110bc57600080fd5b50565b6000602082840312156110d157600080fd5b81356110dc8161108e565b9392505050565b6000815180845260005b81811015611109576020818501810151868301820152016110ed565b8181111561111b576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006110dc60208301846110e3565b60006020828403121561115557600080fd5b5035919050565b80356001600160a01b038116811461117357600080fd5b919050565b6000806040838503121561118b57600080fd5b6111948361115c565b946020939093013593505050565b6000806000606084860312156111b757600080fd5b6111c08461115c565b92506111ce6020850161115c565b9150604084013590509250925092565b6000602082840312156111f057600080fd5b6110dc8261115c565b6000806040838503121561120c57600080fd5b6112158361115c565b91506020830135801515811461122a57600080fd5b809150509250929050565b6000806040838503121561124857600080fd5b6112518361115c565b915061125f6020840161115c565b90509250929050565b60008060008060006080868803121561128057600080fd5b6112898661115c565b94506112976020870161115c565b935060408601359250606086013567ffffffffffffffff808211156112bb57600080fd5b818801915088601f8301126112cf57600080fd5b8135818111156112de57600080fd5b8960208285010111156112f057600080fd5b9699959850939650602001949392505050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b03815116825260208101516003811061134957634e487b7160e01b600052602160045260246000fd5b602083015260408181015190830152606090810151910152565b61010081016113728285611319565b6110dc6080830184611319565b600181811c9082168061139357607f821691505b602082108114156103d057634e487b7160e01b600052602260045260246000fd5b60006001600160a01b038087168352808616602084015250836040830152608060608301526113e660808301846110e3565b9695505050505050565b60006020828403121561140257600080fd5b81516110dc8161108e56fea26469706673582212207167ee760c0f82e655b52a730507c17626e8e0bef40a7232f0e8e0476ea9657964736f6c63430008090033";

type ERC721_520TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721_520TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721_520Token__factory extends ContractFactory {
  constructor(...args: ERC721_520TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721_520Token> {
    return super.deploy(overrides || {}) as Promise<ERC721_520Token>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721_520Token {
    return super.attach(address) as ERC721_520Token;
  }
  override connect(signer: Signer): ERC721_520Token__factory {
    return super.connect(signer) as ERC721_520Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721_520TokenInterface {
    return new utils.Interface(_abi) as ERC721_520TokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721_520Token {
    return new Contract(address, _abi, signerOrProvider) as ERC721_520Token;
  }
}
