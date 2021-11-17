import { View, ViewParams } from "skyrouter";
export default class Detail implements View {
    private container;
    private iconDisplay;
    private nameDisplay;
    private descriptionDisplay;
    private socialList;
    private idQueryInput;
    private nftLoading;
    private nftList;
    private prevButton;
    private nextButton;
    private totalSupply;
    private idQuery;
    private page;
    constructor(params: ViewParams);
    private loadInfo;
    private loadNFTs;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Detail.d.ts.map