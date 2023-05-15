import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from 'tss-react/mui';

import { Card, CardContent, Typography } from '@mui/material';

import { DayType } from '@/types';

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

interface Props {
  day: DayType;
}

export const HomeForecastDay = ({ day }: Props) => {
  const { classes } = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          align="center"
        >
          {/* {weekDay} */}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          align="center"
        >
          {/* {date} */}
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
          {/* {condition_text} */}
        </Typography>
        <Typography
          className={classes.temperature}
          color="textSecondary"
          align="center"
          style={{
            marginBottom: 24,
          }}
        >
          {/* {min_temp} - {max_temp}&#176;C */}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          align="center"
        >
          <FontAwesomeIcon icon={faSun} />
          {/* &nbsp;{sunrise} */}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          align="center"
        >
          <FontAwesomeIcon icon={faMoon} />
          {/* &nbsp;{sunset} */}
        </Typography>
      </CardContent>
    </Card>
  );
};
