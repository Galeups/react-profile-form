import React, { useEffect, useState } from 'react';
import StepsStyled from './StepsStyled';
import { Step } from './models/step';
import { ReactComponent as Check } from '../../assets/icons/check.svg';

type StepsProps = {
  items: Step[];
  current: number;
};

export const Steps: React.FC<StepsProps> = ({ items, current }) => {
  const [steps, setSteps] = useState<Step[]>([]);
  useEffect(() => {
    setSteps(items);
  }, [items]);

  const [currentStep, setCurrent] = useState<number>(0);
  useEffect(() => {
    setCurrent(--current);
  }, [current]);

  return (
    <StepsStyled>
      {steps.map((step, index) => {
        if (index === 0) {
          return (
            <div className="step first" key={index}>
              <div
                className={
                  currentStep > 0
                    ? 'step-point finished'
                    : 'step-point current active'
                }
              >
                {currentStep > 0 && <Check />}
              </div>
            </div>
          );
        }

        return (
          <div
            className={currentStep >= index ? 'step current' : 'step'}
            key={index}
          >
            <div
              className={
                currentStep === index
                  ? 'step-point active current'
                  : currentStep > index
                  ? 'step-point active'
                  : 'step-point'
              }
            >
              {currentStep > index && <Check />}
            </div>
          </div>
        );
      })}

      {/*<div className="step current ">*/}
      {/*  <div className="step-point current"></div>*/}
      {/*</div>*/}

      {/*<div className="step ">*/}
      {/*  <div className="step-point"></div>*/}
      {/*</div>*/}
    </StepsStyled>
  );
};
