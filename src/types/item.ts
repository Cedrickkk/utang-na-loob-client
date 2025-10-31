import type { BaseResponseData } from "@/types";

export interface ItemRequest {
  name: string;
  price: number;
}

export interface ItemResponse extends BaseResponseData {
  name: string;
  price: number;
}
