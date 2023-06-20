
import { Link, Outlet  } from "react-router-dom";
import { Container} from "../App.styled";


const MoviesDatails = () => {
  return (
    <Container>
      <button type="button"> Go back</button>
      <div>
        <img src="https://via.placeholder.com/960x240" alt="" />
      </div>
      <div>
        <h2>film name</h2>
        <p>User Score:</p>
        <h3>Overview</h3>
        <p>text overview</p>
        <h4>Genres</h4>
        <p>film geners</p>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
         <Outlet />
      </div>
      
    </Container>
  );
};

export default MoviesDatails;