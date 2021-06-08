import React from "react";

const imageStyle = {
  maxWidth: "600px",
  maxHeight: "500px",
};

function Image({ url }) {
  return <img alt={"memeImg"} src={url} style={imageStyle}></img>;
}

export default Image;
