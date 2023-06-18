import React from 'react';
import RadioButtonStyled from './RadioButtonStyled';

type RadioButtonProps = {
  label: string;
  onChangeRadioButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  checked?: boolean;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  onChangeRadioButton,
  label,
  name,
  value,
  checked,
}) => {
  return (
    <RadioButtonStyled>
      <input
        checked={!!checked}
        className="input"
        name={name}
        value={value}
        type="radio"
        onChange={onChangeRadioButton}
      />
      <span className="label">{label}</span>
    </RadioButtonStyled>
  );
};

export default RadioButton;
