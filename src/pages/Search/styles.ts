import { Theme } from '@mui/material/styles';

export default {
  pageContainer: (theme: Theme) => ({
    marginTop: theme.spacing(2),
  }),

  searchContainer: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
      paddingRight: theme.spacing(4),
    },
  }),

  resultsContainer: (theme: Theme) => ({
    height: '80vh',
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,

    [theme.breakpoints.down('md')]: {
      borderTop: 1,
      textAlign: 'center',
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      borderLeft: 1,
      paddingLeft: theme.spacing(4),
    },
  }),

  welcomeText: (theme: Theme) => ({
    ...theme.typography.h4,
    margin: `0 0 ${theme.spacing(2)} 0`,
  }),

  helpText: (theme: Theme) => ({
    ...theme.typography.subtitle1,
    margin: `0 0 ${theme.spacing(2)} 0`,
  }),

  resultsPendingText: (theme: Theme) => ({
    margin: `${theme.spacing(2)} 0`,
  }),

  searchBar: (theme: Theme) => ({
    width: '100%',
    maxWidth: theme.spacing(64),
    color: theme.palette.text.primary,
  }),
};
