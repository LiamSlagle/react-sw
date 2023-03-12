import React from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
  CircularProgress,
} from '@mui/material';

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
  return (
    <MUIButton variant="outlined" component={component} {...props}>
      {loading && <CircularProgress size={24} />}
      {!loading && props.children}
    </MUIButton>
  );
}

export default Button;
