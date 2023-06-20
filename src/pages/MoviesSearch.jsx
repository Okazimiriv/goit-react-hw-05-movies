// import { NavLink } from "react-router-dom";
import { Container} from "../App.styled";

const MoviesSearch = () => {
  return (
     <Container>
         <form >
        <input
          // value={searchQuery}
          // onChange={handleChange}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form>
    </Container>
  );
};

export default MoviesSearch;