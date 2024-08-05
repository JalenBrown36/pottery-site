import { grandHotel } from "../ui/Fonts";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full mx-auto text-center text-2xs">
      <section className="w-2/3 mx-auto grid grid-flow-row gap-4 py-4">
        <h2 className={`${grandHotel.className} text-4xl`}>
          Ideas to Inspire Resources to Create
        </h2>
        <strong className="w-[60%] mx-auto">
          Our cozy, intimate studio is a warm & welcoming setting that’s perfect
          for all ages & any occasion!
        </strong>
      </section>
      <section className="w-2/3 mx-auto py-4 grid grid-cols-2 gap-8 border-t-1 border-[#AF5C42]">
        <div className="flex flex-col gap-2 text-left border-r-1 border-[#AF5C42]">
          <div>
            <Link href="https://thepotterycove.com/parties/kids-parties/">
              <strong className="text-xs text-[#AF5C42] underline">
                KIDS PARTIES
              </strong>
            </Link>
            <p className="text-3xs">
              Kids of all ages have a blast painting pottery!
            </p>
          </div>
          <div>
            <Link href="https://thepotterycove.com/parties/adult-events/">
              <strong className="text-xs text-[#AF5C42] underline">
                ADULT EVENTS
              </strong>
            </Link>
            <p className="text-3xs">
              From baby showers, milestone birthdays & anniversaries to staff
              appreciation & team bonding, painting pottery sets the tone for a
              fun, creative, and memorable event!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-left">
          <div>
            <h4 className="text-xs font-bold">BIRTHDAY PARTY PACKAGES</h4>
            <p className="text-3xs">
              Take 15% off when you paint any featured design! We have
              everything you need to create these gorgeous designs!
            </p>
          </div>
          <p className="text-3xs">
            <strong className="font-semibold">Munchkins: $185</strong> ($18 each additional painter). Five
            choices from our adorable line of party animal figurines (3″-5″).
            Best for ages 6-7.
          </p>
          <p className="text-3xs">
            <strong className="font-semibold">Middles: $205</strong> ($20 each additional painter). Five
            choices that include figurines & banks. (4″-6″). Great choice for
            ages 7-9, but all ages enjoy this package!
          </p>
          <p className="text-3xs">
            <strong className="font-semibold">Minors: $230</strong> ($22 each additional painter). Six
            choices that include figurines, banks & boxes (5″-7″). Great for
            ages 10+, but appropriate for any age and skill level.
          </p>
        </div>
      </section>
    </div>
  );
}
