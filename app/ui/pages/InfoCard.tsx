import Image from "next/image";

interface Props {
    title: string;
    text: string;
    image: string;
};

export default function InfoCard({title, text, image}: Props) {
  return (
    <div className="flex flex-col gap-4 md:gap-10 justify-center align-top">
      <div className="relative">
        <Image
            src={image}
            width={250}
            height={250}
            className="hidden mx-auto md:block"
            alt={`${image}.png`}
        />
        <Image
            src={image}
            width={150}
            height={150}
            className="block mx-auto md:hidden"
            alt={`${image}.png`}
        />
        <div className="absolute top-1/2 left-0 right-0 w-max mx-auto py-1 md:py-3 px-2 md:px-6 text-xs lg:text-sm text-white bg-orange-900 rounded">
            <strong>{title}</strong>
        </div>
      </div>
      <p className="h-max text-sm md:text-base">{text}</p>
    </div>
  );
}
