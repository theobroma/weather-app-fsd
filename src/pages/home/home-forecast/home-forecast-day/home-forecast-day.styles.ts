import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<void>()((_theme, _params, classes) => ({
  root: {
    minWidth: 275,
    [_theme.breakpoints.down('md')]: {
      marginBottom: 16,
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 6,
  },
  temperature: {
    fontWeight: 300,
    fontSize: '24px',
  },
}));
