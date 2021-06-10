import React, { useRef } from "react";
import styled from "styled-components";

const ParagraphWrapper = styled.div`
  width: 250px;
  height: fit-content;
  cursor: move;
  position: absolute;
`;

function Paragraph({ text, size, color, fontWeight }) {
  const paragraphRef = useRef();
  const optionalStyles = {
    fontSize: `${size}px`,
    color: color,
    fontWeight: fontWeight,
  };

  const mouseDownEvent = (e) => {
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mouseMove(e) {
      let newX = prevX - e.clientX;
      let newY = prevY - e.clientY;

      const rect = paragraphRef.current.getBoundingClientRect();
      paragraphRef.current.style.left = rect.left - newX + "px";
      paragraphRef.current.style.top = rect.top - newY + "px";

      prevX = e.clientX;
      prevY = e.clientY;
    }

    function mouseUp(e) {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    }
  };

  const mouseUpEvent = () => {
    console.log("mouse up");
  };

  return (
    <ParagraphWrapper
      ref={paragraphRef}
      onMouseDown={(e) => mouseDownEvent(e)}
      onMouseUp={mouseUpEvent}
    >
      <p style={optionalStyles}>{text}</p>
    </ParagraphWrapper>
  );
}

export default Paragraph;
