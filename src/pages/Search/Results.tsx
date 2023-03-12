import React from 'react';
import { Stack } from '@mui/material';

import { Film } from 'state/films';
import ActionCard from 'components/ActionCard';

interface PropTypes {
  films: Film[];
}

const Results: React.FC<PropTypes> = ({ films }) => {
  return (
    <>
      <Stack spacing={2}>
        {films.map((film) => (
          <ActionCard key={film.episode_id} title={film.title} />
        ))}
      </Stack>
    </>
  );
};

export default Results;
