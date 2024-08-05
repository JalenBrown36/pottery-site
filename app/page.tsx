import { grandHotel } from "./ui/Fonts";
import InfoCard from "./ui/pages/InfoCard";
import EventGrid from "./ui/pages/EventGrid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full mx-auto text-center text-2xs">
      <section className="w-2/3 mx-auto grid grid-flow-row gap-8 py-4">
        <strong className="w-full">
          Welcome to The Pottery Cove, a cozy, creative paint-your-own pottery
          studio in the heart of Catonsville since 2012! Check our FAQs page for
          more details about our pricing, reservations, pottery pickup, job
          opportunities & scheduling a party or event
        </strong>
        <div className="flex justify-center">
          <ul className="w-full flex flex-row gap-4 justify-between items-center [&_li]:text-2xs [&_li]:w-max">
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
      <section className="py-4 mx-32 flex flex-col gap-4">
        <h2 className={`${grandHotel.className} text-4xl`}>How it Works</h2>
        <div className="grid grid-cols-3 gap-16">
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
      <section className="w-full px-16 py-4 flex flex-col gap-4 bg-white">
        <h2 className={`${grandHotel.className} text-4xl`}>Calendar Events</h2>
        <EventGrid />
      </section>
      <section className="py-4 flex flex-col gap-4 bg-white">
        <h2 className={`${grandHotel.className} text-4xl`}>Location</h2>
        <Image src="/map.svg" width={1280} height={342} alt="Map image" />
        <div>
          <strong className="text-[#39160B]">Studio Location: </strong>
          <Link
            className="text-[#AF5C42] underline"
            href="https://www.google.com/maps/dir//the+pottery+cove+google+maps/@39.2603199,-76.7398348,13.06z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c81e82b69618ab:0x4ccdd008bcd57921!2m2!1d-76.7344635!2d39.2716385?entry=ttu"
          >
            816 Fredrick Road, Catonsville 21228
          </Link>
        </div>
      </section>
      <section className="w-full pt-4 pb-8 px-32 flex flex-col gap-4 bg-white">
        <h2 className={`${grandHotel.className} text-4xl`}>Parking</h2>
        <div className="grid grid-cols-2 gap-6">
          <Image
            src="/parking-map.svg"
            width={600}
            height={600}
            alt="Parking map image"
          />
          <ul className="flex flex-col justify-between text-left list-disc">
            <li>
              From Frederick Rd, turn on Egges Lane, then take the{" "}
              <strong>2nd quick left</strong> into our parking, which is
              reserved for The Pottery Cove, Frederick Road Veterinary Hospital
              & The 818 Market.
            </li>
            <li>
              Reserved spaces are immediately to the right - there are signs
              reserved for the former business, “Bark” - they're ours now!
            </li>
            <li>
              Pottery Cove customers are also permitted to use the Veterinary
              and 818 parking spaces.
            </li>
            <li>
              <strong>Street Parking</strong> - metered parking spaces are also
              available on Frederick Road
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
