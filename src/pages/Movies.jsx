import { NavLink } from "react-router-dom";

const Movies = () => {
  return (
    <main>
      <h3>Additional information</h3>
      <ul>
        <li>
           <NavLink to="/cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>  
        </li>
      </ul>  
    </main>
  );
};

export default Movies;