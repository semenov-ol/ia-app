import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto;
  margin-top: 10%;

  width: 20%;
  height: 30%;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ff973c;
`;

const Styled = {
  FormContainer,
  ErrorContainer,
};

export default Styled;
