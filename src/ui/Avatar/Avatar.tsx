import React from 'react';
import AvatarStyled from './AvatarStyled';

export type AvatarProps = {
  name: string;
  surname: string;
};

const Avatar: React.FC<AvatarProps> = ({ name, surname }) => {
  const firstCharName = name.charAt(0).toUpperCase();
  const firstCharSurName = surname.charAt(0).toUpperCase();

  return (
    <AvatarStyled>
      {firstCharName}
      {firstCharSurName}
    </AvatarStyled>
  );
};

export default Avatar;
