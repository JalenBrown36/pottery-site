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
    <li className="w-full h-8 flex justify-center text-white items-center border-1 border-white">
      <Link href={url} className={clsx(
        "w-full h-full flex justify-center items-center text-center font-bold text-xs",
        {"bg-white text-[#39160B]": usePathname() === url}
      )}>
        {icon ? (
          <div className="w-8 h-8 flex rounded-xl">
            <img src={icon} alt={text} className="w-full h-full" />
          </div>
        ) : (
          text
        )}
      </Link>
    </li>
  );
}
