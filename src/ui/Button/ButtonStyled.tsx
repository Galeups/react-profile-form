import styled, { css } from 'styled-components';

const ButtonStyled = styled.button<{ $primary?: boolean }>`
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  color: var(--color-primary);
  padding: 0.75rem 1rem;
  font-size: var(--font-size);
  cursor: pointer;
  background: var(--color-white);

  ${(props) =>
    props.$primary &&
    css`
      background: var(--color-primary);
      color: var(--color-white);
    `}
`;

export default ButtonStyled;
