/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IPFPsInterface extends ethers.utils.Interface {
  functions: {
    "propose(address)": FunctionFragment;
    "extras(address)": FunctionFragment;
    "addrs(uint256)": FunctionFragment;
    "setExtra(address,string)": FunctionFragment;
    "setRoyalty(address,address,uint256)": FunctionFragment;
    "addByPFPOwner(address)": FunctionFragment;
    "managers(address,uint256)": FunctionFragment;
    "getTotalSupply(address)": FunctionFragment;
    "setTotalSupply(address,uint256)": FunctionFragment;
    "addManager(address,address)": FunctionFragment;
    "addByMinter(address)": FunctionFragment;
    "managerCount(address)": FunctionFragment;
    "enumerables(address)": FunctionFragment;
    "totalSupplies(address)": FunctionFragment;
    "royalties(address)": FunctionFragment;
    "existsManager(address,address)": FunctionFragment;
    "setEnumerable(address,bool)": FunctionFragment;
    "removeManager(address,address)": FunctionFragment;
    "addrCount()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "propose", values: [string]): string;
  encodeFunctionData(functionFragment: "extras", values: [string]): string;
  encodeFunctionData(functionFragment: "addrs", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "setExtra",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyalty",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addByPFPOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "managers",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalSupply",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTotalSupply",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addManager",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "addByMinter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "managerCount",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "enumerables", values: [string]): string;
  encodeFunctionData(
    functionFragment: "totalSupplies",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "royalties", values: [string]): string;
  encodeFunctionData(
    functionFragment: "existsManager",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setEnumerable",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "removeManager",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "addrCount", values?: undefined): string;

  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "extras", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addrs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setExtra", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setRoyalty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addByPFPOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "managers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addByMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "managerCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enumerables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "royalties", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "existsManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEnumerable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addrCount", data: BytesLike): Result;

  events: {
    "Propose(address,address)": EventFragment;
    "Add(address,address)": EventFragment;
    "AddManager(address,address)": EventFragment;
    "RemoveManager(address,address)": EventFragment;
    "SetEnumerable(address,bool)": EventFragment;
    "SetTotalSupply(address,uint256)": EventFragment;
    "SetRoyalty(address,address,uint256)": EventFragment;
    "SetExtra(address,string)": EventFragment;
    "Ban(address)": EventFragment;
    "Unban(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Propose"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Add"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetEnumerable"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTotalSupply"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetRoyalty"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetExtra"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Ban"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unban"): EventFragment;
}

export class IPFPs extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IPFPsInterface;

  functions: {
    propose(addr: string, overrides?: Overrides): Promise<ContractTransaction>;

    "propose(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    extras(addr: string, overrides?: CallOverrides): Promise<[string]>;

    "extras(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    addrs(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "addrs(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setExtra(
      addr: string,
      extra: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setExtra(address,string)"(
      addr: string,
      extra: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRoyalty(
      addr: string,
      receiver: string,
      royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRoyalty(address,address,uint256)"(
      addr: string,
      receiver: string,
      royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addByPFPOwner(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addByPFPOwner(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    managers(
      addr: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "managers(address,uint256)"(
      addr: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTotalSupply(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getTotalSupply(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setTotalSupply(
      addr: string,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setTotalSupply(address,uint256)"(
      addr: string,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addManager(
      addr: string,
      manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addManager(address,address)"(
      addr: string,
      manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addByMinter(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addByMinter(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    managerCount(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "managerCount(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    enumerables(addr: string, overrides?: CallOverrides): Promise<[boolean]>;

    "enumerables(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    totalSupplies(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalSupplies(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    royalties(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { receiver: string; royalty: BigNumber }>;

    "royalties(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { receiver: string; royalty: BigNumber }>;

    existsManager(
      addr: string,
      manager: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "existsManager(address,address)"(
      addr: string,
      manager: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setEnumerable(
      addr: string,
      enumerable: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setEnumerable(address,bool)"(
      addr: string,
      enumerable: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeManager(
      addr: string,
      manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeManager(address,address)"(
      addr: string,
      manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addrCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "addrCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  propose(addr: string, overrides?: Overrides): Promise<ContractTransaction>;

  "propose(address)"(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  extras(addr: string, overrides?: CallOverrides): Promise<string>;

  "extras(address)"(addr: string, overrides?: CallOverrides): Promise<string>;

  addrs(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "addrs(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  setExtra(
    addr: string,
    extra: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setExtra(address,string)"(
    addr: string,
    extra: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRoyalty(
    addr: string,
    receiver: string,
    royalty: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRoyalty(address,address,uint256)"(
    addr: string,
    receiver: string,
    royalty: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addByPFPOwner(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addByPFPOwner(address)"(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  managers(
    addr: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "managers(address,uint256)"(
    addr: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getTotalSupply(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalSupply(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setTotalSupply(
    addr: string,
    totalSupply: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setTotalSupply(address,uint256)"(
    addr: string,
    totalSupply: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addManager(
    addr: string,
    manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addManager(address,address)"(
    addr: string,
    manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addByMinter(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addByMinter(address)"(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  managerCount(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  "managerCount(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  enumerables(addr: string, overrides?: CallOverrides): Promise<boolean>;

  "enumerables(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  totalSupplies(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupplies(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  royalties(
    addr: string,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { receiver: string; royalty: BigNumber }>;

  "royalties(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { receiver: string; royalty: BigNumber }>;

  existsManager(
    addr: string,
    manager: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "existsManager(address,address)"(
    addr: string,
    manager: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setEnumerable(
    addr: string,
    enumerable: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setEnumerable(address,bool)"(
    addr: string,
    enumerable: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeManager(
    addr: string,
    manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeManager(address,address)"(
    addr: string,
    manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addrCount(overrides?: CallOverrides): Promise<BigNumber>;

  "addrCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    propose(addr: string, overrides?: CallOverrides): Promise<void>;

    "propose(address)"(addr: string, overrides?: CallOverrides): Promise<void>;

    extras(addr: string, overrides?: CallOverrides): Promise<string>;

    "extras(address)"(addr: string, overrides?: CallOverrides): Promise<string>;

    addrs(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "addrs(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    setExtra(
      addr: string,
      extra: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setExtra(address,string)"(
      addr: string,
      extra: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoyalty(
      addr: string,
      receiver: string,
      royalty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRoyalty(address,address,uint256)"(
      addr: string,
      receiver: string,
      royalty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addByPFPOwner(addr: string, overrides?: CallOverrides): Promise<void>;

    "addByPFPOwner(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    managers(
      addr: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "managers(address,uint256)"(
      addr: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getTotalSupply(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalSupply(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setTotalSupply(
      addr: string,
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTotalSupply(address,uint256)"(
      addr: string,
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addManager(
      addr: string,
      manager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addManager(address,address)"(
      addr: string,
      manager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addByMinter(addr: string, overrides?: CallOverrides): Promise<void>;

    "addByMinter(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    managerCount(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "managerCount(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enumerables(addr: string, overrides?: CallOverrides): Promise<boolean>;

    "enumerables(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalSupplies(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupplies(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    royalties(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { receiver: string; royalty: BigNumber }>;

    "royalties(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { receiver: string; royalty: BigNumber }>;

    existsManager(
      addr: string,
      manager: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "existsManager(address,address)"(
      addr: string,
      manager: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setEnumerable(
      addr: string,
      enumerable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setEnumerable(address,bool)"(
      addr: string,
      enumerable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    removeManager(
      addr: string,
      manager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeManager(address,address)"(
      addr: string,
      manager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addrCount(overrides?: CallOverrides): Promise<BigNumber>;

    "addrCount()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Propose(addr: string | null, manager: string | null): EventFilter;

    Add(addr: string | null, manager: string | null): EventFilter;

    AddManager(addr: string | null, manager: string | null): EventFilter;

    RemoveManager(addr: string | null, manager: string | null): EventFilter;

    SetEnumerable(addr: string | null, enumerable: null): EventFilter;

    SetTotalSupply(addr: string | null, totalSupply: null): EventFilter;

    SetRoyalty(addr: string | null, receiver: null, royalty: null): EventFilter;

    SetExtra(addr: string | null, extra: null): EventFilter;

    Ban(addr: string | null): EventFilter;

    Unban(addr: string | null): EventFilter;
  };

  estimateGas: {
    propose(addr: string, overrides?: Overrides): Promise<BigNumber>;

    "propose(address)"(addr: string, overrides?: Overrides): Promise<BigNumber>;

    extras(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "extras(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addrs(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "addrs(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setExtra(
      addr: string,
      extra: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setExtra(address,string)"(
      addr: string,
      extra: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRoyalty(
      addr: string,
      receiver: string,
      royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRoyalty(address,address,uint256)"(
      addr: string,
      receiver: string,
      royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addByPFPOwner(addr: string, overrides?: Overrides): Promise<BigNumber>;

    "addByPFPOwner(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    managers(
      addr: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "managers(address,uint256)"(
      addr: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalSupply(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalSupply(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setTotalSupply(
      addr: string,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setTotalSupply(address,uint256)"(
      addr: string,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addManager(
      addr: string,
      manager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addManager(address,address)"(
      addr: string,
      manager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addByMinter(addr: string, overrides?: Overrides): Promise<BigNumber>;

    "addByMinter(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    managerCount(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "managerCount(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enumerables(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "enumerables(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupplies(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupplies(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    royalties(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "royalties(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    existsManager(
      addr: string,
      manager: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "existsManager(address,address)"(
      addr: string,
      manager: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setEnumerable(
      addr: string,
      enumerable: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setEnumerable(address,bool)"(
      addr: string,
      enumerable: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeManager(
      addr: string,
      manager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeManager(address,address)"(
      addr: string,
      manager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addrCount(overrides?: CallOverrides): Promise<BigNumber>;

    "addrCount()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    propose(addr: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "propose(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    extras(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "extras(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addrs(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addrs(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setExtra(
      addr: string,
      extra: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setExtra(address,string)"(
      addr: string,
      extra: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRoyalty(
      addr: string,
      receiver: string,
      royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRoyalty(address,address,uint256)"(
      addr: string,
      receiver: string,
      royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addByPFPOwner(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addByPFPOwner(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    managers(
      addr: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "managers(address,uint256)"(
      addr: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalSupply(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalSupply(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setTotalSupply(
      addr: string,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setTotalSupply(address,uint256)"(
      addr: string,
      totalSupply: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addManager(
      addr: string,
      manager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addManager(address,address)"(
      addr: string,
      manager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addByMinter(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addByMinter(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    managerCount(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "managerCount(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enumerables(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "enumerables(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupplies(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalSupplies(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    royalties(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "royalties(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    existsManager(
      addr: string,
      manager: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "existsManager(address,address)"(
      addr: string,
      manager: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setEnumerable(
      addr: string,
      enumerable: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setEnumerable(address,bool)"(
      addr: string,
      enumerable: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeManager(
      addr: string,
      manager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeManager(address,address)"(
      addr: string,
      manager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addrCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "addrCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
