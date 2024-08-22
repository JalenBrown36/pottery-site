import { grandHotel } from "../ui/Fonts";
import Image from "next/image";
import Link from "next/link";
import Form from "../ui/pages/Form";

export default function Page() {
  return (
    <div className="w-full mx-auto text-center">
      <section className="w-[80%] my-8 mx-auto grid grid-flow-row gap-4">
        <h2 className={`${grandHotel.className}`}>Call, Text , & Find us</h2>
        <div className="w-full flex flex-row justify-center">
          <div className="w-3/4 flex flex-col gap-2 justify-between">
            <div className="flex flex-col gap-1 text-left [&_p]:pl-4 [&_p]:font-normal">
              <h4 className="font-bold">Studio Hours</h4>
              <p>
                <strong>Tuesday & Wednesday: </strong>12pm – 6pm
              </p>
              <p>
                <strong>Thursday & Friday: </strong>12pm – 7pm
              </p>
              <p>
                <strong>Saturday: </strong>10:30am – 7pm
              </p>
              <p>
                <strong>Sunday: </strong>10:30am – 6pm
              </p>
              <p>
                <strong>Monday: </strong>Closed except for all school holidays
                (11am-4pm)
              </p>
            </div>
            <div className="flex flex-col gap-1 text-left [&_strong]:pl-4 [&_a]:font-normal [&_a]:underline">
              <h4 className="font-bold">Contact Information</h4>
              <strong>
                Email: <Link href="/">ThePotteryCove@gmail.com</Link>
              </strong>
              <strong>
                Studio: <Link href="/">443-830-2683</Link>
              </strong>
              <strong>
                Mobile: <Link href="/">443-545-4669</Link>
              </strong>
            </div>
          </div>
          <div className="w-[.5px] mx-8 bg-[#AF5C42]"></div>
          <Form />
        </div>
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
        <div className="grid grid-cols-2 items-start gap-8">
          <Image
            src="/Pottery-Cove-Map.png"
            width={600}
            height={600}
            className="border-[2px] rounded-md"
            alt="Parking map image"
          />
          <ul className="h-full flex flex-col justify-evenly text-base text-left list-disc">
            <li>
              From Frederick Rd, turn on Egges Lane, then take the
              <strong> 2nd quick left</strong> into our parking, which is
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
