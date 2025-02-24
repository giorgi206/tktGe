export interface Carousel {
    banners: Banner[];
    shuffle: boolean;
}

export interface Banner {
    itemId:       number;
    name:         string;
    type:         number;
    mobileImage:  string;
    desktopImage: string;
    sortOrder:    number;
    status:       number;
}
