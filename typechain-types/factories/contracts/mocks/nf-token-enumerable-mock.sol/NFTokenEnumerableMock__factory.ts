/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NFTokenEnumerableMock,
  NFTokenEnumerableMockInterface,
} from "../../../../contracts/mocks/nf-token-enumerable-mock.sol/NFTokenEnumerableMock";

const _abi = [
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    inputs: [],
    name: "totalSupply",
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
  "0x608060405234801561001057600080fd5b50600060208190527f67be87c3ff9960ca1e9cfac5cab2ff4747269cf9ed20c9b7306235ac35a491c5805460ff1990811660019081179092557ff7815fccbf112960a73756e185887fedcb9fc64ca0a16cc5923b7960ed780800805482168317905563780e9d6360e01b9092527f77b7bbe0e49b76487c9476b5db3354cf5270619d0037ccb899c2a4c4a75b43188054909216179055600980546001600160a01b031916331790556117af806100c76000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80634f6ccce7116100cd578063a22cb46511610081578063e985e9c511610066578063e985e9c514610305578063f2fde38b14610341578063f3fe3bc31461035457600080fd5b8063a22cb465146102df578063b88d4fde146102f257600080fd5b806370a08231116100b257806370a0823114610287578063860d248a1461029a5780638da5cb5b146102cc57600080fd5b80634f6ccce7146102615780636352211e1461027457600080fd5b806323b872dd1161012457806340c10f191161010957806340c10f191461022857806342842e0e1461023b57806342966c681461024e57600080fd5b806323b872dd146102025780632f745c591461021557600080fd5b806301ffc9a714610156578063081812fc146101b0578063095ea7b3146101db57806318160ddd146101f0575b600080fd5b61019b61016436600461148b565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081526020819052604090205460ff1690565b60405190151581526020015b60405180910390f35b6101c36101be3660046114af565b610379565b6040516001600160a01b0390911681526020016101a7565b6101ee6101e93660046114e4565b6103fb565b005b6005545b6040519081526020016101a7565b6101ee61021036600461150e565b6105cb565b6101f46102233660046114e4565b610786565b6101ee6102363660046114e4565b61081d565b6101ee61024936600461150e565b610875565b6101ee61025c3660046114af565b610895565b6101f461026f3660046114af565b6108eb565b6101c36102823660046114af565b610953565b6101f461029536600461154a565b6109ab565b6102bf6040518060400160405280600681526020016518189c18181960d11b81525081565b6040516101a791906115b2565b6009546101c3906001600160a01b031681565b6101ee6102ed3660046115c5565b610a0f565b6101ee610300366004611601565b610a7b565b61019b61031336600461169c565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6101ee61034f36600461154a565b610ac4565b6102bf6040518060400160405280600681526020016530313830303160d01b81525081565b6000818152600160209081526040808320548151808301909252600682526518181998181960d11b9282019290925283916001600160a01b03166103d95760405162461bcd60e51b81526004016103d091906115b2565b60405180910390fd5b506000838152600260205260409020546001600160a01b031691505b50919050565b60008181526001602052604090205481906001600160a01b03163381148061044657506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b6040518060400160405280600681526020017f30303330303300000000000000000000000000000000000000000000000000008152509061049a5760405162461bcd60e51b81526004016103d091906115b2565b50600083815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528491906001600160a01b03166104f45760405162461bcd60e51b81526004016103d091906115b2565b50600084815260016020908152604091829020548251808401909352600683527f3030333030380000000000000000000000000000000000000000000000000000918301919091526001600160a01b039081169190871682141561056b5760405162461bcd60e51b81526004016103d091906115b2565b5060008581526002602052604080822080546001600160a01b0319166001600160a01b038a811691821790925591518893918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050505050565b60008181526001602052604090205481906001600160a01b03163381148061060957506000828152600260205260409020546001600160a01b031633145b8061063757506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b604051806040016040528060068152602001650c0c0ccc0c0d60d21b815250906106745760405162461bcd60e51b81526004016103d091906115b2565b50600083815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528491906001600160a01b03166106ce5760405162461bcd60e51b81526004016103d091906115b2565b50600084815260016020908152604091829020548251808401909352600683526530303330303760d01b918301919091526001600160a01b0390811691908816821461072d5760405162461bcd60e51b81526004016103d091906115b2565b5060408051808201909152600681526530303330303160d01b60208201526001600160a01b0387166107725760405162461bcd60e51b81526004016103d091906115b2565b5061077d8686610baf565b50505050505050565b6001600160a01b0382166000908152600760209081526040808320548151808301909252600682526530303530303760d01b928201929092529083106107df5760405162461bcd60e51b81526004016103d091906115b2565b506001600160a01b038316600090815260076020526040902080548390811061080a5761080a6116cf565b9060005260206000200154905092915050565b60095460408051808201909152600681526530313830303160d01b6020820152906001600160a01b031633146108665760405162461bcd60e51b81526004016103d091906115b2565b506108718282610c3a565b5050565b61089083838360405180602001604052806000815250610c9a565b505050565b60095460408051808201909152600681526530313830303160d01b6020820152906001600160a01b031633146108de5760405162461bcd60e51b81526004016103d091906115b2565b506108e881610f77565b50565b60055460408051808201909152600681526530303530303760d01b6020820152600091831061092d5760405162461bcd60e51b81526004016103d091906115b2565b5060058281548110610941576109416116cf565b90600052602060002001549050919050565b600081815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091526001600160a01b031690816103f55760405162461bcd60e51b81526004016103d091906115b2565b60408051808201909152600681526530303330303160d01b60208201526000906001600160a01b0383166109f25760405162461bcd60e51b81526004016103d091906115b2565b50506001600160a01b031660009081526007602052604090205490565b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610abd85858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c9a92505050565b5050505050565b60095460408051808201909152600681526530313830303160d01b6020820152906001600160a01b03163314610b0d5760405162461bcd60e51b81526004016103d091906115b2565b5060408051808201909152600681526518189c18181960d11b60208201526001600160a01b038216610b525760405162461bcd60e51b81526004016103d091906115b2565b506009546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600980546001600160a01b0319166001600160a01b0392909216919091179055565b600081815260016020908152604080832054600290925290912080546001600160a01b03191690556001600160a01b0316610bea818361102b565b610bf483836111a8565b81836001600160a01b0316826001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b610c44828261126c565b600580546001818101835560008390527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db09091018390559054610c8791906116e5565b6000918252600660205260409091205550565b60008281526001602052604090205482906001600160a01b031633811480610cd857506000828152600260205260409020546001600160a01b031633145b80610d0657506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b604051806040016040528060068152602001650c0c0ccc0c0d60d21b81525090610d435760405162461bcd60e51b81526004016103d091906115b2565b50600084815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528591906001600160a01b0316610d9d5760405162461bcd60e51b81526004016103d091906115b2565b50600085815260016020908152604091829020548251808401909352600683526530303330303760d01b918301919091526001600160a01b03908116919089168214610dfc5760405162461bcd60e51b81526004016103d091906115b2565b5060408051808201909152600681526530303330303160d01b60208201526001600160a01b038816610e415760405162461bcd60e51b81526004016103d091906115b2565b50610e4c8787610baf565b610e5e876001600160a01b031661134f565b15610f6d57604051630a85bd0160e11b81526000906001600160a01b0389169063150b7a0290610e989033908d908c908c9060040161170a565b602060405180830381600087803b158015610eb257600080fd5b505af1158015610ec6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eea9190611746565b60408051808201909152600681527f303033303035000000000000000000000000000000000000000000000000000060208201529091507fffffffff000000000000000000000000000000000000000000000000000000008216630a85bd0160e11b14610f6a5760405162461bcd60e51b81526004016103d091906115b2565b50505b5050505050505050565b610f808161138b565b600081815260066020526040812054600554909190610fa1906001906116e5565b9050600060058281548110610fb857610fb86116cf565b906000526020600020015490508060058481548110610fd957610fd96116cf565b6000918252602090912001556005805480610ff657610ff6611763565b600082815260208082208301600019908101839055909201909255918152600690915260408082209390935592835250812055565b600081815260016020908152604091829020548251808401909352600683526530303330303760d01b918301919091526001600160a01b038481169116146110865760405162461bcd60e51b81526004016103d091906115b2565b50600081815260016020818152604080842080546001600160a01b031916905560088252808420546001600160a01b038716855260079092528320549092916110ce916116e5565b9050818114611165576001600160a01b0384166000908152600760205260408120805483908110611101576111016116cf565b906000526020600020015490508060076000876001600160a01b03166001600160a01b031681526020019081526020016000208481548110611145576111456116cf565b600091825260208083209091019290925591825260089052604090208290555b6001600160a01b038416600090815260076020526040902080548061118c5761118c611763565b6001900381819060005260206000200160009055905550505050565b600081815260016020908152604091829020548251808401909352600683526518181998181b60d11b918301919091526001600160a01b0316156111ff5760405162461bcd60e51b81526004016103d091906115b2565b50600081815260016020818152604080842080546001600160a01b0319166001600160a01b0388169081179091558085526007835290842080548085018255818652928520909201859055909252905461125991906116e5565b6000918252600860205260409091205550565b60408051808201909152600681526530303330303160d01b60208201526001600160a01b0383166112b05760405162461bcd60e51b81526004016103d091906115b2565b50600081815260016020908152604091829020548251808401909352600683526518181998181b60d11b918301919091526001600160a01b0316156113085760405162461bcd60e51b81526004016103d091906115b2565b5061131382826111a8565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081158015906113835750808214155b949350505050565b600081815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528291906001600160a01b03166113e45760405162461bcd60e51b81526004016103d091906115b2565b50600082815260016020908152604080832054600290925290912080546001600160a01b03191690556001600160a01b0316611420818461102b565b60405183906000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a4505050565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146108e857600080fd5b60006020828403121561149d57600080fd5b81356114a88161145d565b9392505050565b6000602082840312156114c157600080fd5b5035919050565b80356001600160a01b03811681146114df57600080fd5b919050565b600080604083850312156114f757600080fd5b611500836114c8565b946020939093013593505050565b60008060006060848603121561152357600080fd5b61152c846114c8565b925061153a602085016114c8565b9150604084013590509250925092565b60006020828403121561155c57600080fd5b6114a8826114c8565b6000815180845260005b8181101561158b5760208185018101518683018201520161156f565b8181111561159d576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006114a86020830184611565565b600080604083850312156115d857600080fd5b6115e1836114c8565b9150602083013580151581146115f657600080fd5b809150509250929050565b60008060008060006080868803121561161957600080fd5b611622866114c8565b9450611630602087016114c8565b935060408601359250606086013567ffffffffffffffff8082111561165457600080fd5b818801915088601f83011261166857600080fd5b81358181111561167757600080fd5b89602082850101111561168957600080fd5b9699959850939650602001949392505050565b600080604083850312156116af57600080fd5b6116b8836114c8565b91506116c6602084016114c8565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b60008282101561170557634e487b7160e01b600052601160045260246000fd5b500390565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261173c6080830184611565565b9695505050505050565b60006020828403121561175857600080fd5b81516114a88161145d565b634e487b7160e01b600052603160045260246000fdfea264697066735822122071b0075ccb27261e23e2c811a97a8e423e6e479c697163a931874b87798fe47364736f6c63430008090033";

type NFTokenEnumerableMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTokenEnumerableMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTokenEnumerableMock__factory extends ContractFactory {
  constructor(...args: NFTokenEnumerableMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTokenEnumerableMock> {
    return super.deploy(overrides || {}) as Promise<NFTokenEnumerableMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTokenEnumerableMock {
    return super.attach(address) as NFTokenEnumerableMock;
  }
  override connect(signer: Signer): NFTokenEnumerableMock__factory {
    return super.connect(signer) as NFTokenEnumerableMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTokenEnumerableMockInterface {
    return new utils.Interface(_abi) as NFTokenEnumerableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTokenEnumerableMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NFTokenEnumerableMock;
  }
}
