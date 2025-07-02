import type {
  AxiosRequestConfig,
  AxiosInstance as OriginAxiosInstance,
} from "axios"

export interface AxiosInstance extends OriginAxiosInstance {
  <T = unknown>(config: AxiosRequestConfig): Promise<T>
  request<T = unknown>(config: AxiosRequestConfig): Promise<T>
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>
  delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>
  head<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>
  post<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T>
  put<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T>
  patch<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T>
}

export interface Result<T = null> {
  code: number
  data: T
  msg?: string
}

export interface Results<T = null> {
  code: number
  rows: T[]
  page: number
  pageSize: number
  total: number
  msg?: string
}
