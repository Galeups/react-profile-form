import React from 'react';
import InputStyled from './InputStyled';

type InputProps = {
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <InputStyled placeholder={placeholder} />;
};

export default Input;
