import { useEffect, useState } from "react";
import { ingredientsService } from "@/services";
import { Ingredient } from "@prisma/client";
import { useSet } from "react-use";
import { useSearchParams } from "next/navigation";

type Return = {
  ingredients: Ingredient[];
  loading: boolean;
  selected: Set<string>;
  toggleFilter: (id: string) => void;
};

export const useFilterIngredients = (): Return => {
  const searchParams = useSearchParams();
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(false);

  const [selectedIds, { toggle }] = useSet(
    new Set<string>(
      searchParams.has("ingredients")
        ? searchParams.get("ingredients")?.split(",")
        : []
    )
  );

  useEffect(() => {
    const getIngredients = async () => {
      try {
        setLoading(true);
        const ingredients = await ingredientsService.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getIngredients();
  }, []);

  return { ingredients, loading, selected: selectedIds, toggleFilter: toggle };
};
