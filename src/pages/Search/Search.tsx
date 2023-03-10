import React from 'react';
import {
  Container,
  Grid,
  Stack,
  Box,
  TextField,
  useTheme,
} from '@mui/material';

import Logo from 'components/Logo';
import SearchButton from 'components/SearchButton';
import styles from './styles';

const Search: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl" sx={styles.pageContainer(theme)}>
        <Logo />
        <Grid container>
          <Grid item xs={12} sm={12} md={5} sx={styles.searchContainer(theme)}>
            <Box>
              <p style={styles.welcomeText(theme)}>Welcome</p>
              <p style={styles.helpText(theme)}>
                Search for a Star Wars film by title below
              </p>
            </Box>
            <Stack spacing={1} direction="row">
              <TextField
                id="movie-search"
                label="Search for a Star Wars film"
                variant="outlined"
                color="primary"
                sx={styles.searchBar(theme)}
              />
              <SearchButton />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={7} sx={styles.resultsContainer(theme)}>
            <p style={styles.resultsPendingText(theme)}>
              Results will appear here
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Search;
