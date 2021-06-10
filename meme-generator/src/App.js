import React, { useState, useEffect } from "react";
import styled from "styled-components";
import randomColor from "randomcolor";
import Image from "./components/Image/Image";
import Paragraph from "./components/Paragraph/Paragraph";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

const Heading = styled.h1`
  color: #331b3f;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;

const CreateMemeWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const InputWrapper = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
`;

function App() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [topTextSize, setTopTextSize] = useState(22);
  const [bottomTextSize, setBottomTextSize] = useState(22);
  const [color, setColor] = useState("black");
  const [fontWeight, setFontWeight] = useState(400);
  const [isFontBold, setIsFontBold] = useState(false);
  const [memes, setMemes] = useState([]);
  const [url, setUrl] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpjAPDGxAIt9kJ7RIYM9l0QdEDW783EV0e_7W5Wow0w5DBRZm6crKPqFcQw7FivxvpRc&usqp=CAU"
  );

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setMemes(data.data.memes);
      });
  }, []);

  const genereteMeme = () => {
    const newUrl = memes[Math.floor(Math.random() * memes.length)].url;
    setUrl(newUrl);
  };

  const changeFontWeight = () => {
    if (!isFontBold) {
      setFontWeight(600);
      setIsFontBold(true);
    } else {
      setFontWeight(400);
      setIsFontBold(false);
    }
  };

  return (
    <>
      <Heading> Meme Generator</Heading>
      <CreateMemeWrapper>
        <InputWrapper>
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
          <Button
            btnText={"Change Color"}
            handleClick={() => setColor(randomColor())}
          />
        </InputWrapper>
        <InputWrapper>
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
          <Button
            btnText={`Change font to ${isFontBold ? "thick" : "bold"}`}
            handleClick={() => changeFontWeight()}
          />
        </InputWrapper>
        <Image url={url} />
        <Paragraph
          text={topText}
          size={topTextSize}
          color={color}
          fontWeight={fontWeight}
        />
        <Paragraph
          text={bottomText}
          size={bottomTextSize}
          color={color}
          fontWeight={fontWeight}
        />
      </CreateMemeWrapper>
      <Button
        handleClick={genereteMeme}
        btnText={"Generate random meme"}
        gen
      ></Button>
    </>
  );
}

export default App;
