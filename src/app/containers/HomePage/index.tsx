import { Colored, Sentence } from 'app/components/Sentence';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <SentenceContainer>
        <Sentence>
          <Colored>Good Morning</Colored> human!
        </Sentence>
      </SentenceContainer>
    </>
  );
}
const SentenceContainer = styled.div`
  width: 50%;
  margin: 10%;
`;
