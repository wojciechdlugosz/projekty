export class Task {
    public name: string;
    public done: boolean;
    public category?: Category;

    private createdAt: Date;

    constructor(
        name: string,
        done: boolean,
        category: Category = Category.GENERAL
    ) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }

    public logCreationDate(extra: string) {
        console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`);
    }
}

export enum Category {
    GENERAL = "general",
    WORK = "work",
    GYM = "gym",
    HOBBY = "hobby",
    SOCIAL = "social",
}