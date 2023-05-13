// http://www.differencebetween.net/science/nature/difference-between-gust-and-wind/
import {
  faCalendarAlt,
  faTemperatureHigh,
  faWater,
  faWind,
  faBacon,
} from '@fortawesome/free-solid-svg-icons';

import { Grid } from '@mui/material';

import { CurrentWeatherType } from '@/types';

import { ConditionItem } from './condition-item/condition-item';
import { CurrentWeatherTemperature } from './current-weather-temperature/current-weather-temperature';

interface Props {
  currentWeather: CurrentWeatherType;
}

export const CurrentWeatherData = ({ currentWeather }: Props) => {
  const { tempC, condition, lastUpdated, humidity, windKph, windDir, gustKph } =
    currentWeather;

  const updatedDate = new Date(lastUpdated);
  const currentWeekday = { weekday: 'long' } as const;
  const currentDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;
  const lastUpdatedWeekday = updatedDate.toLocaleString(
    'en-US',
    currentWeekday,
  );
  const lastUpdatedDate = updatedDate.toLocaleString('en-US', currentDate);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <CurrentWeatherTemperature tempC={tempC} condition={condition} />
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <ConditionItem title="Today:" icon={faCalendarAlt}>
              {lastUpdatedWeekday} {lastUpdatedDate}
            </ConditionItem>
            <ConditionItem title="Feels Like:" icon={faTemperatureHigh}>
              {tempC}&#176;C
            </ConditionItem>
            <ConditionItem title="Humidity:" icon={faWater}>
              {humidity} %
            </ConditionItem>
            <ConditionItem title="Wind:" icon={faWind}>
              {windKph} km/h ({windDir})
            </ConditionItem>
            <ConditionItem title="Gust:" icon={faBacon}>
              {gustKph} km/h
            </ConditionItem>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
