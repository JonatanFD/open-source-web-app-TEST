import { Canvas } from "./canvas.entity";

export class Project {
    id: string;
    userId: string;
    createdAt: string;
    status: string;

    previewImageUrl: string;
    name: string;
    tshirtColor: string;
    tshirtSize: string;
    lastModified: string;
    canvas: Canvas;


    constructor() {
        this.id = '';
        this.userId = '';
        this.createdAt = '';
        this.status = '';
        this.previewImageUrl = '';
        this.name = '';
        this.tshirtColor = '';
        this.tshirtSize = '';
        this.lastModified = '';
        this.canvas = new Canvas();
    }
}
