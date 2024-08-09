import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Vote from "./Vote";

export default function Card() {
  return (
    <div className="flex gap-2 border p-5">
      <div className="flex flex-col space-y-2 items-center">
        <Image src="/huro.png" width={100} height={50} alt="d" />
        <Vote full={2} />
      </div>
      <div className="">
        <div className="text-xl text-primary font-extrabold uppercase">
          Jean Ulrich
        </div>
        <div className="text-primary/50 bold">Jean Ulrich</div>
        <div className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis
          eligendi voluptas 
        </div>
        <div className="text-right mt-4 text-xs">1er Jan 2024</div>
      </div>
    </div>
  );
}
