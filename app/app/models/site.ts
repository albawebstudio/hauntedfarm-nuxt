import type {
    Address,
    Phone,
    Email,
    Link,
    SocialLink
} from '~/models/common'

export interface Site {
    title:        string;
    legalName:    string;
    shortName:    string;
    tagLine:      string;
    url:          string;
    established:  number;
    copyright:    number;
    address:      Address;
    phone:        Phone;
    emails:       Email[];
    links:        Link[];
    social_links: SocialLink[];
    footer_links: Link[];
}
