export class Document {
    type: string;
    display: string;
    files: File[];
}

export class File {
    documentLocation : string;
    linkText : string;
}