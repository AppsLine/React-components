import { useState } from 'react';
import './InputColor.scss';

const InputColor = (props) => {
  const [colorLabel, setColorLabel] = useState('#000');

  const onChange = (event) => {
    props.onChange(event.target.value);

    if (props.label && props.handleChangeColor) {
      setColorLabel(event.target.value);
    }
  }

  return (
    <div className='InputColor'>
      <div className='content'>
        {props.label &&
          <span style={{ color: colorLabel }}>{props.label}</span>
        }
        <input type='color' value={props.value} onChange={onChange} />
      </div>
    </div>
  );
}

InputColor.defaultProps = {
  handleChangeColor: true
}

export default InputColor;