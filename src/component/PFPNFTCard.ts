import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import CommonUtil from "../CommonUtil";
import PFPStoreContract from "../contracts/PFPStoreContract";
import Loader from "../Loader";
import ViewUtil from "../view/ViewUtil";
import NFTDisplay from "./NFTDisplay";

export default class PFPNFTCard extends DomNode {

    private _mode: "view" | "select" = "view";

    constructor(
        private addr: string,
        private id: number,
        private selecting?: boolean,
        showingOffer?: boolean,
    ) {
        super(".pfp-nft-card");
        this.onDom("click", () => {
            if (this.mode === "view") {
                ViewUtil.go(`/pfp/${addr}/${id}`);
            } else if (this.selecting !== true) {
                this.selecting = true;
                this.update();
                this.fireEvent("select", id);
            } else {
                this.selecting = false;
                this.update();
                this.fireEvent("deselect", id);
            }
        });
        this.load();
        if (showingOffer === true) {
            this.addClass("offers");
            this.loadOffers();
        }
        this.update();
    }

    public set mode(mode: "view" | "select") {
        this._mode = mode;
        this.selecting = false;
        this.update();
    }

    public get mode() {
        return this._mode;
    }

    private update() {
        if (this.mode === "select" && this.selecting === true) {
            this.addClass("selecting");
        } else {
            this.deleteClass("selecting");
        }
    }

    private async load() {
        try {
            const data = await Loader.loadMetadata(this.addr, this.id);
            const saleInfo = await PFPStoreContract.sales(this.addr, this.id);
            if (this.deleted !== true) {
                this.append(
                    data.image === undefined ? undefined : new NFTDisplay(data.image),
                    el(".info",
                        el(".name", data.name),
                        saleInfo.price.eq(0) === true ? undefined : el(".price",
                            el("img", { src: "/images/mix.png", height: "24" }),
                            el("span", CommonUtil.numberWithCommas(utils.formatEther(saleInfo.price))),
                        ),
                    ),
                );
            }
        } catch (e) {
            console.error(e);
            if (this.deleted !== true) {
                this.delete();
            }
        }
    }

    private async loadOffers() {
        //TODO:
    }
}
