import React from "react";
// import styled from "styled-components";

// const InputWrapper = styled.div`
//   display: flex;
//   height: fit-content;
//   flex-direction: column;
// `;

// const labelStyle = {
//   fontSize: "22px",
//   marginBottom: "10px",
// };

const inputStyle = {
  fontSize: "18px",
  height: "40px",
  marginBottom: "10px",
  maxWidth: '250px'
};

function Input({ type, placeholder, handleChange, value, name }) {
  return (
    
      
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        name={name}
        style={inputStyle}
      />
    
  );
}

export default Input;
