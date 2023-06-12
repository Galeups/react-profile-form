import React from 'react';
import CheckBoxStyled from './CheckBoxStyled';

type CheckBoxProps = {
  label: string;
  onChangeCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ label, onChangeCheckBox }) => {
  return (
    <CheckBoxStyled>
      <input className="checkbox" type="checkbox" onChange={onChangeCheckBox} />
      <span className="label">{label}</span>
    </CheckBoxStyled>
  );
};

export default CheckBox;
