export default class Memory {
    id: number;
    createdAt: string;
    updatedAt: string;
    content: string;
    coordinates: string;

    constructor(
        id: number,
        createdAt: string,
        updatedAt: string,
        content: string,
        coordinates: string
    ) {
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.content = content;
        this.coordinates = coordinates;
    }
}