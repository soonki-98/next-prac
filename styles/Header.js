import styled from "styled-components";

export const DivBlock = styled.div`
  width: 100%;
  height: 102.4px;
  background-color: midnightblue;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Li = styled.li`
  list-style: none;
  color: white;
  margin: 30px;
  &:hover {
    color: yellow;
    cursor: pointer;
  }
`;
