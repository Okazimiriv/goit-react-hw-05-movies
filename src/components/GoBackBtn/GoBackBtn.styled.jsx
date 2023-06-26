import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const GoBackButton = styled(Link)`
 display: inline-flex;
  align-items: center;  
  padding: 5px 10px;  

  text-decoration: none;
  letter-spacing: 0.06em;
  border: 4px solid teal;
  border-radius: 50px;  

  transition: border 200ms;  

  &:hover,
  &:focus {    
    border: 4px solid lightcoral;    
  }
`;