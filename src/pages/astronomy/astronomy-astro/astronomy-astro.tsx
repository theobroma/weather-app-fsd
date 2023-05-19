import { Grid, Box, Paper, Typography } from '@mui/material';

import { GridProgress } from '@/shared/uikit/grid-progress/grid-progress';
import { useDailyWeatherQuery } from '@/store/forecast/api';

export const AstronomyAstro = () => {
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

  console.log('object :>> ', forecastData?.forecast.forecastday[0].astro);

  return (
    <Grid item xs={12}>
      <Box mb={1}>
        <Paper elevation={3}>
          <Box p={3}>
            <GridProgress container spacing={1} loading={isFetching}>
              <Grid item xs={12}>
                <Box mb={1}>
                  <Typography variant="h6" noWrap>
                    Astronomy
                  </Typography>
                </Box>
              </Grid>
            </GridProgress>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};
