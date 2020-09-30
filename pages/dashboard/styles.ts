import styled from 'styled-components';
import { Button } from 'ustudio-ui';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 60%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const LogOutButton = styled(Button)`
  width: 80px;
  margin: 20px;
`;

const Styled = {
  Container,
  LogOutButton,
  ButtonContainer,
};

export default Styled;
