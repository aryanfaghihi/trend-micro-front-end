/**
 *
 * Sentence
 *
 */
import React, { memo, ReactNode, useEffect, useState } from 'react';
import styled, { Keyframes, keyframes } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface SentenceProps {
  children: ReactNode;
  visible: Boolean;
  forceExistance?: Boolean;
}
interface Props {
  children: ReactNode;
}

export const Colored = memo((props: Props) => {
  return <ColoredSpan>{props.children}</ColoredSpan>;
});
export const Bold = memo((props: Props) => {
  return <BoldSpan>{props.children}</BoldSpan>;
});
export const Sentence = memo((props: SentenceProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [visible, setVisiblity] = useState(props.visible);
  const [animationToPlay, setAnimation] = useState(keyframes``);
  useEffect(() => {
    console.log('visible', visible, props.visible);
    if (visible && props.visible) {
      setAnimation(BlurIn);
      setVisiblity(props.visible);
    } else if (!visible && !props.visible) {
      // setAnimation(BlurOut);
      setVisiblity(props.visible);
    } else if (visible && !props.visible) {
      setAnimation(BlurOut);
      setTimeout(() => {
        setVisiblity(props.visible);
      }, 2100);
    } else if (!visible && props.visible) {
      setAnimation(BlurIn);
      setTimeout(() => {
        setVisiblity(props.visible);
      }, 2100);
    }
  }, [props.visible, visible]);

  return (
    <Div
      forceExistance={props.forceExistance ? true : false}
      animation={animationToPlay}
      visible={visible}
    >
      {props.children}
    </Div>
  );
});
let startValues = {
  blur: '8px',
  opacity: 0,
  translateY: '3px',
};
const BlurIn = keyframes`
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
const BlurOut = keyframes`
  from{
    filter:blur(0px);
    opacity:1;
    transform:translateY(0px);

  }
  to{
    filter:blur(${startValues.blur});
    opacity: ${startValues.opacity};
    transform:translateY(-${startValues.translateY});

  }`;
// eslint-disable-next-line prettier/prettier
const Div = styled.div<{visible: Boolean;animation: Keyframes;forceExistance: Boolean;}>`
  display: ${props =>
    props.visible || props.forceExistance ? 'inherit' : 'none'};
  font-size: 70px;
  animation: ${props => props.animation} 2s ease forwards;
  opacity: ${startValues.opacity};
  transform: translateY(${startValues.translateY});
  filter: blur(${startValues.blur});
`;
const ColoredSpan = styled.span`
  color: ${props => props.theme.colors.primary};
  background: linear-gradient(
    -130deg,
    ${props => props.theme.colors.secondary},
    ${props => props.theme.colors.primary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BoldSpan = styled.span`
  font-family: info;
`;
