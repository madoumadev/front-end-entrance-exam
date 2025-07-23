import html2pdf from "html2pdf.js";
import { generateRandomFilename } from "../utils.js";

export class DownloadCv {
    constructor(selector) {
        this._printOptions = {
            filename: generateRandomFilename("pdf"),
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: {
                orientation: "p",
                unit: "mm",
                format: "a4",
                floatPrecision: 16,
            },
        };
        this.selector = selector;
        this.button = document.querySelector("#download-btn");
    }

    generatePDF() {
        const element = document.querySelector(`#${this.selector}`);
        html2pdf().set(this._printOptions).from(element).save();
    }

    run() {
        this.button.addEventListener("click", this.generatePDF.bind(this));
    }
}
