"use client";

import { FC, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./";
import { useCategoryStore } from "@/store/category";

type Props = {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
};

export const ProductsGroupList: FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items.length > 0 ? product.items[0].price : 0}
          />
        ))}
      </div>
    </div>
  );
};
