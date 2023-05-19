import { List, ListItem, Typography } from '@mui/material';

import { SearchPlaceItemType } from '@/types';

import { useStyles } from './home-search-output.styles';

interface Props {
  searchData: SearchPlaceItemType[];
  onClick: (lat: number, lon: number) => void;
}

export const HomeSearchOutput = ({ searchData = [], onClick }: Props) => {
  const { classes } = useStyles();

  return (
    <List className={classes.root} aria-labelledby="nested-list-subheader">
      {searchData.map((item: SearchPlaceItemType) => {
        return (
          <ListItem
            key={item.id}
            button
            className={classes.item}
            onClick={() => onClick(item.lat, item.lon)}
          >
            <Typography variant="body1">
              <span className={classes.title}>{item.name}</span>
            </Typography>
          </ListItem>
        );
      })}
    </List>
  );
};
