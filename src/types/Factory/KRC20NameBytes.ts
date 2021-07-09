// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class KRC20NameBytes extends SmartContract {
  static bind(address: Address): KRC20NameBytes {
    return new KRC20NameBytes("KRC20NameBytes", address);
  }

  name(): Bytes {
    let result = super.call("name", []);

    return result[0].toBytes();
  }

  try_name(): CallResult<Bytes> {
    let result = super.tryCall("name", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }
}
