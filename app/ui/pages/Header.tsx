import NavBar from "./Navbar";
import Image from "next/image";

export default function Header() {
  return (
  <header className="py-16 bg-tip-n-technique bg-opacity-50 bg-cover bg-center bg-no-repeat ">
    <div className="w-2/3 mx-auto flex flex-col gap-8 justify-center items-center">
        <h1 className="w-full py-6 border-4 border-white text-center text-6xl font-bold text-white">TIPS & TECHNIQUES</h1>
        <NavBar />
    </div>
  </header>
  );
}
