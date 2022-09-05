import React from "react";
import styled from "styled-components";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
//pomocu props pozicioniramo element ovisno o tome je li element lijeva strelica ili desna

// Z Index ( z-index ) is a CSS property that defines the order of overlapping HTML elements.
// Elements with a higher index will be placed on top of elements with a lower index
const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: #d3e3e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
//The translate() CSS function repositions an element in the horizontal and/or vertical directions

// all specified for the transition-property portion of the shorthand.
// You may also comma separate value sets to do different transitions on different properties
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 30px;
  letter-spacing: 2px;
  padding: 20px 0px;
`;
const Par = styled.div`
  font-size: 18px;
  letter-spacing: 3px;
  padding: 20px 0px;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleCLick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => handleCLick("left")}
        style={{ color: "7BC51", fontSize: 14 }}
      >
        <BiLeftArrow />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Par>{item.par}</Par>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => handleCLick("right")}
        style={{ color: "7BC51", fontSize: 14 }}
      >
        <BiRightArrow />
      </Arrow>
    </Container>
  );
};

export default Slider;
