import { Theme } from '@mui/material/styles';

export default {
  /* Containers */

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
      paddingTop: theme.spacing(4),
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      borderLeft: 1,
      paddingLeft: theme.spacing(4),
    },
  }),

  /* Text */

  welcomeText: (theme: Theme) => ({
    ...theme.typography.h4,
    margin: `0 0 ${theme.spacing(2)} 0`,
  }),

  helpText: (theme: Theme) => ({
    ...theme.typography.subtitle1,
    margin: `0 0 ${theme.spacing(2)} 0`,
  }),

  /* Components */

  searchBar: (theme: Theme) => ({
    width: '100%',
    maxWidth: theme.spacing(64),
    color: theme.palette.text.primary,
  }),

  searchButton: (theme: Theme) => ({
    backgroundColor: theme.palette.primary.main,
  }),

  searchIcon: (theme: Theme) => ({
    color: theme.palette.background.default,
    fontSize: theme.typography.h5.fontSize,
  }),

  link: {
    textDecoration: 'none',
  },
};
