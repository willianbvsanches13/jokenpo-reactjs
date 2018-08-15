import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 100px;
  }
`;

export const Content = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  list-style: none;
  margin-bottom: 150px;
`;
