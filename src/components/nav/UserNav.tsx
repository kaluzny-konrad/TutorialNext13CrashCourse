import Image from "next/image";
import React from "react";

type Props = {
  imageSrc: string;
};

export default function UserNav({ imageSrc }: Props) {
  return (
    <li>
      <Image
        src={imageSrc}
        alt="Profile image"
        width={64}
        height={64}
        className="w-8 rounded-full"
        priority
      />
    </li>
  );
}
