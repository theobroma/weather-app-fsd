import { makeStyles } from 'tss-react/mui';

import { Typography } from '@mui/material';

import { LocationType } from '@/types';

interface Props {
  location: LocationType;
}

const useStyles = makeStyles()({
  title: {
    fontSize: 30,
    fontWeight: 300,
  },
});

export const CurrentWeatherLocation = ({ location }: Props) => {
  const { classes } = useStyles();
  const { name, country, region } = location;

  return (
    <div>
      <Typography className={classes.title} component="h2" variant="h6">
        {name}, {region}, {country}
      </Typography>
    </div>
  );
};
