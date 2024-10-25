import {config} from "@fortawesome/fontawesome-svg-core";
import tailwindConfig from "tailwindcss/stubs/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
const hauntedfarm = {
    colors: {
        cod_gray: {
            DEFAULT: '#060606',
            50: '#767676',
            100: '#6C6C6C',
            200: '#585858',
            300: '#434343',
            400: '#2F2F2F',
            500: '#1A1A1A',
            600: '#060606',
            700: '#000000',
            800: '#000000',
            900: '#000000',
            950: '#000000'
        },
        japonica: {
            DEFAULT: '#D27B58',
            50: '#FFFFFF',
            100: '#FDFAF9',
            200: '#F5E1D9',
            300: '#ECC7B8',
            400: '#E3AE98',
            500: '#DB9478',
            600: '#D27B58',
            700: '#BF5B33',
            800: '#924627',
            900: '#66311C',
            950: '#502616'
        },
        thunderbird: {
            DEFAULT: '#d71818',
            50: '#fff1f1',
            100: '#ffe1e1',
            200: '#ffc7c7',
            300: '#ffa0a0',
            400: '#ff6a6a',
            500: '#f83b3b',
            600: '#d71818',
            700: '#c11414',
            800: '#a01414',
            900: '#841818',
            950: '#480707',
        },
        timberwolf: {
            DEFAULT: '#D2CFC9',
            50: '#FFFFFF',
            100: '#FFFFFF',
            200: '#FFFFFF',
            300: '#FFFFFF',
            400: '#F7F7F6',
            500: '#E5E3DF',
            600: '#D2CFC9',
            700: '#B9B4AA',
            800: '#9F998C',
            900: '#847D6E',
            950: '#756F62'
        },
        jape: {
            DEFAULT: '#090909',
            50: '#797979',
            100: '#6F6F6F',
            200: '#5B5B5B',
            300: '#464646',
            400: '#323232',
            500: '#1D1D1D',
            600: '#090909',
            700: '#000000',
            800: '#000000',
            900: '#000000',
            950: '#000000'
        },
        merlin: {
            DEFAULT: '#434240',
            50: '#B3B2B0',
            100: '#AAA8A5',
            200: '#969491',
            300: '#82807C',
            400: '#6D6B68',
            500: '#585754',
            600: '#434240',
            700: '#262625',
            800: '#0A0909',
            900: '#000000',
            950: '#000000'
        },
        tiktok: {
            DEFAULT: '#00F2EA',
            50: '#D3FFFE',
            100: '#BFFFFD',
            200: '#96FFFC',
            300: '#6DFFFA',
            400: '#45FFF9',
            500: '#1CFFF7',
            600: '#00F2EA',
            700: '#00BAB4',
            800: '#00827E',
            900: '#004A47',
            950: '#002E2C'
        },
    }
}
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
            colors: {
                primary: hauntedfarm.colors.thunderbird,
                secondary: hauntedfarm.colors.timberwolf,
                light: hauntedfarm.colors.timberwolf,
                black: hauntedfarm.colors.jape,
                merlin: hauntedfarm.colors.merlin,
                orange: hauntedfarm.colors.japonica,
            },
        },
        fontFamily: {
            'sans': [
                'Raleway',
                'Inter',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ],
            'creepster': [
                'Creepster',
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
            'scary-things': [
                'Scary Things'
            ],
            'unthinkers': [
                'Unthinkers',
            ],
            'oswald': [
                'Oswald',
            ],
        }
    },
    plugins: [],
}

