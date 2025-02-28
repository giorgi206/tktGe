export interface PopularEvents {
    eventId:     number;
    eventDate?:  Date;
    eventName:   string;
    venueName:   string;
    minPrice:    number;
    maxPrice:    number;
    imageName:   string;
    v3ImageName: string;
    isSoldOut:   boolean;
    soldType:    number;
}
