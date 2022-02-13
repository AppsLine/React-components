import './InputTime.scss';

const InputTime = (props) => {
  return (
    <div className={`InputTime ${props.design}`}>
      <div className='content'>
        <input type='time' value={props.value} onChange={props.onChange} />
        {props.label &&
          <span>{props.label}</span>
        }
      </div>
    </div>
  );
}

InputTime.defaultProps = {
  design: ''
}

export default InputTime;