/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Figure from '.';

describe('Picture', () => {
  it('should have a src', () => {
    render(<Figure imgSrc="img.jpg" alt="some alt text" caption="figure caption" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'img.jpg');
  });

  it('should have an alt text', () => {
    render(<Figure imgSrc="img.jpg" alt="text describing the image" caption="figure caption" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'text describing the image');
  });

  it('should have an caption', () => {
    render(<Figure imgSrc="img.jpg" alt="text describing the image" caption="figure caption" />);
    const figCaption = screen.getByText('figure caption');
    expect(figCaption).toBeInTheDocument();
  });
});
