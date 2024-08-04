'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavLinkProps {
  url: string;
  text: string;
  icon?: string | null;
}

export default function NavLink({ url, text, icon}: NavLinkProps) {
  return (
    <li className="w-full h-4 text-xs flex justify-center text-white items-center border-1 border-white">
      <Link href={url} className={clsx(
        "w-full inline-block text-center font-bold text-3xs",
        {"bg-white text-[#39160B]": usePathname() === url}
      )}>
        {icon ? (
          <div className="w-4 h-4 flex rounded-xl">
            <img src={icon} alt={text} className="w-full h-full" />
          </div>
        ) : (
          text
        )}
      </Link>
    </li>
  );
}
