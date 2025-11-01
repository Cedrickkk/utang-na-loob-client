import { api } from "@/lib/api";
import { itemSchema, type CreateItem, type ItemResponse } from "@/schema/item";
import { type ApiError, type ApiResponse } from "@/schema/response";
import axios, { AxiosError } from "axios";

export const getItems = async (): Promise<ApiResponse<ItemResponse[]>> => {
  try {
    const { data } = await api.get<ApiResponse<ItemResponse[]>>("/items");
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data as ApiError;
    }
    throw error;
  }
};

export const createItem = async (
  item: CreateItem,
): Promise<ApiResponse<ItemResponse>> => {
  try {
    const { data } = await api.post<ApiResponse<ItemResponse>>(
      "/items",
      itemSchema.parse(item),
    );
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data as ApiError;
    }
    throw error;
  }
};

export const getItemById = async (
  id: number,
): Promise<ApiResponse<ItemResponse>> => {
  try {
    const { data } = await api.get<ApiResponse<ItemResponse>>(`/items/${id}`);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data as ApiError;
    }
    throw error;
  }
};
