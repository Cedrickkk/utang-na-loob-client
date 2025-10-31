interface BaseResponseData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T extends BaseResponseData> {
  status: number;
  message: string;
  timeStamp: string;
  data?: T[];
  error?: string;
  errors?: Record<string, string>;
}

export interface Item extends BaseResponseData {
  name: string;
  price: number;
}
