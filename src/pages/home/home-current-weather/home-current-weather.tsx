import { useDailyWeatherQuery } from '@/store/forecast/api';

import { CurrentWeatherLocation } from './current-weather-location/current-weather-location';

export const HomeCurrentWeather = () => {
  // TODO:
  const lat = 51.5341714;
  const lon = 33.3767724;

  const {
    data: forecastData,
    error,
    isError,
    isSuccess,
    isFetching,
  } = useDailyWeatherQuery({
    lat,
    lon,
  });

  console.log('forecastData :>> ', forecastData);

  return (
    <div>
      {forecastData?.location && (
        <CurrentWeatherLocation location={forecastData?.location} />
      )}
    </div>
  );
};
