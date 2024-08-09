import { Star } from "lucide-react";
import React from "react";
type Pops = {
  full: number;
};
export default function Vote({ full }: Pops) {
  const total = 5;
  const not = total - full;

  return (
    <div className="flex my-3">
      <div className="flex">
        {Array(full)
          .fill(0)
          .map((_, index) => (
            <Star size={15} className="text-tertiary" key={index} />
          ))}
      </div>

      <div className="flex">
        {Array(not)
          .fill(0)
          .map((_, index) => (
            <Star  size={15} className="text-white" key={index} />
          ))}
      </div>
    </div>
  );
}
