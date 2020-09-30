import styled from 'styled-components';
import { Button, TextInput } from 'ustudio-ui';
import Text from 'ustudio-ui/components/Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 20%;
  margin: auto;
  margin-top: 5%;
`;

const Input = styled(TextInput)``;

const ResetButton = styled(Button)`
  margin-top: 20px;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ff8a24;
`;

const ConfirmMessage = styled(Text)`
  color: #43acf3;
`;

const Styled = {
  Container,
  Input,
  ResetButton,
  ErrorContainer,
  ConfirmMessage,
};

export default Styled;
