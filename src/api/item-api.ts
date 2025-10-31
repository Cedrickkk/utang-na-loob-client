import { api } from "@/lib/api";
import type { ApiResponse } from "@/types";
import type { ItemRequest, ItemResponse } from "@/types/item";

export const getItems = async () => {
  const { data } = await api.get<ApiResponse<ItemResponse>>("/items");
  return data;
};

export const createItem = async (item: ItemRequest) => {
  const { data } = await api.post<ApiResponse<ItemResponse>>("/items", item);
  return data;
};
