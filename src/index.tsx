import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import store from './state/store';
import theme from './theme/theme';
import Search from './pages/Search';
import FilmDetails from './pages/FilmDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Search />,
  },
  {
    path: '/film-details/:filmId',
    element: <FilmDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
