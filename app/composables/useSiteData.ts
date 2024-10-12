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
            component: "FacebookSvg",
            label: "facebook",
            color: "filter-white",
            bg_color: "facebook",
            icon: "fa-brands fa-facebook",
            display_title: "Facebook",
            href: "https://www.facebook.com/hauntedfarmmn/"
        },
        {
            component: "XSvg",
            label: "x",
            color: "filter-black",
            bg_color: "x",
            icon: "fa-brands fa-x-twitter",
            display_title: "X",
            href: "https://x.com/hauntedfarmmn/"
        },
        {
            component: "InstagramSvg",
            label: "instagram",
            color: "filter-white",
            bg_color: "instagram",
            icon: "fa-brands fa-instagram",
            display_title: "Instagram",
            href: "https://instagram.com/hauntedfarmmn/"
        },
        {
            component: "TiktokSvg",
            label: "tiktok",
            color: "filter-white",
            bg_color: "tiktok",
            icon: "fa-brands fa-tiktok",
            display_title: "Tiktok",
            href: "https://www.tiktok.com/@haunted_farm?lang=en"
        },
        {
            component: "YoutubeSvg",
            label: "youtube",
            color: "filter-white",
            bg_color: "youtube",
            icon: "fa-brands fa-youtube",
            display_title: "Youtube",
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
