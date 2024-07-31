import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="w-full">
      <ul className="hidden text-center md:flex md:flex-row md:gap-4 md:justify-between md:text-sm lg:text-sm">
        <NavLink url="/gallery" text="TIPS & TECHNIQUES" />
        <NavLink url="/parties" text="PARTIES" />
        <NavLink url="/information" text="FAQs" />
        <NavLink url="/" text="GIFT CERTIFICATES" />
        {pathname === "/" && <NavLink url="/" text="STUDIO HOURS" />}
      </ul>
    </nav>
  );
}
