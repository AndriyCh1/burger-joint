"use client";

import { FC, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useClickAway, useDebounce } from "react-use";
import { productsService } from "@/services";
import { Product } from "@prisma/client";

type Props = {
  className?: string;
};

export const SearchInput: FC<Props> = ({ className }) => {
  const [searchValue, setSearchValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef(null);

  useClickAway(ref, () => setFocused(false));

  useDebounce(
    async () => {
      try {
        if (searchValue) {
          const products = await productsService.search(searchValue);
          setProducts(products);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchValue]
  );

  const onItemClick = () => {
    setSearchValue("");
    setFocused(false);
    setProducts([]);
  };

  return (
    <>
      {focused && (
        <div className="fixed left-0 top-0 z-30 size-full bg-black/50" />
      )}

      <div
        ref={ref}
        className={cn(
          "relative flex h-11 flex-1 justify-between rounded-2xl z-30",
          className
        )}
      >
        <Search className="absolute left-3 top-1/2 h-5 -translate-y-1/2 text-gray-400" />
        <input
          className="w-full rounded-2xl bg-gray-100 pl-11 outline-none"
          type="text"
          placeholder="Search..."
          onFocus={() => setFocused(true)}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />

        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible z-30",
              { "visible top-12": focused }
            )}
          >
            {products.map((product) => (
              <Link
                className="flex w-full items-center gap-3 px-3 py-2 hover:bg-primary/10"
                href={`/products/${product.id}`}
                key={product.id}
                onClick={onItemClick}
              >
                <Image
                  className="size-8 rounded-sm"
                  src={product.imageUrl || "/placeholder-image.jpg"}
                  width={80}
                  height={80}
                  alt={product.name}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
