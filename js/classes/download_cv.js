import html2pdf from "html2pdf.js";

export class DownloadCv {
    selector = null;
    button = null;

    constructor(selector) {
        this.selector = selector;
        this.button = document.querySelector('#download-btn');
    }

    generatePDF = () => {
        const element = document.querySelector(`#${this.selector}`);
        if(!element) return;
        html2pdf().from(element).save();
    }

    run(){
        this.button.addEventListener("click", this.generatePDF.bind(this));
    }
}
