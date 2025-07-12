import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import { useSiteData } from "~/composables/useSiteData";

import type {
    ScheduleEvent,
    Location,
    Offers,
    Performer
} from '~/models/schedule-event'
import type { Schedule } from '~/models/schedule';

export function useScheduleData() {

    const runtimeConfig = useRuntimeConfig()
    const { site } = useSiteData();
    const startDate = new Date(runtimeConfig.public.startDate);
    const endDate = new Date(runtimeConfig.public.endDate);

    const tagLines: string[] = [
        "Enter the realm of terror.",
        "Dare to be scared.",
        "Experience the ultimate fright.",
        "Get ready to scream.",
        "Face your fears head-on.",
        "Explore the horrors within.",
        "Enter if you dare.",
        "A chilling adventure.",
        "Discover your darkest fears.",
        "Embrace the terror.",
        "Enter the abyss of horror.",
        "Get lost in the madness.",
        "Be part of the nightmare.",
        "Welcome to the terror zone.",
        "Enter the world of fear.",
        "Discover the unknown horrors.",
        "Face your nightmares.",
        "Enter the haunted abyss.",
        "Get ready for a haunting.",
        "A spine-tingling experience.",
        "The terror awaits you.",
        "Enter the realm of darkness.",
        "Ready for a ghostly adventure?",
        "Be scared out of your mind."
    ];

    const organizer = ref<Location>({
        '@type': 'Organization',
        name: site.value.title,
        url: site.value.url,
    });
    const performer = ref<Performer>({
        '@type': 'PerformingGroup',
        name: 'Haunted Farm Zombies, Monsters and Ghosts'
    });
    const offers = ref<Offers> ({
        '@type': 'Offer',
        price: 25,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        validFrom: startDate,
        url: `${site.value.url}/#tickets`
    })
    const location = ref<Location>({
        '@type': 'Place',
        name: site.value.title,
        address: `${site.value.address.street1}, ${site.value.address.city}, ${site.value.address.state} ${site.value.address.postal_code}`,
        url: `${site.value.url}/#directions`
    });

    const usedTagLineIdx:Array<Number> = [];

    const fetchRandomIdx = () => {
        let loop = true;
        while (loop) {
            const randomIdx = Math.floor(Math.random() * (tagLines.length + 1));
            if (!usedTagLineIdx.includes(randomIdx)) {
                loop = false;
                usedTagLineIdx.push(randomIdx);
                return randomIdx;
            }
        }
    }

    const buildEvents = (): ScheduleEvent[] => {
        const events: ScheduleEvent[] = [];
        const today = new Date();
        let eventDate = new Date(startDate.getTime());
        if (eventDate < today) {
            eventDate = new Date(today.getTime());
        }

        while (eventDate <= endDate) {
            if ([5, 6].includes(eventDate.getDay()) || eventDate.setHours(0,0,0,0) === endDate.setHours(0,0,0,0)) {
                let eventEnd = new Date(eventDate.getTime());
                eventEnd.setHours(eventEnd.getHours() + 4);
                const event: ScheduleEvent = {
                    '@context': 'https://schema.org',
                    '@type': 'Event',
                    name: `Haunted Farm ${eventDate.toDateString()}`,
                    tagLine: tagLines[fetchRandomIdx()!],
                    description: `Thirty years of haunting, come join us for the ${eventDate.getFullYear()} season at The Haunted Farm`,
                    location: location.value,
                    offers: offers.value,
                    performer: performer.value,
                    startDate: new Date(eventDate.getTime()),
                    endDate: eventEnd,
                    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
                    eventStatus: 'https://schema.org/EventScheduled',
                    image: [
                        'https://hauntedfarm.com/assets/images/logo.png',
                        'https://hauntedfarm.com/assets/images/logo.png',
                        'https://hauntedfarm.com/assets/images/photo/01.jpg'
                    ],
                    url: site.value.url,
                    organizer: organizer.value
                };
                events.push(event);
            }
            // Increment the date by 1 day
            eventDate.setDate(eventDate.getDate() + 1);
        }
        return events;
    };

    const events = buildEvents();
    const schedule = ref<Schedule> ({
        title: 'dates and hours',
        content: 'The Haunted Farm runs Friday & Saturday starting September 27th through Halloween October 31st from 7-11 pm',
        // events:  events.value,
        events: events,
        tagLines: tagLines,
    });

    return {
        schedule,
        events,
        tagLines,
    }
}
