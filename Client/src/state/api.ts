/*
TODO: Redux ToolKit Setup and Configuration
MARK: - Redux Setup
*/
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from './types';



// TODO: 通过创建的API从后端获取数据
export const api = createApi({
  reducerPath: 'main', // 确保与你的 reducer 路径一致
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  // 用于保存数据
  tagTypes: ['Kpis', 'Products', 'Transactions'],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => 'kpis',
      providesTags: ['Kpis'],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => 'products',
      providesTags: ['Products'],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => 'transactions',
      providesTags: ['Transactions'],
    }),
  }),
});

//@ts-ignore
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;
