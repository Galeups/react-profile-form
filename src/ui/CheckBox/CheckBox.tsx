import React from 'react';
import CheckBoxStyled from './CheckBoxStyled';

type CheckBoxProps = {
  label: string;
  onChangeCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  onChangeCheckBox,
  checked,
}) => {
  return (
    <CheckBoxStyled>
      <input
        className="input"
        type="checkbox"
        onChange={onChangeCheckBox}
        checked={!!checked}
      />
      <span className="label">{label}</span>
    </CheckBoxStyled>
  );
};

export default CheckBox;
