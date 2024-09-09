import { Product } from "@prisma/client";
import { axiosInstance } from "./axios-instance";
import { urls } from "./urls";

export const productsService = {
  search: async (name: string) => {
    const { data } = await axiosInstance.get<Product[]>(urls.products.search, {
      params: { name },
    });

    return data;
  },
};
