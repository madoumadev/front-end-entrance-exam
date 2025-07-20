export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector);
        this.$el.className = "cv-container";
    }

    render(model) {
        this.$el.innerHTML = "";

        model.forEach((block) => {
            this.$el.insertAdjacentHTML("beforeend", block.toHTML());
        });
    }
}
