type props = {
  label: string,
  type?: 'submit' | 'reset' | 'button',
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
  design?: 'primary' | 'secondary' | 'link',
  color?: 'danger' | 'primary',
  background?: 'danger'
}

declare const Button: (props: props) => JSX.Element;

export default Button;