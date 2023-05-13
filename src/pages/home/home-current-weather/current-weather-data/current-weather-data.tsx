import { CurrentWeatherType } from '@/types';

interface Props {
  currentWeather: CurrentWeatherType;
}

export const CurrentWeatherData = ({ currentWeather }: Props) => {
  return (
    <div>
      <span>current-weather-data</span>
    </div>
  );
};
