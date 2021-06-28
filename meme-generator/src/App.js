import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import randomColor from "randomcolor";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

const Heading = styled.h1`
  color: #F5D042;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  font-size: 50px;
  letter-spacing: 3px;
  font-family: 'Luckiest Guy';
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
`
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
border-radius:5px;
`

function App() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [topTextSize, setTopTextSize] = useState(22);
  const [bottomTextSize, setBottomTextSize] = useState(22);
  const [color, setColor] = useState("black");
  const [isFontBlack, setIsFontBlack] = useState(true);
  const [fontWeight, setFontWeight] = useState(400);
  const [isFontBold, setIsFontBold] = useState(false);
  const [memes, setMemes] = useState([]);
  const [url, setUrl] = useState(null)
  const [topY, setTopY] = useState('10%') 
  const [topX, setTopX] = useState('50%') 
  const [bottomX, setBottomX] = useState('50%') 
  const [bottomY, setBottomY] = useState('80%') 
  const [saveName, setSaveName] = useState('')

  const canvas = useRef(null);
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
    const index = Math.floor(Math.random() * memes.length)
    const newUrl = memes[index].url;
    // const baseImage = new Image();
    // baseImage.src = newUrl;
    // baseImage.onload = function () {
    //   const ctx = canvas.current.getContext("2d");
    //   ctx.drawImage(baseImage, 0, 0, 400, 400);
    // };
    setUrl(newUrl)
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
    if(type === 'top') {
      setTopTextSize(isIncreasing? topTextSize +1 : topTextSize -1 )
    } else {
      setBottomTextSize(isIncreasing? bottomTextSize +1 : bottomTextSize -1 )
    }
  }

  // const mouseDownEvent = (e, type) => {
  //   window.addEventListener("mousemove", mouseMove);
  //   window.addEventListener("mouseup", mouseUp);

  //   let prevX = e.clientX;
  //   let prevY = e.clientY;
    
  //   function mouseMove(e) {
  //     let newX = prevX - e.clientX;
  //     let newY = prevY - e.clientY;
  //     console.log(e.clientX)
  //     const rect = topTextRef.current.getBoundingClientRect();
  //     topTextRef.current.style.left = rect.left - newX + "px";
  //     topTextRef.current.style.top = rect.top - newY + "px";

  //     prevX = e.clientX;
  //     prevY = e.clientY;
  //   }

  //   function mouseUp(e) {
  //     window.removeEventListener("mousemove", mouseMove);
  //     window.removeEventListener("mouseup", mouseUp);
  //   }
  // };

  // const getStateObj = (e, type) => {
  //   let rect = imgRef.current.getBoundingClientRect();
  //   const xOffset = e.clientX - rect.left;
  //   const yOffset = e.clientY - rect.top;
  //   let stateObj = {};
  //   if (type === "bottom") {
  //     stateObj = {
  //       bottomX: `${xOffset}px`,
  //       bottomY: `${yOffset}px`
  //     }
  //   } else if (type === "top") {
  //     stateObj = {
  //       topX: `${xOffset}px`,
  //       topY: `${yOffset}px`
  //     }
  //   }
  //   return stateObj;
  // }

  // const handleMouseDown = (e, type) => {
  //   const stateObj = getStateObj(e, type);
  //   window.addEventListener('mousemove', (event) => handleMouseMove(event, type));
  //   window.addEventListener("mouseup", handleMouseUp);
  //   if (type === "bottom") {
  //     // setIsBottomDragging(true)
  //       setBottomX(stateObj.bottomX)
  //       setBottomY(stateObj.bottomY)
  //   } else if (type === "top") {
  //     // setIsTopDragging(true)
  //     setTopX(stateObj.topX)
  //     setTopY(stateObj.topY)
  //   }
  // }

  // const handleMouseMove = (e, type) => {
  //   // if (isTopDragging || isBottomDragging) {
  //     let stateObj = {};
  //     if (type === "bottom" ) {
  //       stateObj = getStateObj(e, type);
  //       setBottomX(stateObj.bottomX)
  //       setBottomY(stateObj.bottomY)
  //     } else if (type === "top" ){
  //       stateObj = getStateObj(e, type);
  //       setTopX(stateObj.topX)
  //       setTopY(stateObj.topY)
  //     }
    
  // };

  // const handleMouseUp = (event) => {
  //   console.log('mouse up')
  //   window.removeEventListener('mousedown', handleMouseDown);
  //   window.removeEventListener('mousemove', handleMouseMove);
  //   window.removeEventListener('mouseup', handleMouseUp);
  //   // setIsTopDragging(false);
  //   // setIsBottomDragging(false);
  // }

  const mouseDownEvent = (e, type) => {
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    function mouseMove(e) {
      let rect = imgRef.current.getBoundingClientRect();
      const xOffset = e.clientX - rect.left;
      const yOffset = e.clientY - rect.top;
      
      if(type === 'top') {
        setTopX(`${xOffset}px`);
        setTopY(`${yOffset}px`);
      } else if(type=== 'bottom') {
        setBottomX(`${xOffset}px`);
        setBottomY(`${yOffset}px`);
      }
    }
    function mouseUp(e) {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    }
  };

  const convertSvgToImage = () => {
    const svg = svgRef.current;
    let svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "canvas");
    const svgSize = svg.getBoundingClientRect();
    canvas.width = svgSize.width;
    canvas.height = svgSize.height;
    const img = document.createElement("img");
    img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))));
    img.onload = function() {
      const ctx = canvas.getContext("2d")
      ctx.clearRect(0,0,400,400)
      ctx.drawImage(img, 0, 0,400,400)
      console.log(canvas)
      const canvasdata = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.download = "meme.png";
      a.href = canvasdata;
      document.body.appendChild(a);
      a.click();
    };
  }
  return (
    <>
      <Heading> MEME GENERATOR</Heading>
      <CreateMemeWrapper>
        <MemeWrapper>
        <svg width="400" height="400" ref={svgRef}
     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
	<image ref={imgRef} href={url} x="0" y="0" height="400px" width="400px"/>
  <text style={{fill:color, fontWeight:fontWeight, fontSize:topTextSize, cursor:'pointer'}} x={topX} y={topY} 
                onMouseDown={(e) => mouseDownEvent(e, 'top')}>{topText}</text>
  <text style={{fill:color, fontWeight:fontWeight, fontSize:bottomTextSize, cursor:'pointer'}} x={bottomX} y={bottomY} onMouseDown={(e) => mouseDownEvent(e, 'bottom')}>{bottomText}</text>
</svg>
        <Button handleClick={convertSvgToImage} btnText={"Download meme"} ></Button>
        </MemeWrapper>
        <Line/>
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
          btnText={'+'}
            handleClick={() => changeFontSize(true, 'top')} fontSize
          />
          <Button
          btnText={'-'}
            handleClick={() => changeFontSize(false, 'top')} fontSize
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
          btnText={'+'}
            handleClick={() => changeFontSize(true, 'bottom')} fontSize
          />
          <Button
          btnText={'-'}
            handleClick={() => changeFontSize(false, 'bottom')} fontSize
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
        </ButtonsWrapper>
        
        <ButtonsWrapper>
          <Button
            handleClick={genereteMeme}
            btnText={"Generate random meme"}
            
          ></Button>
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
        
          {/* <canvas ref={canvas} width={400} height={400}></canvas> */}
         
        
      </CreateMemeWrapper>
    </>
  );
}

export default App;
