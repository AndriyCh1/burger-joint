import React, { FC, ReactNode } from "react";
import { Checkbox } from "@/components/ui";

export type FilterCheckboxProps = {
  text: string;
  value: string;
  name: string;
  endAdornment?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
};

export const FilterCheckbox: FC<FilterCheckboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`checkbox-${name}-${value}`}
        className="size-6 rounded-md"
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
      />
      <label
        htmlFor={`checkbox-${name}-${value}`}
        className="flex-1 cursor-pointer select-none leading-none"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
