export interface NewsDTO {
    id: string;
    slug: string;
    title: string;
    summary: string;
    fullContent: string[];
    category: string;
    imageUrl: string;
    publishDate: string;
    badge?: string;
    isFeatured?: boolean;
}

export interface CarouselNewsDTO extends NewsDTO {
    badge?: string;
}
