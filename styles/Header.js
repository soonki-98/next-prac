import styled from "styled-components";

export const DivBlock = styled.div`
  position: fixed;
  z-index: 9999;
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
