import { useRef } from "react";
import { Outlet, useParams, useLocation  } from "react-router-dom";
import { Container } from "../App.styled";

import MovieCard from "components/MovieCard/MovieCard";
import { InformationBlock, LinkItem, LinkWrap, LinkBox } from "components/AdditionalInfo/AdditionalInfo.styled";
// import { GoBackBtn } from "components/GoBackBtn/GoBackBtn";
import { GoBackButton } from "components/GoBackBtn/GoBackBtn.styled";


const MoviesDatails = () => {
  const { id } = useParams();
  const location = useLocation();
  // const goBackLocation = location.state?.from ?? '/movies';
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  
  return (
    <Container>
      <GoBackButton to={backLinkLocationRef.current}>Go back</GoBackButton>
      
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
            <LinkWrap to="cast" state={{ from: location.state?.from ?? '/movies' }}>Cast</LinkWrap>
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