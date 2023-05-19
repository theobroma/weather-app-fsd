import { emptySplitApi } from '@/shared/api/emptySplitApi';
import { SearchPlaceResponseType } from '@/types';

const searchAPI = emptySplitApi
  //   .enhanceEndpoints({ addTagTypes: ['DailyWeather'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getPlaces: builder.query<SearchPlaceResponseType, { place: string }>({
        query: ({ place }) => ({
          url: `/search.json?q=${place}`,
          method: 'get',
        }),
        // providesTags: ['DailyWeather'],
      }),
    }),
    overrideExisting: false,
  });

export const { useGetPlacesQuery } = searchAPI;
