import styled from 'styled-components';

const StepsStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .step {
    &:not(.first) {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        display: block;
        height: 4px;
        top: 50%;
        transform: translateY(-50%);
        left: -8px;
        right: 8px;
        background-color: var(--border-color-secondary);
      }
    }

    &.current {
      &:after {
        background-color: var(--color-primary);
      }
    }
  }

  .step-point {
    position: relative;
    width: 16px;
    height: 16px;
    background-color: #a6a6a6;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    &.active,
    &.finished {
      background-color: var(--color-primary);
    }

    &.current {
      position: relative;

      &:before {
        position: absolute;
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--color-white);
        border-radius: 50%;
      }
    }
  }
`;

export default StepsStyled;
