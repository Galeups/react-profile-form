import styled from 'styled-components';

const CardStyled = styled.div<{
  $paddingTop?: number;
  $paddingBottom?: number;
  $paddingLeft?: number;
  $paddingRight?: number;
}>`
  background-color: var(--color-white);
  border-radius: 1.5rem;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  padding: ${(props) => props.$paddingTop || 60}px
    ${(props) => props.$paddingRight || 110}px
    ${(props) => props.$paddingBottom || 80}px
    ${(props) => props.$paddingLeft || 110}px;
`;

export default CardStyled;
