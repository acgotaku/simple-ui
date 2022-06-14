import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render button', () => {
    render(<Button>{'Standard Button'}</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Standard Button');
  });
  it('should pass type to button', () => {
    render(<Button type="submit" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
  it('should render disabled button', () => {
    render(<Button disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
  it('should render loading button', () => {
    const { container } = render(<Button loading />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
