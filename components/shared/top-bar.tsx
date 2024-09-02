import { FC } from "react";
import { cn } from "@/lib/utils";
import { SortPopup, Categories, Container } from "./";

type Props = {
  className?: string;
};

export const TopBar: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
