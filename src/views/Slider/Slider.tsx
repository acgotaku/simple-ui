import { useState } from 'react';
import { Slider } from '@/components';
import Code from '@/components/Code';
import styles from '@/styles/view.module.css';

const basicSliderCode = `
<Slider label={'Score'} defaultValue={30} />
`;

const StandardSlider = () => {
  const [value, setValue] = useState(65);
  return (
    <Slider
      label={'Score'}
      value={value}
      minValue={20}
      maxValue={200}
      step={5}
      onChange={setValue}
    />
  );
};
const standardSliderCode = `
const [value, setValue] = useState(66);
return (
  <Slider
    label={'Score'}
    value={value}
    minValue={20}
    maxValue={200}
    onChange={e => setValue(Number(e.target.value))}
  />
);
`;

const DisabledSlider = () => {
  const [value, setValue] = useState(60);
  return (
    <Slider
      label={'Score'}
      value={value}
      minValue={40}
      maxValue={100}
      onChange={setValue}
      disabled
    />
  );
};
const disabledSliderCode = `
const [value, setValue] = useState(60);
return (
  <Slider
    label={'Score'}
    value={value}
    minValue={40}
    maxValue={100}
    onChange={e => setValue(Number(e.target.value))}
    disabled
  />
);
`;

const StandardRangeSlider = () => {
  const [value, setValue] = useState({
    start: 20,
    end: 80
  });
  return (
    <Slider.Range
      label={'Price range'}
      value={value}
      step={2}
      onChange={setValue}
    />
  );
};

const standardRangeSliderCode = `
const [value, setValue] = useState({
  start: 20,
  end: 80
});
return (
  <Slider.Range
    label={'Price range'}
    value={value}
    step={2}
    onChange={setValue}
  />
);
`;

const DisabledRangeSlider = () => {
  const [value, setValue] = useState({
    start: 20,
    end: 80
  });
  return (
    <Slider.Range
      label={'Price range'}
      value={value}
      step={2}
      onChange={setValue}
      disabled
    />
  );
};

const SliderView = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Slider</h1>
      <p className={styles.desc}>
        Sliders allow users to quickly select a value within a range. They
        should be used when the upper and lower bounds to the range are
        invariable.
      </p>
      <h2 className={styles.heading}>Example</h2>
      <h3 className={styles.caption}>Basic Slider (uncontrolled)</h3>
      <div className={styles.content}>
        <Slider label={'Score'} defaultValue={30} />
        <div className={styles.code}>
          <Code code={basicSliderCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Standard Slider (controlled)</h3>
      <div className={styles.content}>
        <StandardSlider />
        <div className={styles.code}>
          <Code code={standardSliderCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Disabled Slider</h3>
      <div className={styles.content}>
        <DisabledSlider />
        <div className={styles.code}>
          <Code code={disabledSliderCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Range Slider</h3>
      <div className={styles.content}>
        <StandardRangeSlider />
        <div className={styles.code}>
          <Code code={standardRangeSliderCode} />
        </div>
      </div>
      <h3 className={styles.caption}>Disabled Range Slider</h3>
      <div className={styles.content}>
        <DisabledRangeSlider />
        <div className={styles.code}>
          <Code code={standardRangeSliderCode} />
        </div>
      </div>
    </article>
  );
};

export default SliderView;
