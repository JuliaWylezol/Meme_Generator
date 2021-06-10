import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
`;

const labelStyle = {
  fontSize: "22px",
  marginBottom: "10px",
};

const inputStyle = {
  fontSize: "18px",
  height: "40px",
  marginBottom: "10px",
};

function Input({ type, placeholder, handleChange, value, name }) {
  return (
    <InputWrapper>
      <label style={labelStyle}>{placeholder}: </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        name={name}
        style={inputStyle}
      />
    </InputWrapper>
  );
}

export default Input;
