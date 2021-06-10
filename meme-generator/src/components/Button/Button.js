import React from "react";
import styled, { css } from "styled-components";

const StyledBtn = styled.button`
  background-color: #331b3f;
  color: #acc7b4;
  font-size: 18px;
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 10px;

  ${({ gen }) =>
    gen &&
    css`
      font-size: 22px;
      width: 200px;
      height: 100px;
      position: absolute;
      bottom: 5px;
      left: 40%;
    `}
`;

function Button({ btnText, handleClick, gen }) {
  return (
    <StyledBtn gen={gen} onClick={handleClick}>
      {btnText}
    </StyledBtn>
  );
}

export default Button;
