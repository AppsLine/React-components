import './Button.scss';

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`Button ${props.design} ${props.color ? `color-${props.color}` : ''} ${props.background ? `background-${props.background}` : ''} `}
      disabled={props.disabled}
    >
      <span dangerouslySetInnerHTML={{ __html: props.label }} />
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  design: 'primary'
}

export default Button;