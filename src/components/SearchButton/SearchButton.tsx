import React from 'react';
import { Button, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import styles from './styles';

const SearchButton: React.FC = () => {
  const theme = useTheme();

  return (
    <Button sx={styles.button(theme)}>
      <SearchIcon sx={styles.icon} />
    </Button>
  );
};

export default SearchButton;
