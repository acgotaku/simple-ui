import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Collapse from '.';

describe('Collapse', () => {
  it('should render collapse', async () => {
    const StandardCollapse = () => {
      const { Panel } = Collapse;
      return (
        <Collapse>
          <Panel title="What is your refund policy?">
            <p>
              If you&apos;re unhappy with your purchase for any reason, email us
              within 90 days and we&apos;ll refund you in full, no questions
              asked.
            </p>
          </Panel>
          <Panel title="Do you offer technical support?">
            <p>{'No.'}</p>
          </Panel>
          <Panel title="What are the supported browsers?">
            <p>{`Supported browsers:
              ・ Firefox (latest version)
              ・ Safari (latest version)
              ・ Google Chrome (latest version)`}</p>
          </Panel>
        </Collapse>
      );
    };

    render(<StandardCollapse />);
    expect(screen.getAllByRole('button', { expanded: false })).toHaveLength(3);
  });
  it('should render expanded collapse', async () => {
    const StandardCollapse = () => {
      const { Panel } = Collapse;
      return (
        <Collapse>
          <Panel title="What is your refund policy?">
            <p>
              If you&apos;re unhappy with your purchase for any reason, email us
              within 90 days and we&apos;ll refund you in full, no questions
              asked.
            </p>
          </Panel>
          <Panel title="Do you offer technical support?">
            <p>{'No.'}</p>
          </Panel>
          <Panel title="What are the supported browsers?">
            <p>{`Supported browsers:
              ・ Firefox (latest version)
              ・ Safari (latest version)
              ・ Google Chrome (latest version)`}</p>
          </Panel>
        </Collapse>
      );
    };
    const user = userEvent.setup();
    render(<StandardCollapse />);
    await user.click(screen.getAllByRole('button')[0]);
    await user.click(screen.getAllByRole('button')[1]);
    await user.click(screen.getAllByRole('button')[2]);
    expect(screen.getAllByRole('button', { expanded: true })).toHaveLength(3);
  });
  it('should render accordion collapse', async () => {
    const AccordionCollapse = () => {
      const { Panel } = Collapse;
      return (
        <Collapse accordion>
          <Panel title="What is your refund policy?">
            <p>
              If you&apos;re unhappy with your purchase for any reason, email us
              within 90 days and we&apos;ll refund you in full, no questions
              asked.
            </p>
          </Panel>
          <Panel title="Do you offer technical support?">
            <p>{'No.'}</p>
          </Panel>
          <Panel title="What are the supported browsers?">
            <p>{`Supported browsers:
              ・ Firefox (latest version)
              ・ Safari (latest version)
              ・ Google Chrome (latest version)`}</p>
          </Panel>
        </Collapse>
      );
    };
    const user = userEvent.setup();
    render(<AccordionCollapse />);
    await user.click(screen.getAllByRole('button')[0]);
    await user.click(screen.getAllByRole('button')[1]);
    await user.click(screen.getAllByRole('button')[2]);
    expect(screen.getAllByRole('button', { expanded: true })).toHaveLength(1);
  });
});
