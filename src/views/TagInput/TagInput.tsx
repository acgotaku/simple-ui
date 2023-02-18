import { useState } from 'react';
import { TagInput } from '@/components';
import { useTitle } from '@/hooks/useTitle';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';

const StandardTagInput = () => {
  const [value, setValue] = useState(['Apple', 'Pear', 'Orange']);
  return <TagInput value={value} onChange={setValue} />;
};
const standardTagInputCode = `
const [value, setValue] = useState(['Apple', 'Pear', 'Orange']);
return <TagInput value={value} onChange={setValue} />;
`;

const ClearableTagInput = () => {
  const [value, setValue] = useState(['Apple', 'Pear', 'Orange']);
  return <TagInput value={value} onChange={setValue} clearable />;
};
const clearableTagInputCode = `
const [value, setValue] = useState(['Apple', 'Pear', 'Orange']);
return <TagInput value={value} onChange={setValue} clearable />;
`;

const DisabledTagInput = () => {
  const [value, setValue] = useState(['Apple', 'Pear', 'Orange']);
  return <TagInput value={value} onChange={setValue} disabled />;
};
const disabledTagInputCode = `
const [value, setValue] = useState(['Apple', 'Pear', 'Orange']);
return <TagInput value={value} onChange={setValue} disabled />;
`;

const DraggableTagInput = () => {
  const [value, setValue] = useState(['Apple', 'Pear', 'Orange']);
  return <TagInput value={value} onChange={setValue} draggable />;
};
const draggableTagInputCode = `
const [value, setValue] = useState(['Apple', 'Pear', 'Orange']);
return <TagInput value={value} onChange={setValue} draggable />;
`;

const SeparatorTagInput = () => {
  const [value, setValue] = useState(['Apple', 'Pear', 'Orange']);
  return (
    <TagInput value={value} onChange={setValue} separator={[',', '|', '-']} />
  );
};

const SeparatorTagInputCode = `
const [value, setValue] = useState(['Apple', 'Pear', 'Orange']);
return (
  <TagInput value={value} onChange={setValue} separator={[',', '|', '-']} />
);
`;

const TagInputView = () => {
  useTitle('TagInput | Simple UI');

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>TagInput</h1>
      <p className={styles.desc}>
        Taginput is a input component that can add content as a tag.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Standard TagInput</h3>
      <div className={styles.content}>
        <StandardTagInput />
        <div className={styles.code}>
          <Code code={standardTagInputCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Clearable TagInput</h3>
      <div className={styles.content}>
        <ClearableTagInput />
        <div className={styles.code}>
          <Code code={clearableTagInputCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Disabled TagInput</h3>
      <div className={styles.content}>
        <DisabledTagInput />
        <div className={styles.code}>
          <Code code={disabledTagInputCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Draggable TagInput</h3>
      <div className={styles.content}>
        <DraggableTagInput />
        <div className={styles.code}>
          <Code code={draggableTagInputCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Separator TagInput</h3>
      <div className={styles.content}>
        <SeparatorTagInput />
        <div className={styles.code}>
          <Code code={SeparatorTagInputCode} />
        </div>
      </div>
    </article>
  );
};

export default TagInputView;
