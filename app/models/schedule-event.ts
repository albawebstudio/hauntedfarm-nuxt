export interface ScheduleEvent {
    "@context":          string;
    "@type":             string;
    name:                string;
    description:         string;
    location:            Location;
    offers:              Offers;
    performer:           Performer;
    startDate:           Date;
    endDate:             Date;
    eventAttendanceMode: string;
    eventStatus:         string;
    image:               string[];
    url:                 string;
    organizer:           Location;
}

export interface Location {
    "@type":  string;
    name:     string;
    address?: string;
    url:      string;
}

export interface Offers {
    "@type":       string;
    price:         number;
    priceCurrency: string;
    availability:  string;
    validFrom:     Date;
    url:           string;
}

export interface Performer {
    "@type": string;
    name:    string;
}
