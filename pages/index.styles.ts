import styled from 'styled-components';

const Title = styled.h1`
  color: #96c2ff;
`;

const Container = styled.div`
  max-width: 80%;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Main = styled.div`
  color: #8585ff;
  font-size: 16px;
`;

const Styled = {
  Title,
  Container,
  ButtonContainer,
  Main,
};

export default Styled;
