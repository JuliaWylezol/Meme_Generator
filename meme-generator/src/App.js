import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import randomColor from "randomcolor";
import Image from "./components/Image/Image";
import Paragraph from "./components/Paragraph/Paragraph";
import Input from "./components/Input/Input";

const Heading = styled.h1`
  background-color: pink;
`;

function App() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [topTextSize, setTopTextSize] = useState(22);
  const [bottomTextSize, setBottomTextSize] = useState(22);
  const [color, setColor] = useState("black");
  const [memes, setMemes] = useState([]);
  const [url, setUrl] = useState("");

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
      <Heading> Meme Generator</Heading>
      <Input
        type={"text"}
        handleChange={(e) => setTopText(e.target.value)}
        value={topText}
        placeholder={"Top Text"}
        name={"Top Text"}
      />
      <Input
        type={"number"}
        handleChange={(e) => setTopTextSize(e.target.value)}
        value={topTextSize}
        placeholder={"Top Text Size"}
        name={"topTextSize"}
      />
      <Input
        type={"text"}
        handleChange={(e) => setBottomText(e.target.value)}
        value={bottomText}
        placeholder={"Bottom Text"}
        name={"bottomText"}
      />
      <Input
        type={"number"}
        handleChange={(e) => setBottomTextSize(e.target.value)}
        value={bottomTextSize}
        placeholder={"Bottom Text Size"}
        name={"bottomTextSize"}
      />
      <Image url={url} />
      <Paragraph text={topText} size={topTextSize} />
      <Paragraph text={bottomText} size={bottomTextSize} />
      <button onClick={handleClick}>Generate random meme</button>
    </>
  );
}

export default App;
