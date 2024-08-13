import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    {url: "/gallery", text: "TIPS & TECHNIQUES"},
    {url: "/parties", text: "PARTIES"},
    {url: "/information", text: "FAQs"},
    {url: "https://squareup.com/gift/E470QFJA5QJTE/order", text: "GIFT CERTIFICATES"}
  ]

  return (
    <nav className="w-full">
      <ul className="w-full text-center flex flex-row gap-4 justify-between">
        {links.map((link) => (
          <NavLink url={link.url} text={link.text} key={link.url} />
        ))}
        {pathname === "/" && <NavLink url="" text="STUDIO HOURS"/>}
      </ul>
    </nav>
  );
}
