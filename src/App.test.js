import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component rendering', () => {
  it('renders without crashing and unmount correctly', () => {
    const div = document.createElement('div');
    const { container, unmount } = render(<App />);
    unmount();
    expect(container.innerHTML).toBe("");
  })
});