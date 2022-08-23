import { useState } from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';
import Drawer from '.';

describe('Drawer', () => {
  it('should render drawer', async () => {
    const BasicDrawer = () => {
      const [visible, setVisible] = useState(false);
      return (
        <>
          <Button onClick={() => setVisible(true)}>{'Right'}</Button>
          <Drawer visible={visible} position="right" onClose={setVisible}>
            <div>{'Drawer with position right.'}</div>
          </Drawer>
        </>
      );
    };
    render(<BasicDrawer />);
    expect(screen.getByRole('button')).toHaveTextContent('Right');
    expect(
      screen.queryByText('Drawer with position right.')
    ).not.toBeInTheDocument();
  });
  it('should render drawer and open', async () => {
    const BasicDrawer = () => {
      const [visible, setVisible] = useState(false);
      return (
        <>
          <Button onClick={() => setVisible(true)}>{'Right'}</Button>
          <Drawer visible={visible} position="right" onClose={setVisible}>
            <div>{'Drawer with position right.'}</div>
          </Drawer>
        </>
      );
    };
    const user = userEvent.setup();
    render(<BasicDrawer />);
    await user.click(screen.getByRole('button'));
    expect(
      screen.queryByText('Drawer with position right.')
    ).toBeInTheDocument();
  });
  it('should close drawer with escape', async () => {
    const BasicDrawer = () => {
      const [visible, setVisible] = useState(false);
      return (
        <>
          <Button onClick={() => setVisible(true)}>{'Right'}</Button>
          <Drawer visible={visible} position="right" onClose={setVisible}>
            <div>{'Press escape to close the drawer.'}</div>
          </Drawer>
        </>
      );
    };
    const user = userEvent.setup();
    render(<BasicDrawer />);
    await user.click(screen.getByRole('button'));
    expect(
      screen.queryByText('Press escape to close the drawer.')
    ).toBeInTheDocument();
    await user.keyboard('{Escape}');
    await waitForElementToBeRemoved(
      screen.queryByText('Press escape to close the drawer.')
    );
    expect(
      screen.queryByText('Press escape to close the drawer.')
    ).not.toBeInTheDocument();
  });
});
