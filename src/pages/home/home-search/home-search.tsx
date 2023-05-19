import { ChangeEvent, useState } from 'react';
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

export const HomeSearch = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  // const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchVal(event.currentTarget.value.trim());
  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

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

            {/* {searchData.length > 0 && (
              <div className={classes.outputWrap}>
                <SearchOutput searchData={searchData} onClick={onPlaceClick} />
              </div>
            )} */}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};
