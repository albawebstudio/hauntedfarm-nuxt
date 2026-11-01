import { ref } from 'vue'

export interface FaqSection {
    title:   string;
    content: string;
}
export interface FaqItems {
    question:   string;
    answer: string;
}

export function useFaqData() {
    const faqSection = ref<FaqSection>({
        title: 'Frequently Asked Questions',
        content: 'Answers to the most frequently asked questions.'
    })

    const faqItems = ref<FaqItems[]>([
        {
            question: 'How long does it take to go through the attraction?',
            answer: 'Depending on the size of your group, surviving the Haunted Farm typically takes about <strong>40 to 45 minutes</strong>. You\'ll begin with a self-guided tour through the spine-tingling Haunted House, followed by a guided trek through the dark, winding Haunted Woods that leads you right into our other nightmare zones—including The Madman Morgue, The Killer Cave & Dungeon, The Insane Clown Room, and The Vortex & Dark Maze!'
        },
        {
            question: 'What should I wear?',
            answer: 'Dress for the weather and the terrain! Because the majority of our attractions are located outdoors on rough farm grounds and dimly lit wooded trails, we strongly recommend wearing sturdy, closed-toe shoes or boots and cozy layers. Minnesota autumn nights can turn freezing in a heartbeat, so check the forecast before arriving and dress to stay warm while running for your life!'
        },
        {
            question: 'Are there any age restrictions?',
            answer: 'We do not have any age restrictions at the Haunted Farm. We leave that decision up to parents, as you know your children best! However, please keep in mind that our entire farm is designed specifically to entertain with genuine terror and intense scares. If someone in your party decides it\'s too terrifying to finish, please note that we <strong>do not offer refunds</strong> if a guest is too scared to complete the tour.'
        },
        {
            question: 'Does the attraction close with inclement weather?',
            answer: 'Rain or shine, the monsters still hunt! The attraction will remain open even if the weather isn\'t cooperating. Because Minnesota weather can change rapidly, we highly encourage all visitors to keep an eye on the local forecast before heading out south of Moorhead and dress appropriately for whatever Mother Nature (or the farm spirits) throw your way.'
        }
    ])

    return {
        faqSection,
        faqItems,
    }
}
