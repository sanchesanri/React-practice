import { useState } from 'react';
import {
  ColorPickerTitle,
  ColorPickerWrapper,
  ColorPickerOption,
} from '../components/ColorPicker/ColorPicker.styled';

const ColorPicker = ({ options }) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOption = index => {
    return index === activeOptionIdx ? true : false;
  };

  const { label } = options[activeOptionIdx];

  return (
    <ColorPickerWrapper>
      <ColorPickerTitle>Color picker</ColorPickerTitle>
      <p>Color checked: {label}</p>
      <div>
        {options.map(({ label, color }, index) => {
          return (
            <ColorPickerOption
              $active={makeOption(index)}
              key={label}
              style={{
                backgroundColor: color,
              }}
              onClick={() => {
                setActiveOptionIdx(index);
              }}
            ></ColorPickerOption>
          );
        })}
      </div>
    </ColorPickerWrapper>
  );
};

export default ColorPicker;
