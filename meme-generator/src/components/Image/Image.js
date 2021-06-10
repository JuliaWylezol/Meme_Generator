import React from "react";

const imageStyle = {
  maxWidth: "500px",
  maxHeight: "460px",
};

function Image({ url }) {
  return <img alt={"memeImg"} src={url} style={imageStyle}></img>;
}

export default Image;
