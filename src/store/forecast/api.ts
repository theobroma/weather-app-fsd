// https://github.com/reduxjs/redux-toolkit/issues/1510
import { emptySplitApi } from '@/shared/api/emptySplitApi';
import { ForecastResponseType } from '@/types';

const forecastAPI = emptySplitApi
  .enhanceEndpoints({ addTagTypes: ['DailyWeather'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      dailyWeather: builder.query<
        ForecastResponseType,
        { days?: number; lat: number; lon: number }
      >({
        query: ({ days = 3, lat, lon }) => ({
          url: `/forecast.json?q=${lat},${lon}&days=${days}`, // days = 3 Limited for free plan
          method: 'get',
        }),
        providesTags: ['DailyWeather'],
      }),
    }),
    overrideExisting: false,
  });

export const { useDailyWeatherQuery } = forecastAPI;
