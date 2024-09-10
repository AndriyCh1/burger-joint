"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { Input, Skeleton } from "@/components/ui";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";

type Props = {
  className?: string;
  title: string;
  items: Omit<FilterCheckboxProps, "name">[];
  name: string;
  defaultItems?: Omit<FilterCheckboxProps, "name">[];
  limit?: number;
  searchInputPlaceholder?: string;
  defaultValue?: string[];
  loading?: boolean;
  selected: string[];
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
  loading,
  selected,
  onClickCheckbox,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  if (loading) {
    return (
      <div className={className}>
        <p className="mb-3 font-bold">{title}</p>
        {Array.from({ length: limit }, (_, index) => (
          <Skeleton key={index} className="mb-4 h-6 rounded-sm" />
        ))}
      </div>
    );
  }

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
            checked={selected.includes(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
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
