export interface Ticket {
    title:   string;
    content: string[];
    passes:  Pass[];
    cta:     Cta;
}

export interface Cta {
    icon:  string;
    label: string;
    href:  null;
}

export interface Pass {
    admission:   Admission;
    content:     string[];
    attractions: string[];
}

export interface Admission {
    name:  string;
    price: number;
    label: string;
}
