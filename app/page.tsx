import { grandHotel } from "./ui/Fonts";
import InfoCard from "./ui/pages/InfoCard";
import EventGrid from "./ui/pages/EventGrid";
import Image from "next/image";
import Link from "next/link";
import { promises as fs } from "fs";

export default function Home() {
  return (
    <div className="w-full mx-auto text-center">
      <section className="w-full bg-mainBg bg-fixed">
        <section className="w-[80%] mx-auto py-4 flex flex-col gap-8 justify-center">
          <strong>
            Welcome to The Pottery Cove, a cozy, creative paint-your-own pottery
            studio in the heart of Catonsville since 2012! Check our FAQs page
            for more details about our pricing, reservations, pottery pickup,
            job opportunities & scheduling a party or event
          </strong>
          <div>
            <ul className="px-4 flex flex-row gap-4 justify-evenly [&_li]:w-max [&_a]:underline">
              <li>
                <strong>Email: </strong>
                <Link href="">ThePotteryCove@gmail.com</Link>
              </li>
              <li>
                <strong>Studio: </strong>
                <Link href="">443-830-2683</Link>
              </li>
              <li>
                <strong>Mobile: </strong>
                <Link href="">443-545-4669</Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="w-[70%] py-8 mx-auto flex flex-col gap-4">
          <h2 className={`${grandHotel.className}`}>How it Works</h2>
          <div className="grid grid-cols-3 gap-8 lg:gap-16">
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
      </section>
      <section className="w-[80%] mx-auto my-8 flex flex-col gap-4">
        <h2 className={`${grandHotel.className}`}>Calendar Events</h2>
        <EventGrid />
      </section>
      <section className="my-8 flex flex-col gap-4">
        <h2 className={`${grandHotel.className}`}>Location</h2>
        <Link
          className="text-[#AF5C42] underline"
          href="https://www.google.com/maps/dir//the+pottery+cove+google+maps/@39.2603199,-76.7398348,13.06z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c81e82b69618ab:0x4ccdd008bcd57921!2m2!1d-76.7344635!2d39.2716385?entry=ttu"
        >
          <Image
            src="/Pottery-Cove-Google-Map.png"
            width={1280}
            height={342}
            className="w-full mx-auto"
            alt="Map image"
          />
        </Link>
        <div className="text-lg">
          <strong className="text-[#39160B]">Studio Location: </strong>
          <Link
            className="text-[#AF5C42] underline"
            href="https://www.google.com/maps/dir//the+pottery+cove+google+maps/@39.2603199,-76.7398348,13.06z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c81e82b69618ab:0x4ccdd008bcd57921!2m2!1d-76.7344635!2d39.2716385?entry=ttu"
          >
            816 Fredrick Road, Catonsville 21228
          </Link>
        </div>
      </section>
      <section className="w-full px-32 my-8 flex flex-col gap-4">
        <h2 className={`${grandHotel.className}`}>Parking</h2>
        <div className="grid grid-cols-2 gap-8 place-items-start">
          <Image
            src="/Pottery-Cove-Map.png"
            width={600 / 2}
            height={600 / 2}
            className="w-full border-[2px] rounded-md"
            alt="Parking map image"
          />
          <ul className="flex flex-col text-base text-left list-disc">
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
