import { emptySplitApi } from '@/shared/api/emptySplitApi';

const searchAPI = emptySplitApi
  //   .enhanceEndpoints({ addTagTypes: ['DailyWeather'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getPlaces: builder.query<any, { place: string }>({
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
