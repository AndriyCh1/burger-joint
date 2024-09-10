"use client";

import { FC, useEffect } from "react";
import { CheckboxFilterGroup, FilterCheckbox, RangeSlider, Title } from "./";
import { Input } from "@/components/ui";
import { useFilters } from "@/hooks";
import { useRouter } from "next/navigation";
import qs from "query-string";

type Props = {
  className?: string;
};

const INTI_FILTERS_COUNT = 6;
const MIN_PRICE = 0;
const MAX_PRICE = 500;
const INIT_PRICE_RANGE = {
  from: 0,
  to: 500,
};

export const Filters: FC<Props> = ({ className }) => {
  const router = useRouter();

  const {
    priceRange,
    setPriceRange,
    ingredients,
    loadingIngredients,
    selectedIngredients,
    toggleFilterIngredients,
  } = useFilters();

  const ingredientFilterOptions = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  const updatePriceRange = (from: number, to: number) => {
    setPriceRange({ from, to });
  };

  useEffect(() => {
    const searchParams = {
      priceFrom: priceRange.from,
      priceTo: priceRange.to,
      ingredients: Array.from(selectedIngredients),
    };

    const queryString = qs.stringify(searchParams, { arrayFormat: "comma" });
    router.push(`?${queryString}`, { scroll: false });
  }, [priceRange, selectedIngredients]);

  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="New Items" value="1" name="new-items" />
        <FilterCheckbox text="Top Sellers" value="2" name="top-sellers" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Price: </p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={priceRange.from}
            onChange={(e) =>
              updatePriceRange(
                Number(e.target.value),
                priceRange.to || INIT_PRICE_RANGE.to
              )
            }
          />
          <Input
            type="number"
            placeholder="0"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={priceRange.to}
            onChange={(e) =>
              updatePriceRange(
                priceRange.from || INIT_PRICE_RANGE.from,
                Number(e.target.value)
              )
            }
          />
        </div>
        <RangeSlider
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={10}
          value={[priceRange.from || MIN_PRICE, priceRange.to || MAX_PRICE]}
          onValueChange={([from, to]) => updatePriceRange(from, to)}
        />
      </div>
      <CheckboxFilterGroup
        title="Ingredients"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={ingredientFilterOptions.slice(
          0,
          Math.min(ingredients.length, INTI_FILTERS_COUNT)
        )}
        items={ingredientFilterOptions}
        loading={loadingIngredients}
        onClickCheckbox={toggleFilterIngredients}
        selected={Array.from(selectedIngredients)}
      />
    </div>
  );
};
