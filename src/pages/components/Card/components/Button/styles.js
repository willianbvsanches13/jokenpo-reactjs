import styled from 'styled-components';

const Container = styled.div`
  width: 120px;
  height: 120px;
  background: url(${({ source }) => source}) no-repeat center;
  border: 2px solid #333;
  border-radius: 20px;
  margin: 15px;
`;

export default Container;
