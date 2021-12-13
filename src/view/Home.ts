import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import ArtNFTCard from "../component/ArtNFTCard";
import Loading from "../component/loading/Loading";
import PFPCard from "../component/PFPCard";
import ArtsContract from "../contracts/ArtsContract";
import PFPsContract from "../contracts/PFPsContract";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Home implements View {

    private container: DomNode;
    private pfpLoading: DomNode;
    private pfpList: DomNode;
    private artsLoading: DomNode;
    private artsList: DomNode;

    constructor() {
        Layout.current.title = "Klaytn based NFT marketplace with MIX";
        Layout.current.content.append(
            (this.container = el(".home-view",
                el("header",
                    el("p", "Klubs는 클레이튼 기반 NFT 마켓플레이스입니다. 100% On-Chain으로 구동되며 MIX를 사용합니다."),
                    el("a", "Klubs 소개", {
                        href: "https://medium.com/klubs/klubs-klaytn-based-nft-marketplace-with-mix-2c93d3a9e014",
                        target: "_blank",
                    }),
                ),
                el(".content",
                    el(".slide",
                        el("header",
                            el("h2", "PFP"),
                            el("a", "PFP 전체 보기", { click: () => ViewUtil.go("/pfp") }),
                        ),
                        this.pfpLoading = new Loading(),
                        el(".pfp-list-container",
                            this.pfpList = el(".pfp-list"),
                        ),
                    ),
                    el(".slide",
                        el("header",
                            el("h2", "Arts"),
                            el("a", "Arts 전체 보기", { click: () => ViewUtil.go("/arts") }),
                        ),
                        this.artsLoading = new Loading(),
                        el(".arts-list-container",
                            this.artsList = el(".arts-list"),
                        ),
                    ),
                ),
            )),
        );
        this.loadPFPs();
        this.loadArts();
    }

    private async loadPFPs() {

        this.pfpList.empty();
        const count = await PFPsContract.getAddrCount();
        let realCount = 0;
        this.pfpList.style({ width: 100 * 316 });

        const array = new Array(count.toNumber()).fill(undefined).map((a, i) => a = i).sort(() => Math.random() - 0.5);

        const promises: Promise<void>[] = [];
        for (const i of array) {
            const promise = async (index: number) => {
                const addr = await PFPsContract.addrs(index);
                if (await PFPsContract.banned(addr) !== true) {
                    const extras = await PFPsContract.extras(addr);
                    if (extras.trim() !== "") {
                        let data: any = {};
                        try { data = JSON.parse(extras); } catch (e) { }
                        if (data.name !== "" && data.hiding !== true && this.container.deleted !== true) {
                            if (realCount < 100) {
                                new PFPCard(addr, data).appendTo(this.pfpList);
                                realCount += 1;
                            }
                        }
                    }
                }
            };
            promises.push(promise(i));
        }
        await Promise.all(promises);

        if (this.container.deleted !== true) {
            this.pfpLoading.delete();
        }
    }

    private async loadArts() {

        this.artsList.empty();
        this.artsList.style({ width: 50 * 216 });

        const totalSupply = (await ArtsContract.totalSupply()).toNumber();
        const ids = new Array(totalSupply).fill(undefined).map((a, i) => a = i).sort(() => Math.random() - 0.5);

        if (this.container.deleted !== true) {
            let count = 0;
            for (const id of ids) {
                new ArtNFTCard(id).appendTo(this.artsList);
                count += 1;
                if (count === 50) {
                    break;
                }
            }
            this.artsLoading.delete();
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
