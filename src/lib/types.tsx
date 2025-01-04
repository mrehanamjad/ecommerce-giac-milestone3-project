export interface ProductI {
    id: number;
    title: string;
    newPrice: number;
    prevPrice?: number;
    discountPercent?: number;
    ratting: number;
    imgSrc: string;
    description: string;
}