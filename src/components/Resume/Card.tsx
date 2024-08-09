import clsx from "clsx";
import React, { ReactNode } from "react";
type Props = {
  title: string;
  date: string;
  className?: string;
  children: ReactNode;
};
export default function Card({
  title,
  date,
  className,
  children,
}: Props) {
  return (
    <div className={clsx("p-2", className)}>
      <div className="">
        <div className="bg-primary py-1 px-2 rounded-xl inline-block ">
          {date}
        </div>
        <div className="ml-1 pl-2 border-l-2 border-primary pt-2">
          <div className="font-bold fs-h mb-1">{title}</div>
          <div className="text-sm ">{children}</div>
        </div>
      </div>
    </div>
  );
}
