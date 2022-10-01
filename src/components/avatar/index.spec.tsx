/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Avatar from '.';

describe('Avatar', () => {
  it('should have a img', () => {
    render(<Avatar imgSrc="my_img.png" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
});
