import { Container } from '@mui/material';

import { HomeCurrentWeather } from './home-current-weather/home-current-weather';
import { HomeForecast } from './home-forecast/home-forecast';
import { HomeSearch } from './home-search/home-search';

const HomePage = () => (
  <Container maxWidth="lg">
    <HomeSearch />
    <HomeCurrentWeather />
    <HomeForecast />
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
