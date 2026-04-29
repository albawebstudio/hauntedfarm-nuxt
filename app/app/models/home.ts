export interface Cta {
    label: string;
    href:  string;
    displayText: string;
    className: string;
}

export interface Home {
    title:   string;
    content: string[];
    ctas: Cta[];
}
