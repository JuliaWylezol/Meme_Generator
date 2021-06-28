import React from "react";
import styled, { css } from "styled-components";

const StyledBtn = styled.button`
  width: 60%;
  margin: 10px;
  position: relative;
  background: #0a174e;
  border: 1px solid black;
  padding: 20px;
  font-size: 18px;
  color: #f5d042;
  box-shadow: 2px 2px 5px 5px black;
  font-family: "Luckiest Guy";
  text-shadow: 0px 3px 1px #212121;
  letter-spacing: 5px;
  text-transform: uppercase;
  left: 0;
  top: 0;

  ${({ generate }) =>
    generate &&
    css`
      font-size: 22px;
      width: 200px;
      height: 100px;
      position: absolute;
      bottom: 5px;
      left: 40%;
    `}

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: 30px;
      padding: 5px;
      width: 70px;
      margin-top: 0px;
      margin-bottom: 30px;
    `}
`;

function Button({ btnText, handleClick, generate, fontSize }) {
  return (
    <StyledBtn generate={generate} fontSize={fontSize} onClick={handleClick}>
      {btnText}
    </StyledBtn>
  );
}

export default Button;
