import { FC } from "react";
import Link from "next/link";
import { Title } from "./";
import { Button } from "@/components/ui";
import { Plus } from "lucide-react";

type Props = {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  className?: string;
};

export const ProductCard: FC<Props> = ({
  id,
  imageUrl,
  name,
  price,
  className,
}) => {
  return (
    <div className={className}>
      <Link href="">
        <div className="flex h-[260px] justify-center rounded-lg bg-secondary p-6">
          <img
            className="size-[215px]"
            src={imageUrl || "/placeholder-image.jpg"}
            alt={name}
          />
        </div>
        <Title className="mb-1 mt-3 font-bold" text={name} size="sm" />
        <p className="text-sm text-gray-400">TODO: ingredients</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[20px]">
            from <b>{price} $</b>
          </span>
          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
