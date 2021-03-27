import {ModelDefault} from "./model.default";

export class FormError extends ModelDefault{
    present;
    message;

    constructor(present, message) {
        super();
        this.present = present;
        this.message = message;
    }

}
