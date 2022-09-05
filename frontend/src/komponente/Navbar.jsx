import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { useState } from "react";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
`;
const SearchContainer = styled.div`
  border: 0.8px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px 12px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "10px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [userInput, setUserInput] = useState("");
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  const logoutSubmit = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input
              type="text"
              id="userInput"
              name="userInput"
              onChange={handleChange}
              value={userInput}
            />
            <Link to={`/products/` + userInput}>
              <BsSearch style={{ color: "gray", fontSize: 12 }} />
            </Link>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-TRGOVINA</Logo>
        </Center>
        <Right>
          {!user && (
            <Link to="/register">
              <MenuItem>REGISTER</MenuItem>
            </Link>
          )}
          {!user && (
            <Link to="/login">
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          )}
          {user && <MenuItem onClick={logoutSubmit}>LOG OUT</MenuItem>}
          <Link to="/cart">
            <MenuItem>
              <AiOutlineShopping />
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
