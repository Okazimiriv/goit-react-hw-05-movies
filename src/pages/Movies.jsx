import { NavLink } from "react-router-dom";

export const Movies = () => {
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