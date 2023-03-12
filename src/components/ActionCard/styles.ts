import { Theme } from '@mui/material/styles';

export default {
  cardContent: () => ({
    textAlign: 'left',
  }),

  subtitle: (theme: Theme) => ({
    color: theme.palette.secondary.main,
  }),
};
