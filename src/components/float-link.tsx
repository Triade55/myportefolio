// Home , about me , Resume , PorteFolio , Testionals , contact

import Link from "next/link";
import React from "react";
import { ActiveLink } from "./Active-link";
import { Home,User2,Briefcase,BookOpen,Star,Mail, SendIcon } from "lucide-react";

export default function FloatLink() {
  const H = [
    { name: "Home", icon: Home },
    { name: "About-Me", icon: User2 },
    { name: "Resume", icon: Briefcase },
    { name: "Portefolio", icon: BookOpen },
    { name: "Testimonials", icon: Star },
    { name: "Contacts", icon: SendIcon },
  ];

  return (
    <div className="flex flex-col space-y-3 absolute bg-black border border-primary rounded-full p-3 end-5 top-[40%]">
      {H.map((h,index) => (
        <div key={index}>
          <ActiveLink href={`/${h.name === "Home" ? "" : h.name}`}><h.icon /></ActiveLink>
        </div>
      ))}
    </div>
  );
}
