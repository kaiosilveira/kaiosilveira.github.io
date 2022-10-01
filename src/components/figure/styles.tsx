import styled from 'styled-components';

export const Image = styled.img`
  border-radius: 8px;
`;

export const FigCaption = styled.figcaption`
  font-weight: bold;
`;

export const FigureWrapper = styled.figure`
  margin: 0;
  padding: 1em;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
