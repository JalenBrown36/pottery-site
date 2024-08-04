"use client";

import NavBar from "./Navbar";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const scale = 2.5;
  const pathname = usePathname();
  const pathImage = clsx({
    "bg-mainPage bg-[center_top_45%]": pathname === "/",
    "bg-gallery bg-[center_top_25%]": pathname === "/gallery",
    "bg-parties bg-[center_top_45%]": pathname === "/parties",
    "bg-faqs bg-[center_top_45%]": pathname === "/information",
  });

  return (
    <header className={`${pathImage} w-full py-4 bg-cover bg-no-repeat`}>
      <div className="w-3/4 mx-auto flex flex-col gap-4 justify-center items-center">
          <div className="w-2/3">
            <Image
              src="/pottery-logo.png"
              width={711/scale}
              height={241/scale}
              className="mx-auto"
              alt="Pottery Logo"
            />
          </div>
        <NavBar />
      </div>
    </header>
  );
}
