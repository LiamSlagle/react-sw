import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid,
  Stack,
  Box,
  Typography,
  TextField,
  CircularProgress,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { selectFilms } from 'state/films';
import useSearchFilms from 'hooks/searchFilms';

import Logo from 'components/Logo';
import Button from 'components/Button';
import Results from './Results';
import styles from './styles';

const Search: React.FC = () => {
  const theme = useTheme();

  const films = useSelector(selectFilms);

  const [searchValue, setSearchValue] = useState<string>('');
  const [searchFilms, searchFilmsLoading] = useSearchFilms();

  const onSearchValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setSearchValue(e.target.value);

  const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Simple solution to create 'form submission' effect for the user
    // without bringing in form libraries or dealing with generically typed
    // React event handlers
    if (e.key === 'Enter') handleSearch();
  };

  const handleSearch = useCallback(async () => {
    await searchFilms({ query: searchValue });
  }, [searchValue]);

  return (
    <>
      <Container maxWidth="xl" sx={styles.pageContainer(theme)}>
        <Logo />
        <Grid container>
          <Grid item xs={12} sm={12} md={5} sx={styles.searchContainer(theme)}>
            <Box>
              <Typography sx={styles.welcomeText(theme)}>Welcome</Typography>
              <Typography sx={styles.helpText(theme)}>
                Search for a Star Wars film by title below
              </Typography>
            </Box>
            <Stack spacing={1} direction="row">
              <TextField
                id="movie-search"
                label="Search for a Star Wars film"
                variant="outlined"
                color="primary"
                value={searchValue}
                onChange={onSearchValueChange}
                onKeyPress={(e) => onKeyPress(e)}
                sx={styles.searchBar(theme)}
              />
              <Button sx={styles.searchButton(theme)} onClick={handleSearch}>
                <SearchIcon sx={styles.searchIcon} />
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={7} sx={styles.resultsContainer(theme)}>
            {!searchFilmsLoading && films.length < 1 ? (
              <Typography>Results will appear here</Typography>
            ) : searchFilmsLoading && films.length < 1 ? (
              <CircularProgress />
            ) : (
              <Results films={films} />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Search;
