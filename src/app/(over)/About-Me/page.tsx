import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AboutMe() {
  return (
    <div className="flex flex-col space-y-2">
      <p>
        Hello, I'm <b className="text-2xl">Jean Ulrich VANGA</b> , a passionate
        technology enthusiast with a background in network and computer systems.
        After earning my high school diploma, I pursued my studies in 2021 at
        the Polytechnic University of Bingerville (UPB). Since then, I have been
        deeply involved in the world of technology, constantly seeking new ways
        to innovate and improve.
      </p>
      <p>
        My expertise lies in web development, network administration, and system
        management. I have a keen eye for detail and a strong commitment to
        delivering high-quality, efficient, and reliable solutions. My passion
        for technology drives me to stay updated with the latest trends and
        advancements, ensuring that my skills remain sharp and relevant.
      </p>
      <p>
        I am particularly interested in developing user-friendly and
        aesthetically pleasing websites and applications. I believe in the power
        of minimalistic design combined with cutting-edge technology to create
        solutions that not only meet but exceed user expectations.
      </p>
      <p>
        In my free time, I enjoy exploring new technologies, working on personal
        projects, and contributing to the tech community. I am always eager to
        learn and grow, embracing every opportunity to expand my knowledge and
        expertise.
      </p>
      <p>
        My goal is to inspire innovation, showcase my expertise, and build trust
        through my work. I strive to create a lasting impact in the field of
        technology, one project at a time.
      </p>
      <p>
        Thank you for visiting my portfolio. I look forward to connecting with
        you and exploring potential collaborations.
      </p>
      <div className="bg-primary grid grid-cols-1 sm:grid-cols-3 gap-2 p-10">
        <div className=" flex flex-col justify-center items-center space-y-2 text-tertiary border-collapse ">
          <div className="text-3xl">7 ans</div>
          <div className="">Year Experience</div>
        </div>

        <div className=" flex flex-col justify-center items-start text-tertiary border-collapse ">
          <div className="">Skills</div>
          <li>HTML/CSS</li>
          <li>Php</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
        </div>

        <div className=" flex flex-col justify-center items-start space-y-4 text-tertiary border-collapse ">
          <Link href="/" className="flex gap-2">
            <Facebook /> Jean ulrich VANGA
          </Link>

          <Link href="/" className="flex gap-2">
            <Twitter /> Jean ulrich VANGA
          </Link>
          <Link href="/" className="flex gap-2">
            <Instagram /> Huro Lrs
          </Link>
          <Link href="/" className="flex gap-2">
            <Github /> Triade 55
          </Link>
        </div>
      </div>
    </div>
  );
}
