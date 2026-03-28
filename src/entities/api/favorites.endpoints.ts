import { api } from './baseApi'
import type { AddFavoriteResponse, DeleteFavoriteResponse, Favorite, isFavorite } from './types'


export const favoritesEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getFavorites: builder.query<Favorite[], void>({
      query: () => 'favorites',
      providesTags: ['Favorites']
    }),
    addFavorites: builder.mutation<AddFavoriteResponse, number>({
      query: (id) => ({
        url: `favorites/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['Favorites']
    }),
    deleteFavorite: builder.mutation<DeleteFavoriteResponse, number>({
      query: (id) => ({
        url: `favorites/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Favorites']
    }),
    checkIsFavorite: builder.query<isFavorite, number>({
      query: (id) => `favorites/check/${id}`
    })
})
})