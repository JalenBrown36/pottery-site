'use client';

import NavBar from "./Navbar";
import clsx from "clsx";
import style from "../header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const pathImage = clsx({
    [style.galleryImage]: pathname === "/gallery",
    [style.partiesImage]: pathname === "/parties",
    [style.infoImage]: pathname === "/information",
  });

  return (
    <header className={`${pathImage} py-16 bg-cover bg-no-repeat`}>
      <div className="w-2/3 mx-auto flex flex-col gap-8 justify-center items-center">
        <h1 className="w-full py-6 border-4 border-white text-center text-6xl font-bold text-white">
          TIPS & TECHNIQUES
        </h1>
        <NavBar />
      </div>
    </header>
  );
}
