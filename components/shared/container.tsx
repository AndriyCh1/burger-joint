import { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const Container: FC<Props> = ({ className, children }) => {
  return (
    <div className={cn("mx-auto max-w-[1280px]", className)}>{children}</div>
  );
};
