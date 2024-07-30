import Link from "next/link";

interface NavLinkProps {
    url: string;
    text: string;
}

export default function NavLink({url, text}: NavLinkProps) {
  return (
    <li className="w-full border-2 border-white">
      <Link href={url} className="text-white font-bold">{text}</Link>
    </li>
  );
}
