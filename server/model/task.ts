export class Task {
    description : string;
    done : boolean;

    constructor(description: string) {
        this.description = description;
        this.done = false;
    }

    markDone() {
        this.done = true;
    }
}