import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import randomColor from "randomcolor";
import Image from "./components/Image/Image";

// const InputWrapper = styled.div`
//   background-color: blue;
// `;

function App() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [color, setColor] = useState("black");
  const [memes, setMemes] = useState([]);
  const [url, setUrl] = useState("");
  const theme = {
    color: color,
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setMemes(data.data.memes);
      });
  }, []);

  const handleClick = () => {
    const newUrl = memes[Math.floor(Math.random() * memes.length)].url;
    setUrl(newUrl);
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => setTopText(e.target.value)}
        value={topText}
        placeholder={"Top Text"}
        name={"topText"}
      />
      <input
        type="text"
        onChange={(e) => setBottomText(e.target.value)}
        value={bottomText}
        placeholder={"Bottom Text"}
        name={"bottomText"}
      />
      <Image url={url} />
      <h1 style={theme}>
        Top text will be: {topText} and bottom text: {bottomText}
      </h1>
      <button onClick={handleClick}>Change color</button>
    </>
  );
}

export default App;
