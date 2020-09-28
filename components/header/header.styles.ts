import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  background-color: #95d7ff;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

const Styled = {
  HeaderContainer,
  ButtonContainer,
  NavContainer,
};

export default Styled;
