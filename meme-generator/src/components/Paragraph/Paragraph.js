import React from "react";
import styled from "styled-components";

const ParagraphWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  cursor: move;
`;

function Paragraph({ text, size, color, fontWeight }) {
  const optionalStyles = {
    fontSize: `${size}px`,
    color: color,
    fontWeight: fontWeight,
  };
  return (
    <ParagraphWrapper>
      <p style={optionalStyles}>{text}</p>
    </ParagraphWrapper>
  );
}

export default Paragraph;
