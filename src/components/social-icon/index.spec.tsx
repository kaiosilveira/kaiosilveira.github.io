/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SocialIconLink from '.';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

describe('SocialIconLink', () => {
  it('should have an aria label', () => {
    render(<SocialIconLink href="" icon={faGithub} ariaLabel="test label" />);
    const component = screen.getByLabelText('test label');
    expect(component).toBeInTheDocument();
  });

  it('should have a href', () => {
    render(
      <SocialIconLink
        href="https://kaiosilveira.github.io"
        icon={faGithub}
        ariaLabel="test label"
      />
    );

    const component = screen.getByRole('link');

    expect(component).toHaveAttribute('href', 'https://kaiosilveira.github.io');
  });
});
