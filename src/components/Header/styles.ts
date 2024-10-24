import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  color: ${props => props.theme.white};
  background-color: ${props => props.theme['gray-300']};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  a {
    text-decoration: none;
  }
`
const Headerdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;

  color: ${props => props.theme['gray-100']};
`

export const HeaderLogo = styled(Headerdiv)`
  font-size: 1.5rem;
  font-weight: bold;

  img {
    width: 50px;
    border-radius: 50%;
  }
`

export const HeaderUser = styled(Headerdiv)`
  font-size: 1rem;

  img {
    width: 40px;
    border-radius: 3px;
  }
`

export const UserLoginButton = styled.button`
  background-color: ${props => props.theme['gray-200']};
  color: ${props => props.theme['gray-800']};
  font-size: 1rem;
  font-weight: bold;

  padding: 0.5rem 1rem;
  border-radius: 13px;

  margin-right: 2rem;
  border: none;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme['gray-800']};
    color: ${props => props.theme.white};
  }
`
