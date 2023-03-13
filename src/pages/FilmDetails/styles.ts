import { Theme } from '@mui/material/styles';
import { keyframes } from '@mui/system';

export default {
  container: (theme: Theme) => ({
    border: 1,
    borderColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
  }),

  title: (theme: Theme) => ({
    ...theme.typography.h4,
    fontWeight: theme.typography.fontWeightBold,
  }),

  detailTitle: (theme: Theme) => ({
    ...theme.typography.subtitle1,
    color: theme.palette.secondary.main,
  }),

  detail: (theme: Theme) => ({
    ...theme.typography.h6,
  }),

  crawlModal: () => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '80vh',
    width: '80%',
    background: 'none',
  }),

  crawlContainer: (theme: Theme) => ({
    position: 'relative',
    height: '800px',
    fontWeight: 600,
    letterSpacing: '6px',
    lineHeight: '150%',
    textAlign: 'justify',
    overflow: 'scroll',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    border: 1,
    borderColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,

    '::-webkit-scrollbar': {
      display: 'none',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '200%',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '350%',
    },
  }),

  crawlTitle: () => ({
    fontSize: '90%',
    textAlign: 'center',
  }),

  crawlTitleEpisode: (theme: Theme) => ({
    margin: `0 0 ${theme.spacing(4)}`,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '100%',
  }),

  crawlBody: (theme: Theme) => ({
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h6,
    },
    [theme.breakpoints.up('sm')]: {
      ...theme.typography.h4,
    },
  }),
};
