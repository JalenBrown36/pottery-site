import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="w-full">
      <ul className="hidden w-full text-center md:flex md:flex-row md:gap-4 md:justify-between md:text-sm">
        <NavLink url="/gallery" text="TIPS & TECHNIQUES" 
        styles={clsx({'bg-white text-black': pathname === '/gallery'})} />
        <NavLink url="/parties" text="PARTIES" 
        styles={clsx({'bg-white text-black': pathname === '/parties'})} />
        <NavLink url="/information" text="FAQs" 
        styles={clsx({'bg-white text-black': pathname === '/information'})} />
        <NavLink url="/" text="GIFT CERTIFICATES"/>
        {pathname === "/" && <NavLink url="/" text="STUDIO HOURS"/>}
      </ul>
    </nav>
  );
}
