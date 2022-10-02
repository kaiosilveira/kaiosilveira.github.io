import { render, screen } from '@testing-library/react';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import LabeledIcon from '.';

describe('LabeledIcon', () => {
  it('should have an icon', () => {
    render(<LabeledIcon label="current location" icon={faMapMarker} />);
    const component = screen.getByLabelText('icon');
    expect(component).toBeInTheDocument();
  });

  it('should have an icon', () => {
    render(<LabeledIcon label="current location" icon={faMapMarker} />);
    const component = screen.getByText('current location');
    expect(component).toBeInTheDocument();
  });
});
