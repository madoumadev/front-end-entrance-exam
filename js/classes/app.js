import { Site } from "./site";
import {Ripple} from "./ripple.js";
import {DownloadCv} from "./download_cv.js";

export class App{
    constructor(model) {
        this.model = model
    }

    init(){

        const site = new Site('#app')
        site.render(this.model)

        const ripple = new Ripple('.editable')
        ripple.run()

        const download = new DownloadCv('resume')
        download.run()
    }
}