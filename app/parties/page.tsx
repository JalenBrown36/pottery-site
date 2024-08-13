import { grandHotel } from "../ui/Fonts";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full mx-auto text-center mb-8">
      <section className="mx-auto grid grid-flow-row gap-4 py-4">
        <h2 className={`${grandHotel.className}`}>
          Ideas to Inspire Resources to Create
        </h2>
        <strong className="w-[60%] mx-auto">
          Our cozy, intimate studio is a warm & welcoming setting that’s perfect
          for all ages & any occasion!
        </strong>
      </section>
      <section className="w-2/3 mx-auto py-4 grid grid-cols-2 gap-8 border-t-1 border-[#AF5C42]">
        <div className="flex flex-col gap-2 text-left border-r-1 border-[#AF5C42] [&_p]:w-[350px]">
          <div className="flex flex-col gap-1">
            <Link href="https://thepotterycove.com/parties/kids-parties/">
              <h4 className="text-[#AF5C42] underline">
                KIDS PARTIES
              </h4>
            </Link>
            <p>
              Kids of all ages have a blast painting pottery!
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Link href="https://thepotterycove.com/parties/adult-events/">
              <h4 className="text-[#AF5C42] underline">
                ADULT EVENTS
              </h4>
            </Link>
            <p>
              From baby showers, milestone birthdays & anniversaries to staff
              appreciation & team bonding, painting pottery sets the tone for a
              fun, creative, and memorable event!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-left [&_strong]:text-base [&_strong]:font-semibold">
          <div>
            <h4>BIRTHDAY PARTY PACKAGES</h4>
            <p>
              Base Cost for up to 8 painters
            </p>
          </div>
          <p>
            <strong>Munchkins: $185</strong> ($18 each additional painter). Five
            choices from our adorable line of party animal figurines (3″-5″).
            Best for ages 6-7.
          </p>
          <p>
            <strong>Middles: $205</strong> ($20 each additional painter). Five
            choices that include figurines & banks. (4″-6″). Great choice for
            ages 7-9, but all ages enjoy this package!
          </p>
          <p>
            <strong>Minors: $230</strong> ($22 each additional painter). Six
            choices that include figurines, banks & boxes (5″-7″). Great for
            ages 10+, but appropriate for any age and skill level.
          </p>
        </div>
      </section>
    </div>
  );
}
