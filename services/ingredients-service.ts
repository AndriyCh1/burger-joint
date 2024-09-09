import { Ingredient } from "@prisma/client";
import { axiosInstance } from "./axios-instance";
import { urls } from "./urls";

export const ingredientsService = {
  getAll: async () => {
    const { data } = await axiosInstance.get<Ingredient[]>(
      urls.ingredients.base
    );

    return data;
  },
};
