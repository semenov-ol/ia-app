import styled from 'styled-components';
import Text from 'ustudio-ui/components/Text';
import TextInput from 'ustudio-ui/components/Input/TextInput';
import Button from 'ustudio-ui/components/Button';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 20%;
  height: 40%;
  margin: 8% auto 0;
`;

const Title = styled(Text)`
  margin-bottom: 20px;
`;

const Input = styled(TextInput)`
  margin: 5px 0;

  &:nth-of-type(2) {
    margin-bottom: 8px;
  }
`;

const SignUpButton = styled(Button)`
  margin-top: 20px;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ff973c;
`;

const Styled = {
  FormContainer,
  ErrorContainer,
  Title,
  Input,
  SignUpButton,
};

export default Styled;
