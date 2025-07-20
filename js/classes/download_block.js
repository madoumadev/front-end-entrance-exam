import { Block } from "./blocks.js";

export class DownloadButtonBlock extends Block {
    constructor() {
        super();
    }

    toHTML() {
        return "<button id='download-btn' class='download-btn'>Download PDF</button>";
    }
}
