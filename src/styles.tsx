import styled from 'styled-components';

export const Root = styled.div`
  width: 98vw;
  min-height: 98vh;
  display: flex;
  padding: 1em;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;
