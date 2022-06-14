import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import { noop } from '@/utils/misc';
import Checkbox, { CheckboxValueType } from '.';

describe('Checkbox', () => {
  it('should render checkbox', () => {
    render(<Checkbox label={'Checkbox'} />);
    expect(screen.getByText('Checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('should render checked checkbox', () => {
    render(<Checkbox checked={true} onChange={noop} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
  it('should render disabled checkbox', () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
  it('should render disabled checked checkbox', () => {
    render(<Checkbox disabled checked />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
  it('should render checkbox group', () => {
    const CheckboxGroup = () => {
      const [values, setValues] = useState<CheckboxValueType[]>(['Apple']);
      const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' }
      ];
      return (
        <Checkbox.Group
          options={options}
          values={values}
          onChange={setValues}
        />
      );
    };
    const { container } = render(<CheckboxGroup />);
    expect(container.querySelectorAll('input[type=checkbox]')).toHaveLength(3);
  });
});
