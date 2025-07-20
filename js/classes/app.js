import { Site } from "./site";
import {Ripple} from "./ripple.js";

export class App{
    constructor(model) {
        this.model = model
    }

    init(){

        const site = new Site('#app')

       /* const updateCallback = newBlock => {
            this.model.push(newBlock)
            site.render(this.model)
        }*/
        site.render(this.model)

        const ripple = new Ripple('.editable')
        ripple.run()
    }
}