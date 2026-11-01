import { ref } from 'vue'
import type { Contact } from '~/models/contact'

export function useContactData() {
    const contact = ref<Contact>({
        title: "Contact us",
        content: [
            "We always look forward to hearing from our victims!"
        ]
    })

    return {
        contact
    }
}
