export class Note {
  [x: string]: any;
    public title!: string;
    public body!: string;
    public dateCreated: Date = new Date();
    public dateUpdated: Date = new Date();
}
