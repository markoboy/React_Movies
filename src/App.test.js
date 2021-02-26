import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

test('should render Hello React!', () => {
  const component = render(<App />);

  const element = component.getByText(/hello react!/i);

  expect(element.textContent).toBe('Hello React!');
});
