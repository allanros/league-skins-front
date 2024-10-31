import styled from "styled-components";

export const DashboardContainer = styled.main`
  padding: 2rem;

  a {
    color: ${props => props.theme['green-500']};
    font-weight: bold;
    text-decoration: none;
  }
`