export interface Media {
    title:      string;
    content:    string[];
    mediaEl:    MediaElement[];
}

export interface MediaElement {
    id:    string;
    type:  string;
    link:  Link;
    asset: Asset;
    title: string;
    tags:  string[];
}

export interface Asset {
    src: string;
    alt: string;
}

export interface Link {
    href: string;
}
