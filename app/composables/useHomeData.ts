import { ref } from 'vue'

import { useSiteData } from "~/composables/useSiteData"
import type { Home, Cta } from '~/models/home'

const date = new Date()
const { site } = useSiteData()

export function useHomeData() {
    const currentYear = date.getFullYear()
    const yrsHaunting = date.getFullYear() - site.value.established

    const ctas = ref<Cta[]>([
        {
            label: "tickets",
            displayText: "Tickets",
            href: "/#tickets",
            className: "bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        },
        {
            label: "abou us",
            displayText: "Learn more",
            href: "/#about",
            className: "hover:text-gray-900 border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 sm:ms-4"
        }
    ])
    const home = ref<Home>({
        title: `Haunting for <span class="text-primary-600 md:text-7xl lg:text-8xl px-2">${yrsHaunting}</span> Years`,
        content: [
            `Welcome to <span class="text-white font-another-danger px-2">The Haunted Farm</span><br/>Come join us in ${currentYear} for our most <span class="text-primary font-wolves-vs-monster">chilling</span> season at The Haunted Farm`
        ],
        ctas: ctas.value
    })

    return {
        home
    }
}
