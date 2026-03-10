import { config } from "@fortawesome/fontawesome-svg-core";
import tailwindConfig from "tailwindcss/stubs/tailwind.config.js";
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue"
    ],
    theme: {
        extend: {
            dropShadow: {
                glow: [
                    "0 0px 10px rgba(255, 255, 255, 0.35)",
                    "0 0px 10px rgba(255, 255, 255, 0.2)"
                ],
                'red-glow': [
                    "0 0px 10px rgba(248, 59, 59, 0.45)",
                    "0 0px 10px rgba(248, 59, 59, 0.1)"
                ],
                'dark-glow': [
                    "0 0px 10px rgba(19, 19, 19, 0.66)",
                    "0 0px 10px rgba(19, 19, 19, 0.5)"
                ]
            }
        },
        fontFamily: {
            'sans': [
                'Raleway',
                'Inter',
            ],
            'wolves-vs-monster': [
                'Wolves Vs Monster'
            ],
            'american-frights': [
                'American Frights',
            ],
            'another-danger': [
                'Another Danger'
            ],
            'oswald': [
                'Oswald',
            ],
        }
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
    safelist: [
        'hover:bg-primary-800',
        'hover:text-gray-900',
        'hover:bg-gray-100',
        'focus:ring-4',
        'focus:ring-gray-400',
        'sm:ms-4'
    ],
}

