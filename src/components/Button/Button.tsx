import React from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
  CircularProgress,
  useTheme,
} from '@mui/material';
import styles from './styles';

type ButtonProps<C extends React.ElementType = 'button'> = MUIButtonProps<
  C,
  { component?: C }
> & {
  loading?: boolean;
};

const defaultProps = {
  loading: false,
  component: 'button',
};

function Button<C extends React.ElementType = 'button'>(props: ButtonProps<C>) {
  const withDefault = { ...defaultProps, ...props };
  const { loading, component } = withDefault;
  const theme = useTheme();
  return (
    <MUIButton variant="outlined" component={component} {...props}>
      {loading && <CircularProgress size={24} sx={styles.spinner(theme)} />}
      {!loading && props.children}
    </MUIButton>
  );
}

export default Button;
