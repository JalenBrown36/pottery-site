import { grandHotel } from "./ui/Fonts";

export default function Home() {
  return (
    <div className="mx-16 text-center">
      <h1>Home Page</h1>
      <section className="grid grid-flow-row gap-8 py-8">
        <strong>
          Welcome to The Pottery Cove, a cozy, creative paint-your-own pottery
          studio in the heart of Catonsville since 2012! Check our FAQs page for
          more details about our pricing, reservations, pottery pickup, job
          opportunities & scheduling a party or event
        </strong>
        <div>
          <ul className="flex gap-4 justify-center items-center">
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
      <section>
        <h2 className={`${grandHotel.className}`}>How it Works</h2>
        <div className="grid grid-cols-3 gap-16 [&_p]:text-base [&_div]:text-sm [&_div]:py-3 [&_div]:px-6">
          <div className="relative grid grid-rows-2 gap-10 justify-center align-top">
            <img className="mx-auto" src="coffee-1.png" alt="coffee-1.png" />
            <div className="absolute top-1/4 left-0 right-0 w-max mx-auto text-white bg-orange-900 rounded"><strong>CHOOSE IT</strong></div>
            <p>This might be the hardest part! Our shelves are filled with fun, functional, seasonal & holiday choices!</p>
          </div>
          <div className="relative grid grid-rows-2 gap-10 justify-center align-top">
            <img className="mx-auto" src="coffee-2.png" alt="coffee-2.png" />
            <div className="absolute top-1/4 left-0 right-0 w-max mx-auto text-white bg-orange-900 rounded"><strong>PAINT IT</strong></div>
            <p>The high heat from the kiln (over 1800 degrees!) transforms the ceramic glaze to a shiny & bold masterpiece!</p>
          </div>
          <div className="relative grid grid-rows-2 gap-10 justify-center align-top">
            <img className="mx-auto" src="coffee-3.png" alt="coffee-3.png" />
            <div className="absolute top-1/4 left-0 right-0 w-max mx-auto text-white bg-orange-900 rounded"><strong>PICK IT UP</strong></div>
            <p>The high heat from the kiln (over 1800 degrees!) transforms the ceramic glaze to a shiny & bold masterpiece!</p>
          </div>
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
