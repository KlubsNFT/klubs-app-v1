import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Alert from "../../component/dialogue/Alert";
import Prompt from "../../component/dialogue/Prompt";
import PFPsContract from "../../contracts/PFPsContract";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class Update implements View {

    private container: DomNode;
    private bannerPreview: DomNode;
    private bannerInput: DomNode<HTMLInputElement>;
    private iconPreview: DomNode;
    private iconInput: DomNode<HTMLInputElement>;
    private nameInput: DomNode<HTMLInputElement>;
    private descriptionTextarea: DomNode<HTMLInputElement>;
    private twitterInput: DomNode<HTMLInputElement>;
    private kakaotalkInput: DomNode<HTMLInputElement>;

    private enumerableCheckbox: DomNode<HTMLInputElement>;
    private totalSupplyLabel: DomNode;
    private totalSupplyInput: DomNode<HTMLInputElement>;

    private mineableCheckbox: DomNode<HTMLInputElement>;
    private miningInfoURLLabel: DomNode;
    private miningInfoURLInput: DomNode<HTMLInputElement>;

    private royaltyInput: DomNode<HTMLInputElement>;
    private royaltyReceiverInput: DomNode<HTMLInputElement>;

    private managerList: DomNode;

    constructor(params: ViewParams) {

        const addr = params.addr;

        Layout.current.title = "PFP 정보 수정";
        Layout.current.content.append(this.container = el(".pfp-update-view",
            el("header", el("h1", "PFP 정보 수정")),
            el("main",
                el(".form",
                    el("h2", "기본 정보 수정"),
                    el("label",
                        el("h3", "배너 이미지 주소"),
                        this.bannerPreview = el("img.banner-preview"),
                        this.bannerInput = el("input", {
                            type: "url",
                            placeholder: "배너 이미지 주소",
                            change: () => {
                                (this.bannerPreview as DomNode<HTMLImageElement>).domElement.src = this.bannerInput.domElement.value;
                            },
                        }),
                    ),
                    el("label",
                        el("h3", "배너 업로드"),
                        el("input", {
                            type: "file",
                            change: (event) => {
                                const file = event.target.files[0];
                                const reader = new FileReader();
                                reader.addEventListener("load", async () => {
                                    const result = await fetch(`https://api.klu.bs/pfp/uploadbanner`, {
                                        method: "POST",
                                        body: reader.result as string,
                                    });
                                    this.bannerInput.domElement.value = await result.text();
                                    this.bannerInput.fireDomEvent("change");
                                }, false);
                                if (file) {
                                    reader.readAsDataURL(file);
                                }
                            },
                        }),
                    ),
                    el("label",
                        el("h3", "아이콘 이미지 주소"),
                        this.iconPreview = el("img.icon-preview"),
                        this.iconInput = el("input", {
                            type: "url",
                            placeholder: "아이콘 이미지 주소",
                            change: () => {
                                (this.iconPreview as DomNode<HTMLImageElement>).domElement.src = this.iconInput.domElement.value;
                            },
                        }),
                    ),
                    el("label",
                        el("h3", "아이콘 업로드"),
                        el("input", {
                            type: "file",
                            change: (event) => {
                                const file = event.target.files[0];
                                const reader = new FileReader();
                                reader.addEventListener("load", async () => {
                                    const result = await fetch(`https://api.klu.bs/pfp/uploadicon`, {
                                        method: "POST",
                                        body: reader.result as string,
                                    });
                                    this.iconInput.domElement.value = await result.text();
                                    this.iconInput.fireDomEvent("change");
                                }, false);
                                if (file) {
                                    reader.readAsDataURL(file);
                                }
                            },
                        }),
                    ),
                    el("label",
                        el("h3", "이름"),
                        this.nameInput = el("input", { type: "text", placeholder: "PFP 이름" }),
                    ),
                    el("label",
                        el("h3", "소개글"),
                        el("p",
                            el("span", "소개글은 마크다운 문법을 사용합니다."),
                            el("a", "마크다운 문법 보기", { href: "https://www.markdownguide.org/cheat-sheet/", target: "_blank" }),
                        ),
                        this.descriptionTextarea = el("textarea", { placeholder: "PFP 소개" }),
                    ),
                    el("label",
                        el("h3", "오픈 카카오톡"),
                        this.kakaotalkInput = el("input", { type: "url", placeholder: "오픈 카카오톡 주소" }),
                    ),
                    el("label",
                        el("h3", "트위터"),
                        this.twitterInput = el("input", { type: "url", placeholder: "트위터 주소" }),
                    ),
                    el("label",
                        el("h3", "채굴 가능 여부"),
                        el("p", "PFP 프로젝트가 채굴이 가능한지 설정합니다."),
                        this.mineableCheckbox = el("input", { type: "checkbox" }, {
                            change: () => {
                                if (this.mineableCheckbox.domElement.checked === true) {
                                    this.miningInfoURLLabel.style({ display: "block" });
                                } else {
                                    this.miningInfoURLLabel.style({ display: "none" });
                                }
                            },
                        }),
                    ),
                    this.miningInfoURLLabel = el("label",
                        el("h3", "채굴 정보 URL"),
                        el("p", "채굴 정보를 확인할 수 있는 페이지의 URL을 기입합니다."),
                        this.miningInfoURLInput = el("input", { type: "url", placeholder: "채굴 정보 URL" }),
                    ),
                    el("button", "정보 저장", {
                        click: async () => {
                            const extra = {
                                banner: this.bannerInput.domElement.value,
                                icon: this.iconInput.domElement.value,
                                name: this.nameInput.domElement.value,
                                description: this.descriptionTextarea.domElement.value,
                                kakaotalk: this.kakaotalkInput.domElement.value,
                                twitter: this.twitterInput.domElement.value,
                                mineable: this.mineableCheckbox.domElement.checked,
                                miningInfoURL: this.miningInfoURLInput.domElement.value,
                            };
                            await PFPsContract.setExtra(addr, JSON.stringify(extra));
                            setTimeout(() => new Alert("저장 완료", "정보를 저장했습니다."), 2000);
                        },
                    }),
                ),
                el(".form",
                    el("h2", "발행량 정보 수정"),
                    el("label",
                        el("h3", "KIP17Full 혹은 KIP17Enumerable 상속 여부"),
                        el("p", "KIP17Full 혹은 KIP17Enumerable를 상속하신 경우, 총 발행량 정보를 매번 입력하지 않으셔도 됩니다."),
                        this.enumerableCheckbox = el("input", { type: "checkbox" }, {
                            change: () => {
                                if (this.enumerableCheckbox.domElement.checked === true) {
                                    this.totalSupplyLabel.style({ display: "none" });
                                } else {
                                    this.totalSupplyLabel.style({ display: "block" });
                                }
                            },
                        }),
                    ),
                    this.totalSupplyLabel = el("label",
                        el("h3", "총 발행량"),
                        this.totalSupplyInput = el("input", { type: "number", placeholder: "총 발행량" }),
                    ),
                    el("button", "정보 저장", {
                        click: async () => {
                            if (this.enumerableCheckbox.domElement.checked === true) {
                                await PFPsContract.setEnumerable(addr, true);
                            } else {
                                await PFPsContract.setTotalSupply(addr, parseInt(this.totalSupplyInput.domElement.value, 10));
                            }
                            setTimeout(() => new Alert("저장 완료", "정보를 저장했습니다."), 2000);
                        },
                    }),
                ),
                el(".form",
                    el("h2", "2차 판매 수수료 정보 수정"),
                    el("label",
                        el("h3", "2차 판매 수수료 비율(%)"),
                        el("p", "2차 판매 수수료 비율은 최대 10%까지 설정하실 수 있으며, 소수점 2번째 자리까지 지정 가능합니다."),
                        this.royaltyInput = el("input", { type: "number", placeholder: "2차 판매 수수료 비율(%)" }),
                    ),
                    el("label",
                        el("h3", "2차 판매 수수료 수령자"),
                        el("p", "2차 판매 수수료를 받을 지갑 주소를 입력합니다."),
                        this.royaltyReceiverInput = el("input", { type: "text", placeholder: "2차 판매 수수료 수령자" }),
                    ),
                    el("button", "정보 저장", {
                        click: async () => {
                            await PFPsContract.setRoyalty(addr, this.royaltyReceiverInput.domElement.value, Math.floor(parseFloat(this.royaltyInput.domElement.value) * 100));
                            setTimeout(() => new Alert("저장 완료", "정보를 저장했습니다."), 2000);
                        },
                    }),
                ),
                el(".manage-managers",
                    el("h2", "매니저 관리"),
                    this.managerList = el("ul"),
                    el("button", "매니저 추가", {
                        click: () => {
                            new Prompt("매니저 추가", "추가할 매니저의 지갑 주소를 입력해주시기 바랍니다.", "추가하기", async (manager) => {
                                await PFPsContract.addManager(addr, manager);
                                ViewUtil.waitTransactionAndRefresh();
                            });
                        },
                    }),
                ),
            ),
        ));

        this.load(addr);
        this.loadTotalSupply(addr);
        this.loadRoyalty(addr);
        this.loadManagers(addr);
    }

    private async load(addr: string) {
        const extras = await PFPsContract.extras(addr);
        if (extras.trim() !== "") {
            let data: any = {};
            try { data = JSON.parse(extras); } catch (e) { }

            (this.bannerPreview as DomNode<HTMLImageElement>).domElement.src = data.banner;
            this.bannerInput.domElement.value = data.banner === undefined ? "" : data.banner;

            (this.iconPreview as DomNode<HTMLImageElement>).domElement.src = data.icon;
            this.iconInput.domElement.value = data.icon === undefined ? "" : data.icon;

            this.nameInput.domElement.value = data.name === undefined ? "" : data.name;
            this.descriptionTextarea.domElement.value = data.description === undefined ? "" : data.description;
            this.kakaotalkInput.domElement.value = data.kakaotalk === undefined ? "" : data.kakaotalk;
            this.twitterInput.domElement.value = data.twitter === undefined ? "" : data.twitter;

            this.mineableCheckbox.domElement.checked = data.mineable;
            if (data.mineable === true) {
                this.miningInfoURLLabel.style({ display: "block" });
            } else {
                this.miningInfoURLLabel.style({ display: "none" });
            }
            this.miningInfoURLInput.domElement.value = data.miningInfoURL === undefined ? "" : data.miningInfoURL;
        }
    }

    private async loadTotalSupply(addr: string) {
        const enumerable = await PFPsContract.enumerables(addr);
        this.enumerableCheckbox.domElement.checked = enumerable;
        if (enumerable === true) {
            this.enumerableCheckbox.fireDomEvent("change");
        }
        try {
            const totalSupply = await PFPsContract.getTotalSupply(addr);
            this.totalSupplyInput.domElement.value = totalSupply.toString();
        } catch (e) { }
    }

    private async loadRoyalty(addr: string) {
        const royaltyInfo = await PFPsContract.royalties(addr);
        this.royaltyInput.domElement.value = (royaltyInfo.royalty / 100).toString();
        this.royaltyReceiverInput.domElement.value = royaltyInfo.receiver;
    }

    private async loadManagers(addr: string) {
        this.managerList.empty();
        const managerCount = await PFPsContract.getManagerCount(addr);
        const promises: Promise<void>[] = [];
        for (let i = 0; i < managerCount.toNumber(); i += 1) {
            const promise = async (index: number) => {
                const manager = await PFPsContract.managers(addr, index);
                this.managerList.append(el("li",
                    el("span", manager),
                    el("button", el("i.fas.fa-user-minus"), {
                        click: async () => {
                            await PFPsContract.removeManager(addr, manager);
                            ViewUtil.waitTransactionAndRefresh();
                        },
                    }),
                ));
            };
            promises.push(promise(i));
        }
        await Promise.all(promises);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
