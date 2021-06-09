import React from "react";
import styled from "styled-components";

const ParagraphWrapper = styled.div`
  background-color: blue;
  width: fit-content;
  cursor: move;
`;

function Paragraph({ text, size }) {
  const optionalStyles = {
    fontSize: `${size}px`,
  };
  return (
    <ParagraphWrapper>
      <h1 style={optionalStyles}>{text}</h1>
    </ParagraphWrapper>
  );
}

export default Paragraph;
