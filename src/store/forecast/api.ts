import { emptySplitApi } from '@/shared/api/emptySplitApi';

const forecastAPI = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    dailyWeather: builder.query<
      any,
      { days?: number; lat: number; lon: number }
    >({
      query: ({ days = 3, lat, lon }) => ({
        url: `/forecast.json?q=${lat},${lon}&days=${days}`, // days = 3 Limited for free plan
        method: 'get',
      }),
      // providesTags: ['DailyWeather'],
    }),
  }),
  overrideExisting: false,
});

export const { useDailyWeatherQuery } = forecastAPI;
