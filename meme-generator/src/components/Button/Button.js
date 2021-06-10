import React from "react";
import styled, { css } from "styled-components";

const StyledBtn = styled.button`
  background-color: #331b3f;
  color: #acc7b4;
  font-size: 22px;
  text-align: center;
  border: none;
  width: 200px;
  height: 100px;
  border-radius: 5px;
  position: absolute;
  bottom: 5px;
  left: 40%;
`;

function Button({ btnText, handleClick }) {
  return <StyledBtn onClick={handleClick}>{btnText}</StyledBtn>;
}

export default Button;
