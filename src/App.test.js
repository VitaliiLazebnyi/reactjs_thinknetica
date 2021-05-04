import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const title = {
    book: {
      title: 'hello, world',
      description: 'hello, description',
      pages: 6,
      progress: 50,
      image: 'https://www.google.com',
    },
    authors: [],
    finance: {
      subscribers: 444,
      minPrice: 999,
      expectedPrice: 10000,
      collectedAmount: 100000,
      expectedAmount: 500000,
    },
  };

  render(<App title={title} />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
