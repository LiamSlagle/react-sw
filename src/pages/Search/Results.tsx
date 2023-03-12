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
          <ActionCard
            key={film.episode_id}
            title={film.title}
            subtitle={new Date(film.release_date).getFullYear().toString()}
          />
        ))}
      </Stack>
    </>
  );
};

export default Results;
