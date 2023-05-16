import { Box, Container, Grid } from '@mui/material';

import { HomeCurrentWeather } from './home-current-weather/home-current-weather';
import { HomeForecast } from './home-forecast/home-forecast';
import { HomeSearch } from './home-search/home-search';

const HomePage = () => (
  <Container maxWidth="lg">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <HomeSearch />
        <HomeCurrentWeather />
        <HomeForecast />
      </Grid>
    </Box>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
