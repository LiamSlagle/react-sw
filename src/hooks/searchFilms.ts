import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Film, mergeFilms } from 'state/films';

const PATH = 'https://swapi.dev/api/films/?search=';

interface SearchFilmsParams {
  query: string;
}

interface SearchFilmsResult {
  count: number;
  results: Film[];
}

export class SearchFilmsError extends Error {}

type SearchFilmsHook = () => [
  (params: SearchFilmsParams) => Promise<SearchFilmsResult>,
  boolean,
];

const useSearchFilms: SearchFilmsHook = () => {
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();

  const searchFilms = useCallback(
    async (params: SearchFilmsParams) => {
      setError(false);

      const response = await fetch(PATH + params.query, { method: 'GET' });

      if (!response.ok) {
        setError(true);
        return Promise.reject(new SearchFilmsError());
      }

      const result = (await response.json()) as SearchFilmsResult;
      dispatch(mergeFilms(result.results));

      return result;
    },
    [dispatch],
  );

  return [searchFilms, error];
};

export default useSearchFilms;
