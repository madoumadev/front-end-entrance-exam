export class Block {
    constructor(value) {
        this.value = value;
    }

    toHTML() {
        throw new Error("Реализуйте метод toHTML");
    }
}
