import { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  themes?: 'default' | 'finished' | 'disabled' | 'transparent';
  size?: 'small' | 'icon' | 'medium' | 'large';
}

export default function Button({ themes = 'default', size = 'large', ...props }: BtnProps) {
  return <DefaultBtn themes={themes} size={size} {...props} />;
}

const DefaultBtn = styled.button<BtnProps>`
  width: 100%;
  height: 44px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-weight: 600;
  font-size: 20px;
  color: var(--MR_WHITE);
  background: var(--MR_RED);
  cursor: pointer;

  ${({ themes }) => (themes ? THEMES_VARIANT[themes] : '')};
  ${({ size }) => (size ? SIZE_VARIANT[size] : '')}
`;

const THEMES_VARIANT = {
  default: `
  `,
  finished: `
    opacity: 0.5;
  `,
  disabled: `
    background: var(--MR_GRAY1);
  `,
  transparent: `
    color: var(--MR_GRAY2);  
    background: none;
  `,
};

const SIZE_VARIANT = {
  small: `
    width: fit-content;
    box-sizing: content-box;
    padding: 0 1rem;
    height: 28px;
    font-size: 16px;
    border-radius: 1rem;
  `,
  icon: `
    gap: 8px;
    width: fit-content;
    padding: 0 1rem;
  `,
  medium: `
  `,
  large: `
  `,
};
