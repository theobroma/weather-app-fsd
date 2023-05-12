import type { GridProps } from '@mui/material';
import { Box, CircularProgress, Grid } from '@mui/material';

interface Props extends GridProps {
  loading: boolean;
}

export const GridProgress = ({ loading, children, ...gridProps }: Props) => (
  <Grid {...gridProps}>
    {loading ? (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={200}
        width="100%"
      >
        <CircularProgress />
      </Box>
    ) : (
      children
    )}
  </Grid>
);
