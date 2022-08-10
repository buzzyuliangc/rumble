/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Soul_Token,
  Soul_TokenInterface,
} from "../../../../contracts/tokens/soul-token.sol/Soul_Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "enum ERC42.BurnAuth",
        name: "_burnAuth",
        type: "uint8",
      },
    ],
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
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Burned",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "_expirationDate",
        type: "uint256",
      },
    ],
    name: "Issued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
    name: "expirationDate",
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
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
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
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "setTokenURI",
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
    inputs: [],
    name: "tokenBaseURI",
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
    name: "tokenBurnAuth",
    outputs: [
      {
        internalType: "enum ERC42.BurnAuth",
        name: "",
        type: "uint8",
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
    inputs: [],
    name: "tokenIssuer",
    outputs: [
      {
        internalType: "address",
        name: "_tokenIssuer",
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
  "0x608060405234801561001057600080fd5b50604051611d03380380611d0383398101604081905261002f91610143565b600060208190527f67be87c3ff9960ca1e9cfac5cab2ff4747269cf9ed20c9b7306235ac35a491c58054600160ff1991821681179092557ff7815fccbf112960a73756e185887fedcb9fc64ca0a16cc5923b7960ed780800805482168317905560058054336001600160a01b031991821681179092557f9562381dfbc2d8b8b66e765249f330164b73e329e5f01670660643571d1974df805484168517905563780e9d6360e01b9094527f77b7bbe0e49b76487c9476b5db3354cf5270619d0037ccb899c2a4c4a75b43188054831684179055600b805490941617909255600980548493919291169083600381111561013857634e487b7160e01b600052602160045260246000fd5b021790555050610169565b600060208284031215610154578081fd5b815160048110610162578182fd5b9392505050565b611b8b806101786000396000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c806370a08231116100ee578063a22cb46511610097578063e985e9c511610071578063e985e9c514610354578063f243c2a714610367578063f2fde38b1461036f578063f3fe3bc314610382576101ae565b8063a22cb4651461031b578063b88d4fde1461032e578063c87b56dd14610341576101ae565b80638da5cb5b116100c85780638da5cb5b146102f857806395d89b4114610300578063a080ee8c14610308576101ae565b806370a08231146102c8578063860d248a146102db57806389b3d8f1146102e3576101ae565b806323b872dd1161015b5780634e99b800116101355780634e99b800146102875780634f6ccce71461028f57806355f804b3146102a25780636352211e146102b5576101ae565b806323b872dd1461024e5780632f745c591461026157806342842e0e14610274576101ae565b8063095ea7b31161018c578063095ea7b314610211578063162094c41461022657806318160ddd14610239576101ae565b806301ffc9a7146101b357806306fdde03146101dc578063081812fc146101f1575b600080fd5b6101c66101c1366004611816565b61038a565b6040516101d3919061199b565b60405180910390f35b6101e46103c5565b6040516101d391906119ce565b6102046101ff36600461188e565b610457565b6040516101d3919061194b565b61022461021f3660046117ed565b6104d9565b005b6102246102343660046118a6565b6106b6565b61024161077a565b6040516101d39190611a18565b61022461025c36600461170b565b610780565b61024161026f3660046117ed565b61093b565b61022461028236600461170b565b6109e0565b6101e4610a00565b61024161029d36600461188e565b610a0f565b6102246102b036600461184e565b610a85565b6102046102c336600461188e565b610adb565b6102416102d63660046116bf565b610b33565b6101e4610b8a565b6102eb610bac565b6040516101d391906119a6565b610204610bb5565b6101e4610bc4565b61024161031636600461188e565b610bd3565b6102246103293660046117b3565b610c3b565b61022461033c366004611746565b610caa565b6101e461034f36600461188e565b610cec565b6101c66103623660046116d9565b610d51565b610204610d7f565b61022461037d3660046116bf565b610d8e565b6101e4610e86565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081526020819052604090205460ff165b919050565b6060600680546103d490611a94565b80601f016020809104026020016040519081016040528092919081815260200182805461040090611a94565b801561044d5780601f106104225761010080835404028352916020019161044d565b820191906000526020600020905b81548152906001019060200180831161043057829003601f168201915b5050505050905090565b6000818152600160209081526040808320548151808301909252600682526518181998181960d11b9282019290925283916001600160a01b03166104b75760405162461bcd60e51b81526004016104ae91906119ce565b60405180910390fd5b506000838152600260205260409020546001600160a01b031691505b50919050565b60008181526001602052604090205481906001600160a01b03163381148061052457506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b6040518060400160405280600681526020017f3030333030330000000000000000000000000000000000000000000000000000815250906105785760405162461bcd60e51b81526004016104ae91906119ce565b50600083815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528491906001600160a01b03166105d25760405162461bcd60e51b81526004016104ae91906119ce565b50600084815260016020908152604091829020548251808401909352600683527f3030333030380000000000000000000000000000000000000000000000000000918301919091526001600160a01b03908116919087168214156106495760405162461bcd60e51b81526004016104ae91906119ce565b50600085815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038a811691821790925591518893918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050505050565b60055460408051808201909152600681526530313830303160d01b6020820152906001600160a01b031633146106ff5760405162461bcd60e51b81526004016104ae91906119ce565b50600083815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528491906001600160a01b03166107595760405162461bcd60e51b81526004016104ae91906119ce565b506000848152600d602052604090206107739084846115c8565b5050505050565b600a5490565b60008181526001602052604090205481906001600160a01b0316338114806107be57506000828152600260205260409020546001600160a01b031633145b806107ec57506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b604051806040016040528060068152602001650c0c0ccc0c0d60d21b815250906108295760405162461bcd60e51b81526004016104ae91906119ce565b50600083815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528491906001600160a01b03166108835760405162461bcd60e51b81526004016104ae91906119ce565b50600084815260016020908152604091829020548251808401909352600683526530303330303760d01b918301919091526001600160a01b039081169190881682146108e25760405162461bcd60e51b81526004016104ae91906119ce565b5060408051808201909152600681526530303330303160d01b60208201526001600160a01b0387166109275760405162461bcd60e51b81526004016104ae91906119ce565b506109328686610ea8565b50505050505050565b6001600160a01b0382166000908152600f60209081526040808320548151808301909252600682526530303530303760d01b928201929092529083106109945760405162461bcd60e51b81526004016104ae91906119ce565b506001600160a01b0383166000908152600f602052604090208054839081106109cd57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b6109fb83838360405180602001604052806000815250610edd565b505050565b6060600880546103d490611a94565b600a5460408051808201909152600681526530303530303760d01b60208201526000918310610a515760405162461bcd60e51b81526004016104ae91906119ce565b50600a8281548110610a7357634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b60055460408051808201909152600681526530313830303160d01b6020820152906001600160a01b03163314610ace5760405162461bcd60e51b81526004016104ae91906119ce565b506109fb600883836115c8565b600081815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091526001600160a01b031690816104d35760405162461bcd60e51b81526004016104ae91906119ce565b60408051808201909152600681526530303330303160d01b60208201526000906001600160a01b038316610b7a5760405162461bcd60e51b81526004016104ae91906119ce565b50610b84826111ba565b92915050565b6040518060400160405280600681526020016518189c18181960d11b81525081565b60095460ff1690565b6005546001600160a01b031681565b6060600780546103d490611a94565b6000818152600160209081526040808320548151808301909252600682526518181998181960d11b9282019290925283916001600160a01b0316610c2a5760405162461bcd60e51b81526004016104ae91906119ce565b50610c34836111d5565b9392505050565b3360008181526004602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190610c9e90859061199b565b60405180910390a35050565b61077385858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610edd92505050565b600081815260016020908152604091829020548251808401909352600683526518181998181960d11b9183019190915260609183916001600160a01b0316610d475760405162461bcd60e51b81526004016104ae91906119ce565b50610c3483611241565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b600b546001600160a01b031690565b60055460408051808201909152600681526530313830303160d01b6020820152906001600160a01b03163314610dd75760405162461bcd60e51b81526004016104ae91906119ce565b5060408051808201909152600681526518189c18181960d11b60208201526001600160a01b038216610e1c5760405162461bcd60e51b81526004016104ae91906119ce565b506005546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6040518060400160405280600681526020016530313830303160d01b81525081565b6001600160a01b038216610ebb57600080fd5b80610ec557600080fd5b60405162461bcd60e51b81526004016104ae906119e1565b60008281526001602052604090205482906001600160a01b031633811480610f1b57506000828152600260205260409020546001600160a01b031633145b80610f4957506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b604051806040016040528060068152602001650c0c0ccc0c0d60d21b81525090610f865760405162461bcd60e51b81526004016104ae91906119ce565b50600084815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528591906001600160a01b0316610fe05760405162461bcd60e51b81526004016104ae91906119ce565b50600085815260016020908152604091829020548251808401909352600683526530303330303760d01b918301919091526001600160a01b0390811691908916821461103f5760405162461bcd60e51b81526004016104ae91906119ce565b5060408051808201909152600681526530303330303160d01b60208201526001600160a01b0388166110845760405162461bcd60e51b81526004016104ae91906119ce565b5061108f8787610ea8565b6110a1876001600160a01b031661143d565b156111b057604051630a85bd0160e11b81526000906001600160a01b0389169063150b7a02906110db9033908d908c908c9060040161195f565b602060405180830381600087803b1580156110f557600080fd5b505af1158015611109573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112d9190611832565b60408051808201909152600681527f303033303035000000000000000000000000000000000000000000000000000060208201529091507fffffffff000000000000000000000000000000000000000000000000000000008216630a85bd0160e11b146111ad5760405162461bcd60e51b81526004016104ae91906119ce565b50505b5050505050505050565b6001600160a01b03166000908152600f602052604090205490565b6000818152600160209081526040808320548151808301909252600682526518181998181960d11b9282019290925283916001600160a01b031661122c5760405162461bcd60e51b81526004016104ae91906119ce565b5050506000908152600c602052604090205490565b600081815260016020908152604091829020548251808401909352600683526518181998181960d11b9183019190915260609183916001600160a01b031661129c5760405162461bcd60e51b81526004016104ae91906119ce565b506000838152600d6020526040812080546112b690611a94565b80601f01602080910402602001604051908101604052809291908181526020018280546112e290611a94565b801561132f5780601f106113045761010080835404028352916020019161132f565b820191906000526020600020905b81548152906001019060200180831161131257829003601f168201915b5050505050905060006008805461134590611a94565b80601f016020809104026020016040519081016040528092919081815260200182805461137190611a94565b80156113be5780601f10611393576101008083540402835291602001916113be565b820191906000526020600020905b8154815290600101906020018083116113a157829003601f168201915b505050505090508051600014156113d7575091506104d3565b8151156114095780826040516020016113f192919061191c565b604051602081830303815290604052935050506104d3565b8061141386611479565b60405160200161142492919061191c565b6040516020818303038152906040529350505050919050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081158015906114715750808214155b949350505050565b6060816114ba575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526103c0565b8160005b81156114e457806114ce81611ac9565b91506114dd9050600a83611a39565b91506114be565b60008167ffffffffffffffff81111561150d57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611537576020820181803683370190505b5090505b84156114715761154c600183611a4d565b9150611559600a86611ae4565b611564906030611a21565b60f81b81838151811061158757634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506115c1600a86611a39565b945061153b565b8280546115d490611a94565b90600052602060002090601f0160209004810192826115f6576000855561163c565b82601f1061160f5782800160ff1982351617855561163c565b8280016001018555821561163c579182015b8281111561163c578235825591602001919060010190611621565b5061164892915061164c565b5090565b5b80821115611648576000815560010161164d565b80356001600160a01b03811681146103c057600080fd5b60008083601f840112611689578182fd5b50813567ffffffffffffffff8111156116a0578182fd5b6020830191508360208285010111156116b857600080fd5b9250929050565b6000602082840312156116d0578081fd5b610c3482611661565b600080604083850312156116eb578081fd5b6116f483611661565b915061170260208401611661565b90509250929050565b60008060006060848603121561171f578081fd5b61172884611661565b925061173660208501611661565b9150604084013590509250925092565b60008060008060006080868803121561175d578081fd5b61176686611661565b945061177460208701611661565b935060408601359250606086013567ffffffffffffffff811115611796578182fd5b6117a288828901611678565b969995985093965092949392505050565b600080604083850312156117c5578182fd5b6117ce83611661565b9150602083013580151581146117e2578182fd5b809150509250929050565b600080604083850312156117ff578182fd5b61180883611661565b946020939093013593505050565b600060208284031215611827578081fd5b8135610c3481611b24565b600060208284031215611843578081fd5b8151610c3481611b24565b60008060208385031215611860578182fd5b823567ffffffffffffffff811115611876578283fd5b61188285828601611678565b90969095509350505050565b60006020828403121561189f578081fd5b5035919050565b6000806000604084860312156118ba578283fd5b83359250602084013567ffffffffffffffff8111156118d7578283fd5b6118e386828701611678565b9497909650939450505050565b60008151808452611908816020860160208601611a64565b601f01601f19169290920160200192915050565b6000835161192e818460208801611a64565b835190830190611942818360208801611a64565b01949350505050565b6001600160a01b0391909116815260200190565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261199160808301846118f0565b9695505050505050565b901515815260200190565b60208101600483106119c857634e487b7160e01b600052602160045260246000fd5b91905290565b600060208252610c3460208301846118f0565b6020808252600f908201527f63616e6e6f74207472616e736665720000000000000000000000000000000000604082015260600190565b90815260200190565b60008219821115611a3457611a34611af8565b500190565b600082611a4857611a48611b0e565b500490565b600082821015611a5f57611a5f611af8565b500390565b60005b83811015611a7f578181015183820152602001611a67565b83811115611a8e576000848401525b50505050565b600281046001821680611aa857607f821691505b602082108114156104d357634e487b7160e01b600052602260045260246000fd5b6000600019821415611add57611add611af8565b5060010190565b600082611af357611af3611b0e565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081168114611b5257600080fd5b5056fea2646970667358221220f1afe06f0eefc4befed03ed443f791e17e25e222f76279cbbbbf4113e582a44f64736f6c63430008000033";

type Soul_TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Soul_TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Soul_Token__factory extends ContractFactory {
  constructor(...args: Soul_TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _burnAuth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Soul_Token> {
    return super.deploy(_burnAuth, overrides || {}) as Promise<Soul_Token>;
  }
  override getDeployTransaction(
    _burnAuth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_burnAuth, overrides || {});
  }
  override attach(address: string): Soul_Token {
    return super.attach(address) as Soul_Token;
  }
  override connect(signer: Signer): Soul_Token__factory {
    return super.connect(signer) as Soul_Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Soul_TokenInterface {
    return new utils.Interface(_abi) as Soul_TokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Soul_Token {
    return new Contract(address, _abi, signerOrProvider) as Soul_Token;
  }
}
