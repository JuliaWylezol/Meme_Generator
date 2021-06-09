import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: block;
`;

function Input({ type, placeholder, handleChange, value, name }) {
  return (
    <InputWrapper>
      <label>{placeholder}: </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        name={name}
      />
    </InputWrapper>
  );
}

export default Input;
