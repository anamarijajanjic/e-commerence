import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  width: 100vw;
  background-color: #e3e0cc;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Announcement = () => {
  return <Container>SUMMER SALE!</Container>;
};

export default Announcement;
