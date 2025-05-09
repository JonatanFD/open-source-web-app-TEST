import { Layer } from "./layer.entity";

export class Canvas {
    id: string;
    projectId: string;
    backgroundColor: string;
    createdAt: string;
    lastModified: string;

    layers: Layer[];

    constructor() {
        this.id = '';
        this.projectId = '';
        this.backgroundColor = '';
        this.createdAt = '';
        this.lastModified = '';
        this.layers = [];
    }
}
