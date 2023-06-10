import React from 'react';
import ButtonStyled from './ButtonStyled';

type ButtonProps = {
  name: string;
  primary?: boolean;
};

const Button: React.FC<ButtonProps> = ({ name, primary }) => {
  return <ButtonStyled $primary={primary}>{name}</ButtonStyled>;
};

export default Button;
