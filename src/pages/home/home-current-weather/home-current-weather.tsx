import { useDailyWeatherQuery } from '@/store/forecast/api';

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
      <span>home-current-weather</span>
    </div>
  );
};
