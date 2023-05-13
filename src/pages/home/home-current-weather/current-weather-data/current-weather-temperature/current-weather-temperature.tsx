import { makeStyles } from 'tss-react/mui';

import { Box, Typography } from '@mui/material';

import type { ConditionType, CurrentWeatherType } from '@/types';

const useStyles = makeStyles()({
  condition: {
    position: 'absolute',
    // filter: `brightness(0)`,
    width: '150px',
    opacity: 0.15,
  },
  conditionText: {
    fontSize: 30,
    fontWeight: 300,
  },
  temperatureWrap: {
    position: 'relative',
  },
  temperature: {
    lineHeight: 1,
    fontSize: 110,
    fontWeight: 700,
    // [theme.breakpoints.down('md')]: {
    //   fontSize: 75,
    // },
    // [theme.breakpoints.down('xs')]: {
    //   fontSize: 50,
    // },
  },
});

interface Props {
  tempC: CurrentWeatherType['tempC'];
  condition: ConditionType;
}

export const CurrentWeatherTemperature = ({ tempC, condition }: Props) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.temperatureWrap}>
      <img
        src={condition?.icon}
        className={classes.condition}
        width="150"
        alt="condition"
      />
      <Box pt={5}>
        <Typography
          className={classes.temperature}
          component="p"
          variant="subtitle1"
          color="textSecondary"
          align="center"
        >
          {tempC}&#176;C
        </Typography>
        <Typography
          className={classes.conditionText}
          component="p"
          variant="subtitle1"
          color="textSecondary"
          align="center"
        >
          {condition?.text}
        </Typography>
      </Box>
    </Box>
  );
};
