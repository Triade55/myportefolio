import FloatLink from "@/components/float-link";
import NavLink from "@/components/NavLink";
import Title from "@/components/Title";
import Image from "next/image";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-4 gap-3 ">
      <div className=" bg-primary hidden sm:block">
        <Image
          src="/huro.png"
          alt="photo du boss"
          width={30}
          height={10}
          className="w-full"
        />
        <NavLink />
      </div>
      <div className="sm:col-span-3 col-span-4 pt-4 px-4 sm:mx-20">
        <Title />
        {children}
      </div>
    </div>
  );
}
