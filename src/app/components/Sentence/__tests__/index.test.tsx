import * as React from 'react';
import { render } from '@testing-library/react';

import { Sentence } from '..';

describe('<Sentence  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Sentence />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
