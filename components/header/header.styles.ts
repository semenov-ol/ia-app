import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 70px;

  background-color: #91b4ff;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  a {
    display: block;
    background: #1a81db;
    padding: 15px;
    height: 50px;
    color: white;
    border-radius: 8px;
    :hover {
      background: #1e96ff;
      text-transform: none;
    }
    :active {
      background: #64a8ff;
    }
  }
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
