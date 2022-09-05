import React from "react";
import styled from "styled-components";
import Navbar from "../komponente/Navbar";
import Announcement from "../komponente/Announcement";
import Footer from "../komponente/Footer";
import { mobile } from "../responsive";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 150;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid #9fa9a3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid #9fa9a3;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #9fa9a3;
  }
`;
const WarningText = styled.div`
  margin-top: 30px;
  font-weight: 700;
`;
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [warning, setWarning] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const res = await publicRequest.get("/products/find/" + id);
      setProduct(JSON.parse(JSON.stringify(res.data)));
      console.log(product);
      setColor((tr) => {
        return [...tr, ...res.data.color];
      });
      setSize((tr) => {
        return [...tr, ...res.data.size];
      });
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    console.log(product);
    if (color.length === 1 && size.length === 1) {
      setWarning("Added to the cart!");
      dispatch(addProduct({ ...product, quantity, color, size }));
    } else {
      setWarning("Choose color and size!");
    }
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img}></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc> {product.desc}</Desc>
          <Price>{product.price}$</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>color</FilterTitle>
              {color.map((c) => {
                return (
                  <FilterColor
                    color={c}
                    key={c}
                    onClick={() => setColor([c])}
                  />
                );
              })}
            </Filter>
            <Filter>
              <FilterTitle>size</FilterTitle>
              <FilterSize onChange={(e) => setSize([e.target.value])}>
                {size.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <AiOutlineMinus onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <AiOutlinePlus onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
          <WarningText>{warning}</WarningText>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
