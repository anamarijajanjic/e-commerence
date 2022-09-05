import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #e3e0cc;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Text = styled.div`
  margin: 5px 10px;
  font-size: 14px;
`;
const Footer = () => {
  return (
    <Container>
      <Text>E-TRGOVINA</Text>
    </Container>
  );
};

export default Footer;
