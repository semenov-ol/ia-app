import styled from 'styled-components';
import Text from 'ustudio-ui/components/Text';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Button from 'ustudio-ui/components/Button';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 20%;
  height: 30%;
  margin: 8% auto 0;
`;

const Title = styled(Text)`
  margin-bottom: 20px;
`;

const Input = styled(TextInput)`
  margin: 5px 0;
`;

const SignInButton = styled(Button)`
  width: 100%;
  margin-top: 10px;

  text-transform: uppercase;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ff973c;
`;

const ForgotLink = styled.a`
  font-size: 12px;
  cursor: pointer;
`;

const Styled = {
  FormContainer,
  ErrorContainer,
  Input,
  SignInButton,
  Title,
  ForgotLink,
};

export default Styled;
