import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:7676/api',
    credentials: 'include'
});

export const apiSlice = createApi({
    reducerPath: 'api',
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 5,
    tagTypes: [],
    baseQuery,
    endpoints: () => ({})
});
