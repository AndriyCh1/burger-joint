"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";

type Props = {
  items: Category[];
  className?: string;
};

export const Categories: FC<Props> = ({ className, items: categories }) => {
  const activeId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {categories.map((category, index) => (
        <a
          key={index}
          href={`#${category.name}`}
          className={cn("flex h-11 items-center rounded-2xl px-5 font-bold", {
            "bg-white shadow-md shadow-gray-200 text-primary":
              category.id === activeId,
          })}
        >
          <button>{category.name}</button>
        </a>
      ))}
    </div>
  );
};
