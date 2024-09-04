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
        price: 22,
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
        content: 'The Big Show runs Friday & Saturday starting September 27th through Halloween October 31st from 7-11 pm',
        // events:  events.value,
        events: events,
    });

    return {
        schedule,
        events,
    }
}
