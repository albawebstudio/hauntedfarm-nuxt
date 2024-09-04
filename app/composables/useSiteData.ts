import { ref } from 'vue'
import type {
    Address,
    Email,
    Phone,
    Link,
    SocialLink
} from '~/models/common'
import type { Site } from '~/models/site'

export function useSiteData() {
    const address = ref<Address> ({
        street1: "1947 130th Avenue South",
        street2: null,
        city: "Moorhead",
        state: "MN",
        postal_code: "56560"
    });
    const emails = ref<Email[]> ([
        {
            display_name: "Support",
            account: "support",
            domain: "hauntedfarm.com"
        }
    ])
    const phone = ref<Phone> ({
        raw: "+12185854539",
        formatted: "+1 (218) 585-4539"
    })
    const links = ref<Link[]> ([
        {
            title: "about-us",
            to: "/#about",
            external: true,
            icon: null,
            displayText: "About Us",
        },
        {
            title: "tickets",
            to: "/#tickets",
            external: true,
            icon: null,
            displayText: "Tickets",
        },
        {
            title: "schedule",
            to: "/#schedule",
            external: true,
            icon: null,
            displayText: "Schedule",
        },
        {
            title: "media",
            to: "/#media",
            external: true,
            icon: null,
            displayText: "Media",
        },
        {
            title: "Contact",
            to: "/#contact",
            external: true,
            icon: null,
            displayText: "Contact",
        }
    ])
    const social_links = ref<SocialLink[]> ([
        {
            label: "facebook",
            color: "filter-white",
            bg_color: "facebook",
            display_title: "Facebook",
            icon: "/icons/icon-facebook.svg",
            href: "https://www.facebook.com/hauntedfarmmn/"
        },
        {
            label: "x",
            color: "filter-black",
            bg_color: "x",
            display_title: "X",
            icon: "/icons/icon-x.svg",
            href: "https://x.com/hauntedfarmmn/"
        },
        {
            label: "instagram",
            color: "filter-white",
            bg_color: "instagram",
            display_title: "Instagram",
            icon: "/icons/icon-instagram.svg",
            href: "https://instagram.com/hauntedfarmmn/"
        },
        {
            label: "tiktok",
            color: "filter-white",
            bg_color: "tiktok",
            display_title: "Tiktok",
            icon: "/icons/icon-tiktok.svg",
            href: "https://www.tiktok.com/@haunted_farm?lang=en"
        },
        {
            label: "youtube",
            color: "filter-white",
            bg_color: "youtube",
            display_title: "Youtube",
            icon: "/icons/icon-youtube.svg",
            href: "https://www.youtube.com/channel/UCBUygE-KWIc4hZpDN9VTK9g"
        }
    ])
    const footer_links = ref<Link[]> ([
        {
            title: "about",
            to: "/#about",
            external: true,
            icon: null,
            displayText: "About",
        },
        {
            title: "terms & conditions",
            to: "/terms",
            external: true,
            icon: null,
            displayText: "Terms & Conditions",
        },
        {
            title: "privacy policy",
            to: "/privacy",
            external: true,
            icon: null,
            displayText: "Privacy Policy",
        },
        {
            title: "Contact",
            to: "/#contact",
            external: true,
            icon: null,
            displayText: "Contact",
        }
    ])

    const site = ref<Site>({
        title: "The Haunted Farm",
        legalName: "Haunted Farm LLC",
        shortName: "Haunted Farm",
        tagLine: "Haunting the Fargo-Moorhead area since ",
        url: "https://hauntedfarm.com/",
        established: 1990,
        copyright: 2000,
        address: address.value,
        phone: phone.value,
        emails: emails.value,
        links: links.value,
        social_links: social_links.value,
        footer_links: footer_links.value,
    });

    const getEmailByAccount = (account: string) => computed(() => {
        return emails.value.find(email => email.account === account) || null;
    });

    return {
        address,
        emails,
        phone,
        links,
        social_links,
        site,
        getEmailByAccount
    }
}
