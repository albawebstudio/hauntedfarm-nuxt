import { ref } from 'vue'

import type { Home, Cta } from '~/models/home'
import { useRuntimeConfig } from "#app";

export function useHomeData() {
    const runtimeConfig = useRuntimeConfig()
    const date = new Date()
    const startDate = new Date(runtimeConfig.public.startDate)
    const currentYear = date < startDate ? startDate.getFullYear() : date.getFullYear()

    const ctas = ref<Cta[]>([
        {
            label: "tickets",
            displayText: "Tickets",
            href: "/#tickets",
            className: "bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        },
        {
            label: "about us",
            displayText: "Learn more",
            href: "/#about",
            className: "hover:text-gray-900 hover:bg-gray-100 border border-white focus:ring-4 focus:ring-gray-400 sm:ms-4"
        }
    ])
    const home = ref<Home>({
        title: ``,
        content: [
            `Welcome to <span class="text-orange-700 font-another-danger px-2">The Haunted Farm</span><br/>Come join us in ${currentYear} for our most <span class="text-primary font-wolves-vs-monster">chilling</span> season at The Haunted Farm`
        ],
        ctas: ctas.value
    })

    return {
        home
    }
}
