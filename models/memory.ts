

export default class Memory {

    id: number;
    createdAt: string;
    updatedAt: string;
    content: string;
    coordinates: string;
    contacts: [] | null;

    constructor(
        id: number,
        createdAt: string,
        updatedAt: string,
        content: string,
        coordinates: string,
        contacts: [] | null
    )
    {
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.content = content;
        this.coordinates = coordinates;
        this.contacts = contacts;
    }
}