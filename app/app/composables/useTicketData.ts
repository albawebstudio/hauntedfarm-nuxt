import { ref } from 'vue'
import type {
    Ticket,
    Cta,
    Pass,
    Admission
} from "~/models/ticket"

export function useTicketData() {
    const admission = ref<Admission>({
        name: "General Admission",
        price: 25,
        label: "Per Person",
        currency: "USD",
        terms: "We accept cash and most major credit cards"
    });
    const pass = ref<Pass[]> ([
        {
            admission: admission.value,
            content: [
                "A thrilling and unforgettable experience for those who are brave enough to face their fears and venture into the unknown."
            ],
            attractions: [
                "Haunted House",
                "Haunted Woods",
                "Insane Clown Room",
                "Vortex",
                "Dark Maze"
            ]
        }
    ]);
    const cta = ref<Cta>({
        icon: "far fa-ticket",
        label: "Online Coupon",
        href: null
    });
    const ticket = ref<Ticket>({
        title: "Haunt Pass Options",
        content: [
            "The Haunted Farm offers a tremendous value for a night of immense entertainment."
        ],
        passes: pass.value,
        cta: cta.value,
    })

    return {
        ticket,
        pass,
        cta
    }
}
