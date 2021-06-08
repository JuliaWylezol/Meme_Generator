import React from "react";
import styled from "styled-components";

const HeadingWrapper = styled.div`
  background-color: blue;
  width: fit-content;
  cursor: move;
`;

function Heading({ text }) {
  return (
    <HeadingWrapper>
      <h1>{text}</h1>
    </HeadingWrapper>
  );
}

export default Heading;
