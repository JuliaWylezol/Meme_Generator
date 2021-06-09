import React from "react";
import styled from "styled-components";

const HeadingWrapper = styled.div`
  background-color: blue;
  width: fit-content;
  cursor: move;
`;

function Heading({ text, size }) {
  const optionalStyles = {
    fontSize: `${size}px`,
  };
  return (
    <HeadingWrapper>
      <h1 style={optionalStyles}>{text}</h1>
    </HeadingWrapper>
  );
}

export default Heading;
