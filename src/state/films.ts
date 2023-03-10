import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Film {
  episode_id: number;
  title: string;
  opening_crawl: number;
  director: string;
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
}

const filmsAdapter = createEntityAdapter<Film>({
  selectId: (film) => film.episode_id,
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

// Destructure selectAll so we can import directly later
export const { selectAll: selectFilms } = filmsAdapter.getSelectors<RootState>(
  (state) => state.films,
);

const { actions, reducer } = filmsSlice;
export const { mergeFilms, resetFilms } = actions;
export default reducer;
