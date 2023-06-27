import styled from '@emotion/styled';

export const MovieCardWrap = styled.div`
  display: flex; 
  padding-bottom: 20px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16);
`;

export const MovieImage = styled.img`
   display: block;
   width: 300px;
   height: 100%
  object-fit: cover;
  
`;

export const MovieDescription = styled.div`
   margin-left: 20px;
`;

export const GenresBox = styled.ul`
 margin-left: 20px;   
`;