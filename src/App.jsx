import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from 'pages/Home';
// import MoviesDetails from './pages/MoviesDetails';
// import MoviesSearch from './pages/MoviesSearch';
// import  Cast  from './components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
import NotFound from 'pages/PageNotFound';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('./pages/Home'));
const MoviesDetails = lazy(() => import('./pages/MoviesDetails'));
const MoviesSearch = lazy(() => import('./pages/MoviesSearch'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<MoviesSearch />} />
        <Route path="/movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
