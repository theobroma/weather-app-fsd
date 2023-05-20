// https://www.timeanddate.com/astronomy/moon/phases.html
import {
  faSun,
  faMoon,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from 'tss-react/mui';

import { Grid, Box, Paper, Typography, Card, CardContent } from '@mui/material';

import { GridProgress } from '@/shared/uikit/grid-progress/grid-progress';
import { useDailyWeatherQuery } from '@/store/forecast/api';

export const useStyles = makeStyles<void>()((_theme, _params, classes) => ({
  // title: {
  //   fontSize: 14,
  // },
  pos: {
    marginBottom: 6,
  },
  // temperature: {
  //   fontWeight: 300,
  //   fontSize: '24px',
  // },
}));

export const AstronomyAstro = () => {
  const { classes } = useStyles();
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

  const astro = forecastData?.forecast.forecastday[0].astro;
  const date = forecastData?.forecast.forecastday[0].date;
  console.log('astro :>> ', astro);
  console.log('date :>> ', date);

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
              <Card>
                <CardContent>
                  {/* <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    align="center"
                  >
                    {weekDayString}
                  </Typography> */}
                  {/* <Typography
                    className={classes.pos}
                    color="textSecondary"
                    align="center"
                  >
                    {dateString}
                  </Typography> */}
                  <Typography
                    className={classes.pos}
                    color="textSecondary"
                    align="center"
                  >
                    <FontAwesomeIcon icon={faSun} />
                    &nbsp;
                    <FontAwesomeIcon icon={faArrowUp} />
                    &nbsp;&nbsp;{astro?.sunrise}
                  </Typography>
                  <Typography
                    className={classes.pos}
                    color="textSecondary"
                    align="center"
                  >
                    <FontAwesomeIcon icon={faSun} />
                    &nbsp;
                    <FontAwesomeIcon icon={faArrowDown} />
                    &nbsp;&nbsp;{astro?.sunset}
                  </Typography>

                  <Typography
                    className={classes.pos}
                    color="textSecondary"
                    align="center"
                  >
                    <FontAwesomeIcon icon={faMoon} />
                    &nbsp;
                    <FontAwesomeIcon icon={faArrowUp} />
                    &nbsp;&nbsp;{astro?.moonrise}
                  </Typography>
                  <Typography
                    className={classes.pos}
                    color="textSecondary"
                    align="center"
                  >
                    <FontAwesomeIcon icon={faMoon} />
                    &nbsp;
                    <FontAwesomeIcon icon={faArrowDown} />
                    &nbsp;&nbsp;{astro?.moonset}
                  </Typography>
                  <Typography
                    className={classes.pos}
                    color="textSecondary"
                    align="center"
                  >
                    phase: &nbsp;{astro?.moonPhase}
                  </Typography>
                  <Typography
                    className={classes.pos}
                    color="textSecondary"
                    align="center"
                  >
                    illumination: &nbsp;{astro?.moonIllumination}
                  </Typography>
                </CardContent>
              </Card>
            </GridProgress>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};
