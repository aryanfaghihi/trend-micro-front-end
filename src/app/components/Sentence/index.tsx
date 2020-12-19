/**
 *
 * Sentence
 *
 */
import React, { memo, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {
  children: ReactNode;
}

export const Colored = memo((props: Props) => {
  return <ColoredSpan>{props.children}</ColoredSpan>;
});
export const Sentence = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <Div>{props.children}</Div>;
});
let startValues = {
  blur: '8px',
  opacity: 0,
  translateY: '3px',
};
const startAnimation = keyframes`
  from{
    filter:blur(${startValues.blur});
    opacity: ${startValues.opacity};
    transform:translateY(${startValues.translateY});

  }
  to{
    filter:blur(0px);
    opacity:1;
    transform:translateY(0px);

  }`;
const Div = styled.div`
  font-size: 70px;
  animation: ${startAnimation} 2s ease forwards;
  opacity: ${startValues.opacity};
  transform: translateY(${startValues.translateY});
  filter: blur(${startValues.blur});
`;
const ColoredSpan = styled.span`
  color: red;
  background: linear-gradient(
    -130deg,
    ${props => props.theme.colors.secondary},
    ${props => props.theme.colors.primary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
