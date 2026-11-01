import { ref } from 'vue'

import type {
    Media,
    MediaElement
} from "~/models/media"

export function useMediaData() {
    const mediaEl = ref<MediaElement[]>(
        [
            {
                "id": "worlds-greatest",
                "type": "video",
                "link": {
                    "href": "https://vimeo.com/753627804"
                },
                "asset": {
                    "src": "/images/media/worlds-greatest.jpg",
                    "alt": "Worlds Greatest TV Visit"
                },
                "title": "Worlds Greatest TV Show Visit",
                "tags": [
                    "video",
                    "hauntedfarm"
                ]
            },
            {
                "id": "q105",
                "type": "video",
                "link": {
                    "href": "https://www.facebook.com/watch/?v=718885242171926"
                },
                "asset": {
                    "src": "/images/media/q1051-video.jpg",
                    "alt": "Season 2020 Q105.1 video"
                },
                "title": "Q105.1 video for 2020",
                "tags": [
                    "video",
                    "hauntedfarm",
                    "commercial"
                ]
            },
            {
                "id": "commercial-2020",
                "type": "video",
                "link": {
                    "href": "https://www.youtube.com/watch?v=_DidNq-8xW0"
                },
                "asset": {
                    "src": "/images/media/HFH2019.png",
                    "alt": "Season 2020 Commercial"
                },
                "title": "Commercial for 2020",
                "tags": [
                    "video",
                    "hauntedfarm",
                    "commercial"
                ]
            },
            {
                "id": "wday-visit",
                "type": "video",
                "link": {
                    "href": "https://vimeo.com/228158874"
                },
                "asset": {
                    "src": "/images/media/73smAEQa-720.jpg",
                    "alt": "DAY 2016 Visit"
                },
                "title": "WDAY Visits 2016",
                "tags": [
                    "video",
                    "hauntedfarm",
                    "WDAY"
                ]
            },
            {
                "id": "midsummer-gathering",
                "type": "photo",
                "link": {
                    "href": "/images/media/01.jpg"
                },
                "asset": {
                    "src": "/images/media/01.jpg",
                    "alt": "Zombie Crew"
                },
                "title": "Zombie Gathering",
                "tags": [
                    "photo",
                    "hauntedfarm"
                ]
            },
            {
                "id": "commercial-2014",
                "type": "video",
                "link": {
                    "href": "https://youtu.be/Bq-XL1x9LVc"
                },
                "asset": {
                    "src": "/images/media/hf_2014_tv_ad.jpg",
                    "alt": "Haunted Farm 2014 Ad"
                },
                "title": "2014 TV Ad",
                "tags": [
                    "video",
                    "hauntedfarm"
                ]
            },
            {
                "id": "kvrr-visit",
                "type": "video",
                "link": {
                    "href": "https://vimeo.com/228159069"
                },
                "asset": {
                    "src": "/images/media/V6QmadSQ-720.jpg",
                    "alt": "KVRR Visit 2014"
                },
                "title": "KVRR Visits 2014",
                "tags": [
                    "video",
                    "hauntedfarm",
                    "KVRR"
                ]
            },
            {
                "id": "teddy-bear",
                "type": "photo",
                "link": {
                    "href": "/images/media/04.jpg"
                },
                "asset": {
                    "src": "/images/media/04.jpg",
                    "alt": "Scary Teddy Bear"
                },
                "title": "Teddy Bear 2014",
                "tags": [
                    "photo",
                    "hauntedfarm"
                ]
            }
        ]
    );
    const media = ref<Media>({
        title: "photos and videos",
        content: [
            "Be sure to submit your photos to photos@hauntedfarm.com or tag #hauntedfarmmn on Instagram.com"
        ],
        mediaEl: mediaEl.value
    })

    return {
        media,
    }
}
