/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  NFTokenEnumerable,
  NFTokenEnumerableInterface,
} from "../../../../contracts/tokens/nf-token-enumerable.sol/NFTokenEnumerable";

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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600060208190527f67be87c3ff9960ca1e9cfac5cab2ff4747269cf9ed20c9b7306235ac35a491c5805460ff1990811660019081179092557ff7815fccbf112960a73756e185887fedcb9fc64ca0a16cc5923b7960ed780800805482168317905563780e9d6360e01b9092527f77b7bbe0e49b76487c9476b5db3354cf5270619d0037ccb899c2a4c4a75b431880549092161790556112dd806100b56000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806342842e0e1161008c57806370a082311161006657806370a08231146101b6578063a22cb465146101c9578063b88d4fde146101dc578063e985e9c5146101ef576100df565b806342842e0e1461017d5780634f6ccce7146101905780636352211e146101a3576100df565b806318160ddd116100bd57806318160ddd1461014257806323b872dd146101575780632f745c591461016a576100df565b806301ffc9a7146100e4578063081812fc1461010d578063095ea7b31461012d575b600080fd5b6100f76100f2366004611141565b610202565b604051610104919061122c565b60405180910390f35b61012061011b366004611179565b61023d565b60405161010491906111dc565b61014061013b366004611118565b6102bf565b005b61014a61049c565b604051610104919061124a565b61014061016536600461100d565b6104a2565b61014a610178366004611118565b61065d565b61014061018b36600461100d565b610702565b61014a61019e366004611179565b610722565b6101206101b1366004611179565b610798565b61014a6101c4366004610fba565b6107f0565b6101406101d73660046110de565b610847565b6101406101ea366004611048565b6108b6565b6100f76101fd366004610fdb565b6108ff565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081526020819052604090205460ff165b919050565b6000818152600160209081526040808320548151808301909252600682526518181998181960d11b9282019290925283916001600160a01b031661029d5760405162461bcd60e51b81526004016102949190611237565b60405180910390fd5b506000838152600260205260409020546001600160a01b031691505b50919050565b60008181526001602052604090205481906001600160a01b03163381148061030a57506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b6040518060400160405280600681526020017f30303330303300000000000000000000000000000000000000000000000000008152509061035e5760405162461bcd60e51b81526004016102949190611237565b50600083815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528491906001600160a01b03166103b85760405162461bcd60e51b81526004016102949190611237565b50600084815260016020908152604091829020548251808401909352600683527f3030333030380000000000000000000000000000000000000000000000000000918301919091526001600160a01b039081169190871682141561042f5760405162461bcd60e51b81526004016102949190611237565b50600085815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038a811691821790925591518893918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050505050565b60055490565b60008181526001602052604090205481906001600160a01b0316338114806104e057506000828152600260205260409020546001600160a01b031633145b8061050e57506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b604051806040016040528060068152602001650c0c0ccc0c0d60d21b8152509061054b5760405162461bcd60e51b81526004016102949190611237565b50600083815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528491906001600160a01b03166105a55760405162461bcd60e51b81526004016102949190611237565b50600084815260016020908152604091829020548251808401909352600683526530303330303760d01b918301919091526001600160a01b039081169190881682146106045760405162461bcd60e51b81526004016102949190611237565b5060408051808201909152600681526530303330303160d01b60208201526001600160a01b0387166106495760405162461bcd60e51b81526004016102949190611237565b50610654868661092d565b50505050505050565b6001600160a01b0382166000908152600760209081526040808320548151808301909252600682526530303530303760d01b928201929092529083106106b65760405162461bcd60e51b81526004016102949190611237565b506001600160a01b03831660009081526007602052604090208054839081106106ef57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b61071d838383604051806020016040528060008152506109a8565b505050565b60055460408051808201909152600681526530303530303760d01b602082015260009183106107645760405162461bcd60e51b81526004016102949190611237565b506005828154811061078657634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b600081815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091526001600160a01b031690816102b95760405162461bcd60e51b81526004016102949190611237565b60408051808201909152600681526530303330303160d01b60208201526000906001600160a01b0383166108375760405162461bcd60e51b81526004016102949190611237565b5061084182610c85565b92915050565b3360008181526004602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31906108aa90859061122c565b60405180910390a35050565b6108f885858585858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506109a892505050565b5050505050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000818152600160205260409020546001600160a01b031661094e82610ca0565b6109588183610ccb565b6109628383610e7f565b81836001600160a01b0316826001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60008281526001602052604090205482906001600160a01b0316338114806109e657506000828152600260205260409020546001600160a01b031633145b80610a1457506001600160a01b038116600090815260046020908152604080832033845290915290205460ff165b604051806040016040528060068152602001650c0c0ccc0c0d60d21b81525090610a515760405162461bcd60e51b81526004016102949190611237565b50600084815260016020908152604091829020548251808401909352600683526518181998181960d11b918301919091528591906001600160a01b0316610aab5760405162461bcd60e51b81526004016102949190611237565b50600085815260016020908152604091829020548251808401909352600683526530303330303760d01b918301919091526001600160a01b03908116919089168214610b0a5760405162461bcd60e51b81526004016102949190611237565b5060408051808201909152600681526530303330303160d01b60208201526001600160a01b038816610b4f5760405162461bcd60e51b81526004016102949190611237565b50610b5a878761092d565b610b6c876001600160a01b0316610f67565b15610c7b57604051630a85bd0160e11b81526000906001600160a01b0389169063150b7a0290610ba69033908d908c908c906004016111f0565b602060405180830381600087803b158015610bc057600080fd5b505af1158015610bd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf8919061115d565b60408051808201909152600681527f303033303035000000000000000000000000000000000000000000000000000060208201529091507fffffffff000000000000000000000000000000000000000000000000000000008216630a85bd0160e11b14610c785760405162461bcd60e51b81526004016102949190611237565b50505b5050505050505050565b6001600160a01b031660009081526007602052604090205490565b6000908152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff19169055565b600081815260016020908152604091829020548251808401909352600683526530303330303760d01b918301919091526001600160a01b03848116911614610d265760405162461bcd60e51b81526004016102949190611237565b506000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916905560088252808420546001600160a01b03871685526007909252832054909291610d7b91611253565b9050818114610e2e576001600160a01b0384166000908152600760205260408120805483908110610dbc57634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508060076000876001600160a01b03166001600160a01b031681526020019081526020016000208481548110610e0e57634e487b7160e01b600052603260045260246000fd5b600091825260208083209091019290925591825260089052604090208290555b6001600160a01b0384166000908152600760205260409020805480610e6357634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600081815260016020908152604091829020548251808401909352600683527f3030333030360000000000000000000000000000000000000000000000000000918301919091526001600160a01b031615610eed5760405162461bcd60e51b81526004016102949190611237565b506000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03881690811790915580855260078352908420805480850182558186529285209092018590559092529054610f549190611253565b6000918252600860205260409091205550565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708115801590610f9b5750808214155b949350505050565b80356001600160a01b038116811461023857600080fd5b600060208284031215610fcb578081fd5b610fd482610fa3565b9392505050565b60008060408385031215610fed578081fd5b610ff683610fa3565b915061100460208401610fa3565b90509250929050565b600080600060608486031215611021578081fd5b61102a84610fa3565b925061103860208501610fa3565b9150604084013590509250925092565b60008060008060006080868803121561105f578081fd5b61106886610fa3565b945061107660208701610fa3565b935060408601359250606086013567ffffffffffffffff80821115611099578283fd5b818801915088601f8301126110ac578283fd5b8135818111156110ba578384fd5b8960208285010111156110cb578384fd5b9699959850939650602001949392505050565b600080604083850312156110f0578182fd5b6110f983610fa3565b91506020830135801515811461110d578182fd5b809150509250929050565b6000806040838503121561112a578182fd5b61113383610fa3565b946020939093013593505050565b600060208284031215611152578081fd5b8135610fd481611276565b60006020828403121561116e578081fd5b8151610fd481611276565b60006020828403121561118a578081fd5b5035919050565b60008151808452815b818110156111b65760208185018101518683018201520161119a565b818111156111c75782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b60006001600160a01b038087168352808616602084015250836040830152608060608301526112226080830184611191565b9695505050505050565b901515815260200190565b600060208252610fd46020830184611191565b90815260200190565b60008282101561127157634e487b7160e01b81526011600452602481fd5b500390565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146112a457600080fd5b5056fea2646970667358221220e5a7d02944f2ad6154e7e62f6b2cba1e0ad5b80b3f92cc5fdbd6bec7427139fb64736f6c63430008000033";

type NFTokenEnumerableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTokenEnumerableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTokenEnumerable__factory extends ContractFactory {
  constructor(...args: NFTokenEnumerableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTokenEnumerable> {
    return super.deploy(overrides || {}) as Promise<NFTokenEnumerable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTokenEnumerable {
    return super.attach(address) as NFTokenEnumerable;
  }
  override connect(signer: Signer): NFTokenEnumerable__factory {
    return super.connect(signer) as NFTokenEnumerable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTokenEnumerableInterface {
    return new utils.Interface(_abi) as NFTokenEnumerableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTokenEnumerable {
    return new Contract(address, _abi, signerOrProvider) as NFTokenEnumerable;
  }
}
