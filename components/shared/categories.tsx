import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
  className?: string;
};

const categories = [
  "Classic",
  "Specialty",
  "Vegan",
  "Chicken Burgers",
  "Fish Burgers",
  "Sides",
];

export const Categories: FC<Props> = ({ className }) => {
  const activeIndex = 0;

  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {categories.map((category, index) => (
        <a
          href="#1"
          key={index}
          className={cn("flex h-11 items-center rounded-2xl px-5 font-bold", {
            "bg-white shadow-md shadow-gray-200 text-primary":
              activeIndex === index,
          })}
        >
          <button>{category}</button>
        </a>
      ))}
    </div>
  );
};
