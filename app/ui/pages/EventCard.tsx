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
        <div className="mb-1">
          <h4 className="text-xs font-bold">{title}</h4>
          <p className="text-3xs font-bold">{date}</p>
        </div>
        <p className="text-3xs font-normal">{text}</p>
      </div>
    </Link>
  );
}
