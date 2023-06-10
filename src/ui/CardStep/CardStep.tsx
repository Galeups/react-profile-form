import React, { ReactNode } from 'react';
import CardStepStyled from './CardStepStyled';

type CardProps = {
  $paddingTop?: number;
  $paddingBottom?: number;
  $paddingLeft?: number;
  $paddingRight?: number;

  children: ReactNode;
};

const CardStep: React.FC<CardProps> = ({
  children,
  $paddingTop,
  $paddingRight,
  $paddingBottom,
  $paddingLeft,
}) => {
  return (
    <CardStepStyled
      $paddingTop={$paddingTop}
      $paddingRight={$paddingRight}
      $paddingBottom={$paddingBottom}
      $paddingLeft={$paddingLeft}
    >
      {children}
    </CardStepStyled>
  );
};

export default CardStep;
