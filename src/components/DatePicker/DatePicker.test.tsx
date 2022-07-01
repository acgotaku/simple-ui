import { useState } from 'react';
import '@/i18n';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DatePicker, { DatePickerValueType } from '.';

describe('DatePicker', () => {
  it('should render datepicker', async () => {
    const BasicDatePicker = () => {
      const [date, setDate] = useState<Date>();

      return <DatePicker value={date} onChange={setDate} clearable />;
    };
    render(<BasicDatePicker />);
    expect(screen.getByRole('combobox')).toHaveValue('');
  });
  it('should render datepicker with date', async () => {
    const StringDatePicker = () => {
      const [date, setDate] = useState<DatePickerValueType | undefined>(
        '2020-05-05'
      );

      return <DatePicker value={date} onChange={setDate} clearable />;
    };
    render(<StringDatePicker />);
    expect(screen.getByRole('combobox')).toHaveValue('2020-05-05');
  });
  it('should render datepicker with clear date', async () => {
    const StringDatePicker = () => {
      const [date, setDate] = useState<DatePickerValueType | undefined>(
        '2020-05-05'
      );

      return <DatePicker value={date} onChange={setDate} clearable />;
    };
    const user = userEvent.setup();
    render(<StringDatePicker />);
    await user.click(screen.getByRole('combobox'));
    await user.click(screen.getAllByRole('button')[0]);
    expect(screen.getByRole('combobox')).toHaveValue('');
  });
});
