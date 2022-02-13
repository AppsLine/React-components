import './Input.scss';

const Input = (props) => {
  const onChange = (event) => {
    let allow = true;

    if (props.filter !== undefined) {
      allow = props.filter(event.target.value);
    }

    if (allow)
      props.onChange(event.target.value);
  }

  return (
    <span className={`Input w-100 ${props.icon && 'icon'} ${props.design}`}>
      <input
        value={props.value}
        pattern={props.pattern}
        onChange={onChange}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        name={props.name}
      />
      {props.icon &&
        <i className={props.icon}></i>
      }
      <label className='bar'></label>
    </span>
  );
}

Input.defaultProps = {
  design: ''
}

export default Input;