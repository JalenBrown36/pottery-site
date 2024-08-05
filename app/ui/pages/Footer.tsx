import NavLink from "./NavLink";
import clsx from "clsx";

export default function Footer() {
    return (
        <div className="absolute bottom-0 w-full h-16 flex justify-evenly items-center gap-12 bg-[#AF5C42]">
            <ul className="flex justify-between gap-4 [&_a]:w-max [&_a]:px-2 lg:[&_a]:px-6">
                <NavLink url="/gallery" text="TIPS & TECHNIQUES"/>
                <NavLink url="/parties" text="PARTIES" />
                <NavLink url="/information" text="FAQs" />
                <NavLink url="/" text="GIFT CERTIFICATES" />
            </ul>
            <ul className="flex gap-4 justify-end [&_li]:border-0">
                <NavLink url="https://www.instagram.com/thepotterycove/" text="Instagram" icon="/instagram.png"></NavLink>
                <NavLink url="https://www.youtube.com/channel/UC4bU4PzXr_dSoWFjTa9bvRA" text="Youtube" icon="/youtube.png"></NavLink>
                <NavLink url="https://www.facebook.com/ThePotteryCove/" text="Facebook" icon="/facebook.png"></NavLink>
            </ul>
        </div>
    )
}