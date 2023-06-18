import React from 'react';
import StepPointStyled from './StepPointStyled';

type StepPointProps = {
  active: boolean;
  finished: boolean;
  index: number;
};

const StepPoint: React.FC<StepPointProps> = ({ active, finished, index }) => {
  return <StepPointStyled></StepPointStyled>;
};

export default StepPoint;
