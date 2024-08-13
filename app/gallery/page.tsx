import { grandHotel } from "../ui/Fonts";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full mx-auto text-center">
      <section className="mx-auto grid grid-flow-row gap-4 py-4">
        <h2 className={`${grandHotel.className}`}>
          Ideas to Inspire Resources to Create
        </h2>
        <strong>
          STAFF PROJECT PICKS FOR NOVEMBER! <br />
          VIDEOS: LEARN A NEW PAINTING TECHNIQUE in 60 SECONDS!!
        </strong>
        </section>
        <section className="w-[80%] pt-8 mb-8 mx-auto flex flex-row justify-center items-center gap-4 border-t-1 border-[#AF5C42]">
          <div className="w-[350px] flex flex-col gap-2 text-left">
            <div>
              <h4>
                Staff project picks for November
              </h4>
              <p>
                Take 15% off when you paint any featured design! We have
                everything you need to create these gorgeous designs!
              </p>
            </div>
            <div>
              <h4>
              Got a minute (like, literally – 60 seconds)?
              </h4>
              <p>
              See how easy it is to paint like a pro! It’s all about the techniques, so we put together 12 SHORT videos, each highlighting an EASY technique that will take your painting to a new level of awesomeness! Seriously, each video is just 60 seconds!
              </p>
            </div>
          </div>
          <div className="relative pl-4">
            <Image
              src="/green-cup.png"
              width={496/3}
              height={346/3}
                className="absolute -bottom-[30%] right-[10%] z-10"
              alt="Green cup image"
            />
            <Image
              src="/hens.png"
              width={496/2}
              height={346/2}
              alt="Hen image"
            />
            <Image
              src="/witch.png"
              width={496/3}
              height={346/3}
                className="absolute -top-[10%] -right-[30%] -z-10"
              alt="Witch image"
            />
        </div>
      </section>
      <section>
        [Insert grid here]
      </section>
    </div>
  );
}
