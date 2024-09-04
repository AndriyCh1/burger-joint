"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";

type Props = {
  className?: string;
  title: string;
  items: FilterCheckboxProps[];
  defaultItems?: FilterCheckboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  defaultValue?: string[];
  onClickCheckbox?: (id: string) => void;
};

export const CheckboxFilterGroup: FC<Props> = ({
  className,
  title,
  items = [],
  defaultItems = [],
  limit = 5,
  searchInputPlaceholder = "Search...",
  defaultValue,
  onClickCheckbox,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : defaultItems.slice(0, limit);

  return (
    <div className={cn(className)}>
      <p className="mb-3 font-bold">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="border-none bg-gray-50"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      )}
      <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={cn({ "border-t border-t-neutral-100 mt-4": showAll })}>
          <button
            className="mt-3 text-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Hide" : "+ Show All"}
          </button>
        </div>
      )}
    </div>
  );
};
