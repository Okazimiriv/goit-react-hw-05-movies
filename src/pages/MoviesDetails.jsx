
import { Outlet  } from "react-router-dom";
import { Container} from "../App.styled";
import MovieCard from "components/MovieCard/MovieCard";
import { InformationBlock, LinkItem, LinkWrap, LinkBox } from "components/AdditionalInfo/AdditionalInfo.styled";

const MoviesDatails = () => {
  return (
    <Container>
      <button type="button"> Go back</button>
      {/* <div>
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
      <div> */}
      <MovieCard />
      <InformationBlock>
        <p>Additional information</p>
        <LinkBox>
          <LinkItem>
            <LinkWrap to="cast">Cast</LinkWrap>
          </LinkItem>
          <LinkItem>
            <LinkWrap to="reviews">Reviews</LinkWrap>
          </LinkItem>
        </LinkBox>
      </InformationBlock>
         <Outlet />
      {/* </div> */}
      
    </Container>
  );
};

export default MoviesDatails;