import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import randomColor from "randomcolor";
import Image from "./components/Image/Image";
import Heading from "./components/Heading/Heading";

function App() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
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
      <Heading text={topText} />
      <Heading text={bottomText} />
      <button onClick={handleClick}>Change color</button>
    </>
  );
}

export default App;
