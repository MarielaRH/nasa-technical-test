export interface Assets {
    collection: Collection;
}

export interface Collection {
    version: string;
    href:    string;
    items:   Item[];
}

export interface Item {
    href:  string;
    data:  Data[];
    links: Link[];
}

export interface Data {
    center?:             string;
    date_created?:       Date;
    description?:        string;
    description_508?:   string;
    keywords?:          string[];
    media_type?:         string;
    nasa_id:            string;
    secondary_creator?: string;
    title:              string;
    photographer?:      string;
    location?:          string;
    album?:             string[];
}

export interface Link {
    href:    string;
    rel:     string;
    render?: string;
}