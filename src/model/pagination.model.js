import {ModelDefault} from "./model.default";

export class Pagination extends ModelDefault{
    page;
    size;
    totalElements;

    constructor(page = 0, size = 5) {
        super();
        this.page = page;
        this.size = size;
    }
}
