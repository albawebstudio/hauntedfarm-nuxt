import { ref } from 'vue'
import type { About, Item } from '~/models/about'

export function useAboutData() {
    const items = ref<Item[]> ([
        {
            icon: 'fa-home',
            title: "attractions",
            content: "The line up changes almost ever year. Enjoy the Haunted House, Madman Morgue, Killer Cave, Insane Clown Room, Dungeon, Vortex, Dark Maze and more."
        },
        {
            icon: 'fa-tree',
            title: "the woods",
            content: "The walk through the woods is as bone chilling as ever. The nefarious winding trail will be sure to make your hair raise as well as make your spine tingle."
        },
        {
            icon: 'fa-users',
            title: "group party",
            content: "The Haunted Farm is the perfect place to host a company or group outing. Get your friend/co workers together and see how a little fright adds spice to any evening."
        },
        {
            icon: 'fa-umbrella',
            title: "be prepared",
            content: "Weather can change quickly in this part of the country and we always try to keep our doors open. Please dress appropriately for any possible inclement weather."
        }
    ])
    const about = ref<About> ({
        title: "About The Haunted Farm",
        content: "The Haunted Farm is a genuine farm of terror with thirty years experience in the haunting industry. The farm features various shocking creatures that lurk in woods, 15 energetic and spine tingling haunted attractions, and a most hair raising walk through the dark and dangerous woods.",
        items: items.value,
    })

    return {
        items,
        about,
    }

}
