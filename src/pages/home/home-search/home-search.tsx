import { ChangeEvent, useCallback, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { useDebounce } from 'usehooks-ts';

import SearchIcon from '@mui/icons-material/Search';
import {
  Grid,
  Box,
  Paper,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import { useGetPlacesQuery } from '@/store/search/api';

import { HomeSearchOutput } from './home-search-output/home-search-output';

const useStyles = makeStyles()({
  outputWrap: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'nowrap',
  },
});

export const HomeSearch = () => {
  const { classes } = useStyles();
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const {
    data: placesData,
    // error,
    // isError,
    // isSuccess,
    // isFetching,
  } = useGetPlacesQuery(
    {
      place: debouncedValue,
    },
    { skip: debouncedValue.length < 3 },
  );

  // const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchVal(event.currentTarget.value.trim());
  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onPlaceClick = useCallback((lat: number, lon: number) => {
    console.log('lat :>> ', lat);
    console.log('lon :>> ', lon);
  }, []);

  return (
    <Grid item xs={12}>
      <Box mb={1}>
        <Paper elevation={3}>
          <Box p={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="search-input">Search</InputLabel>
              <OutlinedInput
                // need for correct styles. Same text as in InputLabel
                label="Search"
                id="search-input"
                value={value}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>

            {(placesData?.length || 0) > 0 && (
              <div className={classes.outputWrap}>
                <HomeSearchOutput
                  searchData={placesData || []}
                  onClick={onPlaceClick}
                />
              </div>
            )}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};
