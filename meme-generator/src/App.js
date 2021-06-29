import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import randomColor from "randomcolor";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import * as svg from "save-svg-as-png";

const Heading = styled.h1`
  color: #f5d042;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  font-size: 50px;
  letter-spacing: 3px;
  font-family: "Luckiest Guy";
  text-shadow: 10px 10px 5px black;
`;

const CreateMemeWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const MemeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputWrapper = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
`;

const Line = styled.div`
  height: 550px;
  width: 4px;
  background-color: #344289;
  border-radius: 5px;
`;

function App() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [topTextSize, setTopTextSize] = useState(22);
  const [bottomTextSize, setBottomTextSize] = useState(22);
  const [color, setColor] = useState("white");
  const [isFontBlack, setIsFontBlack] = useState(false);
  const [fontWeight, setFontWeight] = useState(400);
  const [isFontBold, setIsFontBold] = useState(false);
  const [memes, setMemes] = useState([]);
  const [url, setUrl] = useState(null);
  const [topY, setTopY] = useState("10%");
  const [topX, setTopX] = useState("50%");
  const [bottomX, setBottomX] = useState("50%");
  const [bottomY, setBottomY] = useState("80%");
  const [saveName, setSaveName] = useState("");

  const imgRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setMemes(data.data.memes);
      });
  }, []);

  const genereteMeme = () => {
    const index = Math.floor(Math.random() * memes.length);
    const newUrl = memes[index].url;
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

  const changeFontColor = () => {
    if (!isFontBlack) {
      setColor("black");
      setIsFontBlack(true);
    } else {
      setColor("white");
      setIsFontBlack(false);
    }
  };

  const changeFontSize = (isIncreasing, type) => {
    if (type === "top") {
      setTopTextSize(isIncreasing ? topTextSize + 2 : topTextSize - 2);
    } else {
      setBottomTextSize(isIncreasing ? bottomTextSize + 2 : bottomTextSize - 2);
    }
  };

  const mouseDownEvent = (e, type) => {
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    function mouseMove(e) {
      let rect = imgRef.current.getBoundingClientRect();
      const xOffset = e.clientX - rect.left;
      const yOffset = e.clientY - rect.top;

      if (type === "top") {
        setTopX(`${xOffset}px`);
        setTopY(`${yOffset}px`);
      } else if (type === "bottom") {
        setBottomX(`${xOffset}px`);
        setBottomY(`${yOffset}px`);
      }
    }
    function mouseUp(e) {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    }
  };

  const saveMeme = () => {
    saveName.length > 0
      ? svg.saveSvgAsPng(document.getElementById("svg_ref"), `${saveName}.png`)
      : svg.saveSvgAsPng(document.getElementById("svg_ref"), "meme.png");
  };

  const resetInputs = () => {
    setTopText("");
    setBottomText("");
    setSaveName("");
  };

  return (
    <>
      <Heading> MEME GENERATOR</Heading>
      <CreateMemeWrapper>
        <MemeWrapper>
          <svg
            width="400"
            height="400"
            ref={svgRef}
            id="svg_ref"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <image ref={imgRef} xlinkHref={url} height="400px" width="400px" />
            <text
              style={{
                fill: color,
                fontWeight: fontWeight,
                fontSize: topTextSize,
                cursor: "pointer",
              }}
              x={topX}
              y={topY}
              onMouseDown={(e) => mouseDownEvent(e, "top")}
            >
              {topText}
            </text>
            <text
              style={{
                fill: color,
                fontWeight: fontWeight,
                fontSize: bottomTextSize,
                cursor: "pointer",
              }}
              x={bottomX}
              y={bottomY}
              onMouseDown={(e) => mouseDownEvent(e, "bottom")}
            >
              {bottomText}
            </text>
          </svg>
          <Button handleClick={saveMeme} btnText={"Download meme"}></Button>
        </MemeWrapper>
        <Line />
        <ButtonsWrapper>
          <InputWrapper>
            <Input
              type={"text"}
              handleChange={(e) => setTopText(e.target.value)}
              value={topText}
              placeholder={"Top Text"}
              name={"Top Text"}
            />
            <Button
              btnText={"+"}
              handleClick={() => changeFontSize(true, "top")}
              fontSize
            />
            <Button
              btnText={"-"}
              handleClick={() => changeFontSize(false, "top")}
              fontSize
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
            <Button
              btnText={"+"}
              handleClick={() => changeFontSize(true, "bottom")}
              fontSize
            />
            <Button
              btnText={"-"}
              handleClick={() => changeFontSize(false, "bottom")}
              fontSize
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type={"text"}
              handleChange={(e) => setSaveName(e.target.value)}
              value={saveName}
              placeholder={"Save meme as..."}
              name={"saveMeme"}
            />
          </InputWrapper>
          <Button handleClick={resetInputs} btnText={"Reset"} />
        </ButtonsWrapper>

        <ButtonsWrapper>
          <Button handleClick={genereteMeme} btnText={"Generate random meme"} />
          <Button
            btnText={"Random font color"}
            handleClick={() => setColor(randomColor())}
          />
          <Button
            btnText={`Change font to ${isFontBold ? "thick" : "bold"}`}
            handleClick={() => changeFontWeight()}
          />
          <Button
            btnText={`Change font to ${isFontBlack ? "white" : "black"}`}
            handleClick={() => changeFontColor()}
          />
        </ButtonsWrapper>
      </CreateMemeWrapper>
    </>
  );
}

export default App;
