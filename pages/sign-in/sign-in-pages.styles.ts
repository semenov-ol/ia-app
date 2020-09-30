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

const Styled = {
  FormContainer,
  Input,
  SignInButton,
  Title,
};

export default Styled;
