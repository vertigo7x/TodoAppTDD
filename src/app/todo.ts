export class Todo {
    public id: number;
    public title: string;
    public complete: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
