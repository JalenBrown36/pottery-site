import EventCard from "./EventCard"

export default function EventGrid() {
    const testData = [
        {
            imgPath: "/interior-store.png",
            title: "First Friday Kids Night",
            date: "Fri. Dec 1st 6:30pm - 8:30pm",
            text: "Every First Friday is Kids Night at The Pottery Cove! Kids always have a blast letting their creative side take over! This is a drop-off event – what will you do with 2 kid-free hours?"
        },
        {
            imgPath: "/rainbow-owl.png",
            title: "Paint ‘Till You Faint - Special Event",
            date: "Wed. Nov 29th 7pm - 12am",
            text: "Calling all night owls! Can’t find the time to paint without being rushed? Well, tonight’s your night then! Join the fun – new discounts every hour, so the later you stay the more you save! Snacks & refreshments included, BYOB always welcome!"
        },
        {
            imgPath: "/snowman.png",
            title: "December Movie Night",
            date: "Fri. Dec 15th 6:30pm - 8:30pm",
            text: "It’s been 20 years since Buddy first trekked from the North Pole, through the seven levels of the Candy Cane Forest, and past the sea of twirly-swirly gum drops to New York City to find his father! Join us for fun, food & games! Pizza & popcorn included! ALL AGES WELCOME!!!"
        },
        {
            imgPath: "/couple-kissing.png",
            title: "Wine & Design",
            date: "Fri. Dec 15th 6:30pm - 8:30pm",
            text: "Join the fun! Come with family, bring your sweetie, make it a BFF night – or just make some time for yourself! Get ahead on your holiday painting while you relax & paint your heart – and stress –  away! Complimentary wine & light snacks. $20 per person pottery minimum."
        }
    ]

    return (
        <div className="grid grid-cols-4 gap-4 text-left">
            {testData.map((event, index) => (
                <EventCard imgPath={event.imgPath} title={event.title} date={event.date} text={event.text} key={index} />
            ))}
        </div>
    )
}