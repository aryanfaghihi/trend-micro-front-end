import { Bold, Colored, Sentence } from 'app/components/Sentence';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

export function HomePage() {
  const [currentStage, setStage] = React.useState('greeting');
  setTimeout(() => {
    setStage('intro');
  }, 5000);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <SentenceContainer>
        <Sentence forceExistance={true} visible={currentStage === 'greeting'}>
          <Colored>Good Morning</Colored> human!
        </Sentence>
        <Sentence visible={currentStage === 'intro'}>
          Welcome to the <Bold>Atmosware Experience</Bold>
        </Sentence>
      </SentenceContainer>
    </>
  );
}
const SentenceContainer = styled.div`
  width: 50%;
  margin: 10%;
`;
