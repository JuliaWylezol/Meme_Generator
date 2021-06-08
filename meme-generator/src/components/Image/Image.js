import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 500px;
  height: 500px;
`;

function Image({ url }) {
  const imageStyle = {
    maxWidth: "600px",
    maxHeight: "500px",
  };
  return (
    <ImageWrapper>
      <img alt={"memeImg"} src={url} style={imageStyle}></img>;
    </ImageWrapper>
  );
}

export default Image;
