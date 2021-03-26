import { render } from '@testing-library/react';
import React from 'react';
import AppContainer from './container';

test('should render Hello React!', () => {
  const component = render(<AppContainer />);

  const element = component.getByText(/hello react!/i);

  expect(element.textContent).toBe('Hello React!');
});
