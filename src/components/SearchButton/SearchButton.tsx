import React from 'react';
import { Button, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import styles from './styles';

interface PropTypes {
  onClick: () => void;
}

const SearchButton: React.FC<PropTypes> = ({ onClick }) => {
  const theme = useTheme();

  return (
    <Button sx={styles.button(theme)} onClick={onClick}>
      <SearchIcon sx={styles.icon} />
    </Button>
  );
};

export default SearchButton;
