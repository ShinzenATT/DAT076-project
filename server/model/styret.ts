export class Styret {
    name : string;
    post: string;
    email: string;
    description : string;
    imagepath : string;
    readonly id : number;

    constructor(data: Styret) {
        this.name = data.name;
        this.post = data.post;
        this.email = data.email;
        this.description = data.description;
        this.imagepath = data.imagepath;
        this.id = data.id;
    }
}

