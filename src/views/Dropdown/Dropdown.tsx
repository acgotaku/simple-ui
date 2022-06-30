import { useMemo, useState } from 'react';
import { Button, Dropdown, Link } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';
import dropdownStyles from './dropdown.module.css';

const BasicClickDropdown = () => {
  const refButton = useMemo(
    () => (
      <Button className={dropdownStyles.button}>
        {'Click me show dropdown'}
      </Button>
    ),
    []
  );

  return (
    <Dropdown target={refButton} sameWidth={false} trigger={'click'}>
      <Dropdown.Menu className={dropdownStyles.dropdown}>
        <Dropdown.Item>
          <button className={dropdownStyles.dropdownButton}>
            {'button menu'}
          </button>
        </Dropdown.Item>
        <Dropdown.Item>
          <button className={dropdownStyles.dropdownButton} disabled>
            {'disabled button menu'}
          </button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/collapse" className={dropdownStyles.dropdownLink}>
            {'collapse link menu'}
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/checkbox" className={dropdownStyles.dropdownLink}>
            {'checkbox link menu'}
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const basicClickDropdownCode = `
const refButton = useMemo(
  () => (
    <Button className={dropdownStyles.button}>
      {'Click me show dropdown'}
    </Button>
  ),
  []
);

return (
  <Dropdown target={refButton} sameWidth={false} trigger={'click'}>
    <Dropdown.Menu className={dropdownStyles.dropdown}>
      <Dropdown.Item>
        <button className={dropdownStyles.dropdownButton}>
          {'button menu'}
        </button>
      </Dropdown.Item>
      <Dropdown.Item>
        <button className={dropdownStyles.dropdownButton} disabled>
          {'disabled button menu'}
        </button>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/collapse" className={dropdownStyles.dropdownLink}>
          {'collapse link menu'}
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/checkbox" className={dropdownStyles.dropdownLink}>
          {'checkbox link menu'}
        </Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
`;

const BasicHoverDropdown = () => {
  const refButton = useMemo(
    () => (
      <Button className={dropdownStyles.button}>
        {'Hover me show dropdown'}
      </Button>
    ),
    []
  );

  return (
    <Dropdown target={refButton} sameWidth={false} trigger={'hover'}>
      <Dropdown.Menu className={dropdownStyles.dropdown}>
        <Dropdown.Item>
          <button className={dropdownStyles.dropdownButton}>
            {'button menu'}
          </button>
        </Dropdown.Item>
        <Dropdown.Item>
          <button className={dropdownStyles.dropdownButton} disabled>
            {'disabled button menu'}
          </button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/collapse" className={dropdownStyles.dropdownLink}>
            {'collapse link menu'}
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/checkbox" className={dropdownStyles.dropdownLink}>
            {'checkbox link menu'}
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const basicHoverDropdownCode = `
const refButton = useMemo(
  () => (
    <Button className={dropdownStyles.button}>
      {'Hover me show dropdown'}
    </Button>
  ),
  []
);

return (
  <Dropdown target={refButton} sameWidth={false} trigger={'hover'}>
    <Dropdown.Menu className={dropdownStyles.dropdown}>
      <Dropdown.Item>
        <button className={dropdownStyles.dropdownButton}>
          {'button menu'}
        </button>
      </Dropdown.Item>
      <Dropdown.Item>
        <button className={dropdownStyles.dropdownButton} disabled>
          {'disabled button menu'}
        </button>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/collapse" className={dropdownStyles.dropdownLink}>
          {'collapse link menu'}
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/checkbox" className={dropdownStyles.dropdownLink}>
          {'checkbox link menu'}
        </Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
`;

const AdvancedDropdown = () => {
  const refButton = useMemo(
    () => (
      <Button
        className={dropdownStyles.button}
        onClick={() => setVisible(visible => !visible)}
      >
        {'Click me show dropdown'}
      </Button>
    ),
    []
  );
  const [visible, setVisible] = useState(false);

  return (
    <Dropdown
      target={refButton}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <Dropdown.Menu className={dropdownStyles.dropdown}>
        <Dropdown.Item>
          <button className={dropdownStyles.dropdownButton}>
            {'button menu'}
          </button>
        </Dropdown.Item>
        <Dropdown.Item>
          <button className={dropdownStyles.dropdownButton} disabled>
            {'disabled button menu'}
          </button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/collapse" className={dropdownStyles.dropdownLink}>
            {'collapse link menu'}
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/checkbox" className={dropdownStyles.dropdownLink}>
            {'checkbox link menu'}
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const advancedDropdownCode = `
const refButton = useMemo(
  () => (
    <Button
      className={dropdownStyles.button}
      onClick={() => setVisible(visible => !visible)}
    >
      {'Click me show dropdown'}
    </Button>
  ),
  []
);
const [visible, setVisible] = useState(false);

return (
  <Dropdown
    target={refButton}
    visible={visible}
    onClose={() => setVisible(false)}
  >
    <Dropdown.Menu className={dropdownStyles.dropdown}>
      <Dropdown.Item>
        <button className={dropdownStyles.dropdownButton}>
          {'button menu'}
        </button>
      </Dropdown.Item>
      <Dropdown.Item>
        <button className={dropdownStyles.dropdownButton} disabled>
          {'disabled button menu'}
        </button>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/collapse" className={dropdownStyles.dropdownLink}>
          {'collapse link menu'}
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/checkbox" className={dropdownStyles.dropdownLink}>
          {'checkbox link menu'}
        </Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
`;

const DropdownView = () => {
  useTitle('Dropdown | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Dropdown</h1>
      <p className={styles.desc}>
        Dropdown offer an easy way to build custom, accessible menu components
        with robust support for keyboard navigation.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Basic Dropdown</h3>
      <div className={styles.content}>
        <div className={dropdownStyles.wrapper}>
          <BasicClickDropdown />
          <BasicHoverDropdown />
        </div>
        <div className={styles.code}>
          <Code code={basicClickDropdownCode} />
          <Code code={basicHoverDropdownCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Advanced Dropdown</h3>
      <div className={styles.content}>
        <div className={dropdownStyles.wrapper}>
          <AdvancedDropdown />
        </div>
        <div className={styles.code}>
          <Code code={advancedDropdownCode} />
        </div>
      </div>
      <h2 className={styles.heading}>Accessibility</h2>
      <h3 className={styles.caption}>Keyboard Interaction</h3>
      <div className={styles.content}>
        <p className={styles.detail}>With focus on the button:</p>
        <p className={styles.detail}>
          <b>Enter</b>: Opens the menu and places focus on the first menu item.
        </p>
        <p className={styles.detail}>
          <b>Space</b>: Opens the menu and places focus on the first menu item.
        </p>
        <p className={styles.detail}>
          <b>Down Arrow</b>: Opens the menu and moves focus to the first menu
          item.
        </p>
        <p className={styles.detail}>
          <b>Up Arrow</b>: Opens the menu and moves focus to the last menu item.
        </p>
        <p className={styles.detail}>
          <b>Escape</b>: Close the menu that contains focus and return focus to
          the element or context.
        </p>
        <Link href="https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/">
          Menu Button
        </Link>
      </div>
    </article>
  );
};

export default DropdownView;
