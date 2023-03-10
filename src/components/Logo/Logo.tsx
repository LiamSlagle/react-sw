import React from 'react';
import { Box } from '@mui/material';

import swsvg from 'assets/star-wars.svg';

const Logo: React.FC = () => {
  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <img src={swsvg} style={{ width: 100 }} />
    </Box>
  );
};

export default Logo;
