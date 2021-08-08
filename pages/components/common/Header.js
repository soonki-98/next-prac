import React from "react";
import { DivBlock, Li, Nav } from "../../../styles/Header";

function Header({ scrollLocation }) {
  return (
    <DivBlock scrollLocation={scrollLocation}>
      <Nav>
        <Li>서비스 소개</Li>
        <Li>동아리 목록</Li>
        <Li>동아리 홍보</Li>
      </Nav>
    </DivBlock>
  );
}

export default Header;
