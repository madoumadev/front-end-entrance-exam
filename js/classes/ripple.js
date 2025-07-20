import { createRipple } from "../utils.js";

export class Ripple {
    constructor(selector) {
        this.$el = document.querySelectorAll(selector);
    }

    run() {
        this.$el.forEach((el) => {
            const saved = localStorage.getItem(el.dataset.key);
            if (saved) el.innerText = saved;

            el.addEventListener("input", () => {
                localStorage.setItem(el.dataset.key, el.innerText);
                el.classList.add("changed");
                setTimeout(() => el.classList.remove("changed"), 300);
            });

            el.addEventListener("click", function (e) {
                createRipple(e, this);
            });
        });
    }
}
