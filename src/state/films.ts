import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Film {
  episodeId: number;
  title: string;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: Date;
}

const filmsAdapter = createEntityAdapter<Film>({
  selectId: (film) => film.episodeId,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const filmsSlice = createSlice({
  name: 'films',
  initialState: filmsAdapter.getInitialState(),
  reducers: {
    mergeFilms: filmsAdapter.addMany,
    resetFilms: filmsAdapter.removeAll,
  },
});

export const { selectAll: selectFilms } = filmsAdapter.getSelectors<RootState>(
  (state) => state.films,
);

const { actions, reducer } = filmsSlice;
export const { mergeFilms, resetFilms } = actions;
export default reducer;
