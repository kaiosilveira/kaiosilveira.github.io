/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import JustifiedParagraph from '.';

describe('JustifiedParagraph', () => {
  it('should render a paragraph', () => {
    render(<JustifiedParagraph>some text</JustifiedParagraph>);
    const p = screen.getByText('some text');
    expect(p).toBeInTheDocument();
  });
});
