import { nanoid } from '@reduxjs/toolkit';

import { Box, Typography, Grid } from '@mui/material';

import { GridProgress } from '@/shared/uikit/grid-progress/grid-progress';
import { useDailyWeatherQuery } from '@/store/forecast/api';

import { HomeForecastDay } from './home-forecast-day/home-forecast-day';

export const HomeForecast = () => {
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
      <Box mb={1}>
        <Typography variant="h6" noWrap>
          Forecast
        </Typography>
      </Box>
      <Box>
        <GridProgress container spacing={1} loading={isFetching}>
          {forecastData?.forecast.forecastday.map((forecastday) => {
            const adaptedDate = new Date(forecastday.date);
            return (
              <Grid item xs={12} md={4} key={nanoid(8)}>
                {/* <ForecastDay
                  weekDay={adaptedDate.toLocaleString('en-US', currentWeekday)}
                  date={adaptedDate.toLocaleString('en-US', currentDate)}
                  sunrise={d.astro.sunrise}
                  sunset={d.astro.sunset}
                  icon={d.day.condition.icon}
                  condition_text={d.day.condition.text}
                  min_temp={d.day.mintemp_c}
                  max_temp={d.day.maxtemp_c}
                /> */}
                <HomeForecastDay day={forecastday.day} />
              </Grid>
            );
          })}
        </GridProgress>
      </Box>
    </Box>
  );
};
