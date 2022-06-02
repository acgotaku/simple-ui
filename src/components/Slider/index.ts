import InternalSlider from './Slider';
import RangeSlider from './RangeSlider';

type InternalSliderType = typeof InternalSlider;

interface SliderInterface extends InternalSliderType {
  Range: typeof RangeSlider;
}

const Slider = InternalSlider as SliderInterface;

Slider.Range = RangeSlider;

export default Slider;
