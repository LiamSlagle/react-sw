import { Theme } from '@mui/material/styles';

export default {
  link: () => ({
    textDecoration: 'none',
  }),

  cardContent: () => ({
    textAlign: 'left',
  }),

  subtitle: (theme: Theme) => ({
    color: theme.palette.secondary.main,
  }),
};
