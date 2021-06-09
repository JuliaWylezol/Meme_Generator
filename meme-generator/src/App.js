import React, { useState, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";
// import randomColor from "randomcolor";
import Image from "./components/Image/Image";
import Heading from "./components/Heading/Heading";
import Input from "./components/Input/Input";

export const TextContext = React.createContext();

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
    // handleClick();
  }, []);

  const handleClick = () => {
    const newUrl = memes[Math.floor(Math.random() * memes.length)].url;
    setUrl(newUrl);
  };

  const handleChange = (name, event) => {
    if (name === "Top Text") {
      setTopText(event.target.value);
    } else if (name === "Bottom Text") {
      setBottomText(event.target.value);
    } else if (name === "Top Text Size") {
      setTopTextSize(event.target.value);
    } else setBottomTextSize(event.target.value);
  };

  const textsInfo = {
    topText: topText,
    bottomText: bottomText,
    topTextSize: topTextSize,
    bottomTextSize: bottomTextSize,
  };
  return (
    <>
      <ThemeContext.Provider value={textsInfo}>
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
        <Heading text={topText} size={topTextSize} />
        <Heading text={bottomText} size={bottomTextSize} />
        <button onClick={handleClick}>Change color</button>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
