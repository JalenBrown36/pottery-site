import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface VideoCardProps {
  // Id part
  id: {
    videoId: string;
  };
  snippet: {
    // Snippet part
    title: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  url: string;
}

export default function VideoCard({ id, snippet, url }: VideoCardProps) {
  return (
    <div className="w-full flex flex-col justify-between">
      <h3 className="text-left underline decoration-[.01rem] text-wrap">{snippet.title}</h3>
      <Link href={url}>
        <Image
          src={snippet.thumbnails.medium.url}
          width={snippet.thumbnails.medium.width * .6}
          height={snippet.thumbnails.medium.height * .6}
          className="rounded-xl lg:hidden"
          alt={snippet.title}
        />
        <Image
          src={snippet.thumbnails.medium.url}
          width={snippet.thumbnails.medium.width * .9}
          height={snippet.thumbnails.medium.height * .9}
          className="hidden xl:hidden rounded-xl lg:block"
          alt={snippet.title}
        />
        <Image
          src={snippet.thumbnails.medium.url}
          width={snippet.thumbnails.medium.width}
          height={snippet.thumbnails.medium.height}
          className="hidden 2xl:hidden rounded-xl xl:block"
          alt={snippet.title}
        />
        <Image
          src={snippet.thumbnails.high.url}
          width={snippet.thumbnails.high.width}
          height={snippet.thumbnails.high.height}
          className="hidden rounded-xl 2xl:block"
          alt={snippet.title}
        />
      </Link>
    </div>
  );
}
