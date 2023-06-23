import styled from '@emotion/styled';
import { Link} from "react-router-dom";


export const InformationBlock = styled.div`
  padding: 20px 0; 
  font-weight: 600;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16);
`;

export const LinkBox = styled.ul`
 margin-left: 20px;   
`;

export const LinkItem = styled.li`
  margin-bottom: 10px;  
  // padding-left: 10px; 
`;

export const LinkWrap = styled(Link)`
 
color: teal;
`;