/**
 *
 * Sentence
 *
 */
import React, { memo, ReactNode, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components/macro';
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

const Div = styled.div`
  font-size: 70px;
`;
const ColoredSpan = styled.span`
  color: red;
  background: linear-gradient(-130deg,
    ${props => props.theme.colors.secondary},
    ${props => props.theme.colors.primary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
