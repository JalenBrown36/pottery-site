import { grandHotel } from "./ui/Fonts";
import InfoCard from "./ui/pages/InfoCard";

export default function Home() {
  return (
    <div className="mx-8 text-center md:mx-16">
      <h1>Home Page</h1>
      <section className="grid grid-flow-row gap-8 py-8">
        <strong>
          Welcome to The Pottery Cove, a cozy, creative paint-your-own pottery
          studio in the heart of Catonsville since 2012! Check our FAQs page for
          more details about our pricing, reservations, pottery pickup, job
          opportunities & scheduling a party or event
        </strong>
        <div className="flex justify-center">
          <ul className="w-max flex flex-col gap-4 justify-center items-center md:flex-row">
            <li>
              <strong>Email: </strong>
              <a href="">ThePotteryCove@gmail.com</a>
            </li>
            <li>
              <strong>Studio: </strong>
              <a href="">443-830-2683</a>
            </li>
            <li>
              <strong>Mobile: </strong>
              <a href="">443-545-4669</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-4">
        <h2 className={`${grandHotel.className}`}>How it Works</h2>
        <div className="flex md:grid flex-col md:grid-cols-3 gap-8 md:gap-16">
          <InfoCard
            title="CHOOSE IT"
            text="This might be the hardest part! Our shelves are filled with fun, functional, seasonal & holiday choices!"
            image="/coffee-1.png"
          />
          <InfoCard
            title="PAINT IT"
            text="The high heat from the kiln (over 1800 degrees!) transforms the ceramic glaze to a shiny & bold masterpiece!"
            image="/coffee-2.png"
          />
          <InfoCard
            title="PICK IT UP"
            text="The high heat from the kiln (over 1800 degrees!) transforms the ceramic glaze to a shiny & bold masterpiece!"
            image="/coffee-3.png"
          />
        </div>
      </section>
      <section>
        <h2 className={`${grandHotel.className}`}>Calendar Events</h2>
      </section>
      <section>
        <h2 className={`${grandHotel.className}`}>Location</h2>
      </section>
      <section>
        <h2 className={`${grandHotel.className}`}>Parking</h2>
      </section>
    </div>
  );
}
