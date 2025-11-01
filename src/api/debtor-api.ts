import { api } from "@/lib/api";
import {
  debtorSchema,
  type CreateDebtor,
  type DebtorResponse,
} from "@/schema/debtor";
import { type ApiError, type ApiResponse } from "@/schema/response";
import axios from "axios";

export const getDebtors = async (): Promise<ApiResponse<DebtorResponse[]>> => {
  try {
    const { data } = await api.get<ApiResponse<DebtorResponse[]>>("/debtors");
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data as ApiError;
    }
    throw error;
  }
};

export const createDebtor = async (
  debtor: CreateDebtor,
): Promise<ApiResponse<DebtorResponse>> => {
  try {
    const { data } = await api.post<ApiResponse<DebtorResponse>>(
      "/debtors",
      debtorSchema.parse(debtor),
    );
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data as ApiError;
    }
    throw error;
  }
};

export const getDebtorById = async (id: number) => {
  try {
    const { data } = await api.get<ApiResponse<DebtorResponse>>(
      `/debtors/${id}`,
    );
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data as ApiError;
    }
    throw error;
  }
};
