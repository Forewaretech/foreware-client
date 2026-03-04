import axios, { AxiosRequestConfig } from "axios";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FOREWARE_API_URL!,
  headers: { "Content-Type": "application/json" },
});

type ResourceConfig = AxiosRequestConfig & {
  path?: string;
};

export const createResourceApi = <T, CreateDTO = Partial<T>>(
  resource: string,
) => ({
  getAll: async (config?: ResourceConfig): Promise<ApiResponse<T[]>> => {
    const { path, ...axiosConfig } = config || {};

    const url = path ? `/${resource}/${path}` : `/${resource}`;

    const response = await apiClient.get<ApiResponse<T[]>>(url, axiosConfig);

    return response.data;
  },

  getOne: async (
    id: string | number,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const response = await apiClient.get<ApiResponse<T>>(
      `/${resource}/${id}`,
      config,
    );
    return response.data.data;
  },

  create: async (
    payload: CreateDTO,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const response = await apiClient.post<ApiResponse<T>>(
      `/${resource}`,
      payload,
      config,
    );
    return response.data.data;
  },

  update: async (
    id: string | number,
    payload: Partial<T>,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const response = await apiClient.patch<ApiResponse<T>>(
      `/${resource}/${id}`,
      payload,
      config,
    );
    return response.data.data;
  },

  delete: async (
    id: string | number,
    config?: AxiosRequestConfig,
  ): Promise<void> => {
    await apiClient.delete(`/${resource}/${id}`, config);
  },
});
