import { api } from "@/lib/api";
import { debtSchema, type CreateDebt, type DebtResponse } from "@/schema/debt";
import { type ApiError, type ApiResponse } from "@/schema/response";
import axios from "axios";

export const getDebts = async () => {
  try {
    const { data } = await api.get<ApiResponse<DebtResponse[]>>("/debts");
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data as ApiError;
    }
    throw error;
  }
};

export const createDebt = async (debt: CreateDebt) => {
  try {
    const { data } = await api.post<ApiResponse<DebtResponse>>(
      "/debts",
      debtSchema.parse(debt),
    );
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data as ApiError;
    }
  }
};

export const getDebtById = async (id: number) => {
  try {
    const { data } = await api.get<ApiResponse<DebtResponse>>(`/debts/${id}`);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data as ApiError;
    }
    throw error;
  }
};
