export class Document {
    type: string;
    display: string;
    baseUrl: string;
    files: File[];
}

export class File {
    fileName: string;
    linkText: string;
}
