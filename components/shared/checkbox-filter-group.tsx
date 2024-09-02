"use client";

import { FC } from "react";
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
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Search...",
  defaultValue,
  onClickCheckbox,
}) => {
  return (
    <div className={cn(className)}>
      <p className="mb-3 font-bold">{title}</p>
      <div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder}
          className="border-none bg-gray-50"
        />
      </div>
      <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
        {items.map((item, index) => (
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
    </div>
  );
};
