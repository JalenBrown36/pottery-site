import Link from "next/link";

interface NavLinkProps {
  url: string;
  text: string;
  icon?: string | null;
  styles?: string | null;
}

export default function NavLink({ url, text, icon, styles }: NavLinkProps) {
  return (
    <li
      className={`w-full flex justify-center text-white items-center ${styles} border-2 border-white`}
    >
      <Link href={url} className="w-full inline-block text-center font-bold">
        {icon ? (
          <div className="w-10 h-10 flex justify-center items-center rounded-xl">
            <img src={icon} alt={text} className="w-full h-full " />
          </div>
        ) : (
          text
        )}
      </Link>
    </li>
  );
}
