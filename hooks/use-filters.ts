import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useFilterIngredients } from "@/hooks/use-filter-ingredients";

type PriceRange = {
  from?: number;
  to?: number;
};

export const useFilters = () => {
  const searchParams = useSearchParams();

  const {
    ingredients,
    loading: loadingIngredients,
    selected: selectedIngredients,
    toggleFilter: toggleFilterIngredients,
  } = useFilterIngredients();

  const [priceRange, setPriceRange] = useState<PriceRange>({
    from: searchParams.get("priceFrom")
      ? Number(searchParams.get("priceFrom"))
      : undefined,
    to: searchParams.get("priceTo")
      ? Number(searchParams.get("priceTo"))
      : undefined,
  });

  return {
    ingredients,
    selectedIngredients,
    toggleFilterIngredients,
    loadingIngredients,
    priceRange,
    setPriceRange,
  };
};
