import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Art implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "Arts";
        Layout.current.content.append(this.container = el(".art-view",
            el(".title", "Klubs Arts는 NFT 아티스트를 위한 공간입니다. 곧 출시됩니다."),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
