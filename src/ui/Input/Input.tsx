import React from 'react';
import InputStyled from './InputStyled';

type InputProps = {
  placeholder: string;
  label: string;
};

const Input: React.FC<InputProps> = ({ placeholder, label }) => {
  return (
    <InputStyled placeholder={placeholder}>
      <label className="label">{label}</label>
      <input className="input" type="text" />
    </InputStyled>
  );
};

export default Input;
