import React from "react";
import styled, { css } from "styled-components";

const StyledBtn = styled.button`
  width: 100%;
  margin: 15px auto;
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
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 250px;
  }
  @media (max-width: 570px) {
    width: 180px;
  }

  ${({ adjust }) =>
    adjust &&
    css`
      margin-right: 5px;
      @media (max-width: 1400px) {
        /* margin-left: 25px; */
        /* margin-right: 25px; */
      }
    `}

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: 30px;
      padding: 5px;
      width: 70px;
      margin-top: 0px;
      margin-bottom: 30px;
      @media (max-width: 1000px) {
        width: 70px;
      }
      @media (max-width: 400px) {
        margin-left: 15px;
        margin-right: 15px;
      }
    `}
`;

function Button({ btnText, handleClick, adjust, fontSize }) {
  return (
    <StyledBtn adjust={adjust} fontSize={fontSize} onClick={handleClick}>
      {btnText}
    </StyledBtn>
  );
}

export default Button;
