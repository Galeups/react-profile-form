import styled from 'styled-components';

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;

  .label {
    font-size: 0.875rem;
    color: var(--color-text);
    margin-bottom: 8px;
  }

  .input {
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 0.75rem;

    &:focus {
      outline: none;
      box-shadow: 0 0 2px var(--color-primary);
    }

    &::placeholder {
      color: var(--color-text-secondary);
    }
  }
`;

export default InputStyled;
