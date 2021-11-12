import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class PFPsContract extends Contract {
    constructor();
    added(addr: string): Promise<boolean>;
    getAddrCount(): Promise<BigNumber>;
    addrs(index: BigNumberish): Promise<string>;
    extras(addr: string): Promise<string>;
    propose(addr: string): Promise<void>;
    addByPFPOwner(addr: string): Promise<void>;
    addByMinter(addr: string): Promise<void>;
    setExtra(addr: string, manager: string): Promise<void>;
    existsManager(addr: string, manager: string): Promise<boolean>;
    addManager(addr: string, manager: string): Promise<void>;
    removeManager(addr: string, manager: string): Promise<void>;
    getManagerCount(addr: string): Promise<BigNumber>;
    getTotalSupply(addr: string): Promise<BigNumber>;
    managers(addr: string, index: BigNumberish): Promise<string>;
}
declare const _default: PFPsContract;
export default _default;
//# sourceMappingURL=PFPsContract.d.ts.map