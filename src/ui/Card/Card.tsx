import React, { ReactNode } from 'react';
import CardStyled from './CardStyled';

type CardProps = {
  $paddingTop?: number;
  $paddingBottom?: number;
  $paddingLeft?: number;
  $paddingRight?: number;

  children: ReactNode;
};

const Card: React.FC<CardProps> = ({
  children,
  $paddingTop,
  $paddingRight,
  $paddingBottom,
  $paddingLeft,
}) => {
  return (
    <CardStyled
      $paddingTop={$paddingTop}
      $paddingRight={$paddingRight}
      $paddingBottom={$paddingBottom}
      $paddingLeft={$paddingLeft}
    >
      {children}
    </CardStyled>
  );
};

export default Card;
