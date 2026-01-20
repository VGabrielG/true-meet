
export type Mode = 'friends' | 'couple' | null;
export type Language = 'en' | 'es';

export interface Event {
    title: string;
    description: string;
    date: string;
    location: string;
    price: {
        men: string;
        women: string;
    };
    imageUrl: string;
    imageAlt: string;
    participants: {
        men: number;
        women: number;
    };
    maxParticipants: {
        men: number;
        women: number;
    };
}

export interface DetailSection {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
}

export interface Content {
    title: string;
    upcomingEventsTitle: string;
    whatsappUrl: string;
    contactUs: string;
    friends: {
        title: string;
        cta: string;
        details: DetailSection[];
        events: Event[];
    };
    couple: {
        title: string;
        cta: string;
        details: DetailSection[];
        events: Event[];
    };
    selection: {
        back: string;
        participate: string;
    };
    participationModal: {
        title: string;
        body: string;
        cta: string;
        close: string;
    };
    eventCard: {
        spotsLeft: string;
        spotsForMen: string;
        spotsForWomen: string;
        and: string;
        men: string;
        women: string;
    };
}
