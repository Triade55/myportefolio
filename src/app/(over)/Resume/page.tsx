import Card from "@/components/Resume/Card";
import { Competences } from "@/data/competence";
import { Education } from "@/data/Education";
import React from "react";

export default function Resume() {
  const educations = Education;
  const competences = Competences;
  return (
    <div>
      <div className="text-2xl underline font-extrabold">EDUCATION</div>
      <div className=" sm:grid-cols-3 grid-cols-1 py-5">
        {educations.map((education) => (
          <Card key={`${education.id}a`}
            title={education.title}
            date={`${education.yearStart} - ${education.yearEnd}`}
          >
            {education.description}
          </Card>
        ))}
      </div>
      <hr />
      <div className="text-2xl underline font-extrabold mt-5">EDUCATION</div>
      <div className="grid sm:grid-cols-3 grid-cols-1 py-5">
        {competences.map((education) => (
          <Card
            title={education.title}
            date={`${education.yearStart} - ${education.yearEnd}`}
            key={education.id}
          >
            {education.description}
          </Card>
        ))}
      </div>
    </div>
  );
}
