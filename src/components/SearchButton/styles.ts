import { Theme } from '@mui/material/styles';

export default {
  button: (theme: Theme) => ({
    backgroundColor: theme.palette.primary.main,
  }),

  icon: (theme: Theme) => ({
    color: theme.palette.background.default,
    fontSize: theme.typography.h5.fontSize,
  }),
};
