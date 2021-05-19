import React from 'react';
import { render } from '@testing-library/react';

import Banner from './component';

describe('Banner Component', () => {
  it('renders Banner Component with provided image', () => {
    const { container } = render(<Banner imgSrc="/image-path/img.jpg" imgAlt="Testing banner component" />);

    expect(container).toMatchSnapshot();
  });
});
