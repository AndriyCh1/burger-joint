import { FC } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

type Props = {
  className?: string;
};

export const SortPopup: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        className
      )}
    >
      <ArrowDown size={16} />
      <b>Sort</b>
      <b className="text-primary">Popular</b>
    </div>
  );
};
