import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  typography?: 'title' | 'main' | 'button' | 'weak' | 'compact';
  color?: string;
}

function Text({ typography = 'main', color, ...props }: Props) {
  return <StyledSpan typography={typography} color={color} {...props} />;
}

const StyledSpan = styled.span<Pick<Props, 'typography' | 'color'>>`
  display: block;
  white-space: pre-wrap;
  color: ${({ color }) => (color ? color : '')};
  ${({ typography }) => (typography ? TYPOGRAPHY_VARIANT[typography] : '')};
`;

const TYPOGRAPHY_VARIANT = {
  title: `
    font-size: 24px;
    font-weight: 600;
    line-height: 20px;
  `,
  main: `
    font-size: 16px;
    line-height: 24px;
  `,
  button: `
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
  `,
  weak: `
    font-size: 12px;
    line-height: 22px;
  `,
  compact: `
    font-size: 14px;
    line-height: 15px;
  `,
};

export default Text;
