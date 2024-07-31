import Link from "next/link";

interface NavLinkProps {
    url: string;
    text: string;
}

export default function NavLink({url, text}: NavLinkProps) {
  return (
    <li className="w-full flex justify-center items-center border-2 border-white">
      <Link href={url} className="w-full inline-block text-center text-white font-bold">{text}</Link>
    </li>
  );
}
