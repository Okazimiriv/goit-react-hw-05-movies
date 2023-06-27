import styled from '@emotion/styled';

export const CastCardWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // align-items: center;

  padding: 0;
  margin: 0;
  gap: 10px;  
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 9 * 10px) / 10);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  list-style: none;
  border-radius: 0px 0px 4px 4px;
    `;

export const Content = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CastImg = styled.img`
  height: 100%;
  
`;

export const NameActor = styled.p`
  margin-bottom: 5px;
  text-align: center;
  font-weight: 600;
  line-height: 1.2;
`;

export const CharacterText = styled.p`
  margin-bottom: 5px;
  text-align: center;
`;
