import { Routes, Route} from 'react-router-dom';
import { Container, Header, Link} from "./App.styled";
import Home from 'pages/Home';
import MoviesDetails from './pages/MoviesDetails';
import MoviesSearch from './pages/MoviesSearch';
import  Cast  from './components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import NotFound from 'pages/PageNotFound';


export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesSearch />} />
        <Route path="/movies/:id" element={<MoviesDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Container>
  );
};
