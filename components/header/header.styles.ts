import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 60px;

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
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin-right: 18px;
  width: 100%;
  height: 40px;
`;

const Styled = {
  HeaderContainer,
  ButtonContainer,
  NavContainer,
};

export default Styled;
