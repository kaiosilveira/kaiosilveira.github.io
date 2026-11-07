import { render, screen, within } from '@testing-library/react';
import Root from '../root';
import { links, tagline, work } from '../content';

describe('Root', () => {
  beforeEach(() => {
    render(<Root />);
  });

  it('renders the name as the page heading', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Kaio Silveira');
  });

  it('renders the tagline', () => {
    expect(screen.getByText(tagline)).toBeInTheDocument();
  });

  it('renders the About, How I work, Selected work and Elsewhere sections', () => {
    for (const name of ['About', 'How I work', 'Selected work', 'Elsewhere']) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument();
    }
  });

  it('links each selected work card to its repository', () => {
    for (const w of work) {
      const card = screen.getByRole('link', { name: new RegExp(w.title) });
      expect(card).toHaveAttribute('href', w.href);
      expect(card).toHaveAttribute('rel', expect.stringContaining('noopener'));
    }
  });

  it('shows the coming-soon card without a link', () => {
    const heading = screen.getByRole('heading', { level: 3, name: 'Architecture katas' });
    expect(heading.closest('a')).toBeNull();
  });

  it('lists the Elsewhere links', () => {
    const list = screen.getByRole('heading', { name: 'Elsewhere' }).nextElementSibling as HTMLElement;
    const anchors = within(list).getAllByRole('link');
    expect(anchors.map(a => a.getAttribute('href'))).toEqual(links.map(l => l.href));
  });

  it('shows the current year in the footer', () => {
    expect(screen.getByText(`© ${new Date().getFullYear()} Kaio Silveira`)).toBeInTheDocument();
  });

  it('does not mention nationality or birth details', () => {
    const text = document.body.textContent ?? '';
    expect(text).not.toMatch(/brazil|são paulo|sao paulo|born|years old/i);
  });
});
