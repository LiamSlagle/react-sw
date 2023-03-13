import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Modal,
  Stack,
  Paper,
  useTheme,
} from '@mui/material';

import { RootState } from 'state/store';
import { ROMAN_NUMS, selectFilmById } from 'state/films';

import Logo from 'components/Logo';
import Button from 'components/Button';
import styles from './styles';

const FilmDetails: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [crawlOpen, setCrawlOpen] = useState<boolean>(false);
  const handleCrawlOpen = () => setCrawlOpen(true);
  const handleCrawlClose = () => setCrawlOpen(false);

  const { filmId } = useParams();
  const film = useSelector((state: RootState) => selectFilmById(state, filmId));

  const formattedTitle = (title: string, episode_id: number) => {
    return `Star Wars: Episode ${ROMAN_NUMS[episode_id]} - ${title}`;
  };

  const formattedDate = (date: string) => {
    return new Date(date).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  useEffect(() => {
    if (!film) navigate('/');
  }, [film]);

  return (
    <Container maxWidth="xl">
      <Logo />
      {film && (
        <>
          <Grid container sx={styles.container(theme)}>
            <Grid item xs={12} mb={2}>
              <Typography sx={styles.title}>
                {formattedTitle(film.title, film.episode_id)}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={3} mb={2}>
              <Typography sx={styles.detailTitle(theme)}>Released:</Typography>
              <Typography sx={styles.detail(theme)}>
                {formattedDate(film.release_date)}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={3} mb={2}>
              <Typography sx={styles.detailTitle(theme)}>
                Directed by:
              </Typography>
              <Typography sx={styles.detail(theme)}>{film.director}</Typography>
            </Grid>

            <Grid item xs={12} sm={3} mb={2}>
              <Typography sx={styles.detailTitle(theme)}>
                Produced by:
              </Typography>
              <Typography sx={styles.detail(theme)}>{film.producer}</Typography>
            </Grid>

            <Grid item xs={12} sm={3} mb={2}>
              <Typography sx={styles.detailTitle(theme)}>
                Appears in:
              </Typography>
              <Typography sx={styles.detail(theme)}>
                {film.episode_id < 4 ? 'Prequel Trilogy' : 'Original Trilogy'}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Button onClick={() => setCrawlOpen(!crawlOpen)}>
                Show Opening Crawl
              </Button>
            </Grid>
          </Grid>

          <Modal open={crawlOpen} onClose={handleCrawlClose}>
            <Paper sx={styles.crawlModal}>
              <Stack sx={styles.crawlContainer(theme)}>
                <Typography sx={styles.crawlTitle}>
                  Episode {ROMAN_NUMS[film.episode_id]}
                </Typography>
                <Typography sx={styles.crawlTitleEpisode(theme)}>
                  {film.title}
                </Typography>
                <Typography sx={styles.crawlBody(theme)}>
                  {film.opening_crawl}
                </Typography>
              </Stack>
            </Paper>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default FilmDetails;
