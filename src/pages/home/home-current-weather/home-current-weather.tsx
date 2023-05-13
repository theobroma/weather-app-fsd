import { Box, Grid } from '@mui/material';

import { GridProgress } from '@/shared/uikit/grid-progress/grid-progress';
import { useDailyWeatherQuery } from '@/store/forecast/api';

import { CurrentWeatherData } from './current-weather-data/current-weather-data';
import { CurrentWeatherLocation } from './current-weather-location/current-weather-location';

export const HomeCurrentWeather = () => {
  // TODO:
  const lat = 51.5341714;
  const lon = 33.3767724;

  const {
    data: forecastData,
    // error,
    // isError,
    // isSuccess,
    isFetching,
  } = useDailyWeatherQuery({
    lat,
    lon,
  });

  console.log('forecastData :>> ', forecastData);

  return (
    <Box p={3}>
      <GridProgress container spacing={1} loading={isFetching}>
        <Grid item xs={12}>
          {!!forecastData?.location.name && (
            <CurrentWeatherLocation location={forecastData?.location} />
          )}
          {!!forecastData?.current && (
            <CurrentWeatherData currentWeather={forecastData?.current} />
          )}
        </Grid>
      </GridProgress>
    </Box>
  );
};
