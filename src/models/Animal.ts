export type Animal = {
    id: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    imageUrl: string;
    isFed: boolean;
    lastFed?: string;
}