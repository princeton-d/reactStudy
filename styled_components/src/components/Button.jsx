import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  ${(props) => {
    const selected = props.theme.palette.blue;
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, '#228be6')};
      }
      &:active {
        background: ${darken(0.1, '#226be6')};
      }
    `;
  }}

  /* 기타 */
      & + & {
    margin-left: 1rem;
  }
`;

const Button = ({ children, ...rest }) => {
  return (
    <>
      <StyledButton {...rest}>{children}</StyledButton>
    </>
  );
};

export default Button;
