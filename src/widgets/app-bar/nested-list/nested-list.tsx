import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';

import { PageEnum } from '@/enums/page.enum';

import { ListItemLink } from './list-item-link/list-item-link';

export const NestedList = () => (
  <List aria-label="primary routes">
    <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
    <ListItemLink
      to={PageEnum.Astronomy}
      primary="Astronomy"
      icon={<HomeIcon />}
    />
  </List>
);
