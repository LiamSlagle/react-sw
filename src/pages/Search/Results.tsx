import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import { Film } from 'state/films';
import ActionCard from 'components/ActionCard';
import styles from './styles';

interface PropTypes {
  films: Film[];
}

const Results: React.FC<PropTypes> = ({ films }) => {
  return (
    <>
      <Stack spacing={2}>
        {films.map((film) => (
          <Link
            key={film.episode_id}
            to={`/film-details/${film.episode_id}`}
            style={styles.link}
          >
            <ActionCard
              title={film.title}
              subtitle={new Date(film.release_date).getFullYear().toString()}
            />
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default Results;
