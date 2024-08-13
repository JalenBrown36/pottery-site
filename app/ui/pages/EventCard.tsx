import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  imgPath: string;
  title: string;
  date: string;
  text: string;
}

export default function EventCard({
  imgPath,
  title,
  date,
  text,
}: EventCardProps) {
  return (
    <Link href="/" className="flex flex-col gap-2">
      <Image
        src={imgPath}
        width={600}
        height={600}
        className="rounded-lg"
        alt="event image"
      />
      <div>
        <div className="mb-2">
          <h4 className="font-bold">{title}</h4>
          <p className="text-xs lg:text-sm xl:text-base font-semibold">{date}</p>
        </div>
        <p className="hidden lg:block">{text}</p>
      </div>
    </Link>
  );
}
