import { Box, Container, Grid } from '@mui/material';

import { AstronomyAstro } from './astronomy-astro/astronomy-astro';

const AstronomyPage = () => (
  <Container maxWidth="lg">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <AstronomyAstro />
      </Grid>
    </Box>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default AstronomyPage;
