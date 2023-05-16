import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from 'tss-react/mui';

import { Card, CardContent, Typography } from '@mui/material';

import { ForecastDayType } from '@/types';

const useStyles = makeStyles()((theme) => ({
  root: {
    minWidth: 275,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 16,
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 6,
  },
  temperature: {
    fontWeight: 300,
    fontSize: '24px',
  },
}));

const weekdayOptions = { weekday: 'long' } as const;
const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
} as const;

interface Props {
  forecastday: ForecastDayType;
}

export const HomeForecastDay = ({ forecastday }: Props) => {
  const { classes } = useStyles();
  const { astro, date, day } = forecastday;

  const adaptedDate = new Date(date);
  const weekDayString = adaptedDate.toLocaleString('en-US', weekdayOptions);
  const dateString = adaptedDate.toLocaleString('en-US', dateOptions);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          align="center"
        >
          {weekDayString}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          align="center"
        >
          {dateString}
        </Typography>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <img src={day.condition.icon} alt="icon" />
        </div>
        <Typography
          className={classes.pos}
          color="textSecondary"
          align="center"
          style={{
            marginBottom: 24,
          }}
        >
          {day.condition.text}
        </Typography>
        <Typography
          className={classes.temperature}
          color="textSecondary"
          align="center"
          style={{
            marginBottom: 24,
          }}
        >
          {day.mintempC} - {day.maxtempC}&#176;C
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          align="center"
        >
          <FontAwesomeIcon icon={faSun} />
          &nbsp;{astro.sunrise}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          align="center"
        >
          <FontAwesomeIcon icon={faMoon} />
          &nbsp;{astro.sunset}
        </Typography>
      </CardContent>
    </Card>
  );
};
