import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Tittle = styled.h1`
  color: lightcoral;
`;

export const BoxMove = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkWrap = styled(Link)`  
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 20px;

  transition: color 250ms;

  &:hover {
    text-decoration: underline;
    color: teal;
    }
  }
 `;

export const MoveName = styled.h3`
  margin-top: 8px;
  margin-bottom: 0;
  color: black;

   &:hover {
      color: teal;
    }  
  }
`;