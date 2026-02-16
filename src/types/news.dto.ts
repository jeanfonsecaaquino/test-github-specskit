export interface NewsDTO {
    id: string;
    title: string;
    summary: string;
    category: string;
    imageUrl: string;
    publishDate: string;
    badge?: string;
    isFeatured?: boolean;
}

export interface CarouselNewsDTO extends NewsDTO {
    badge: string;
}
