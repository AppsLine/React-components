type props = {
  value?: string|number,
  onChange: (value: string) => void | React.Dispatch<React.SetStateAction<string>>,
  type?: 'text' | 'password' | 'email',
  placeholder?: string,
  required?: boolean,
  icon?: string,
  name?: string,
  pattern?: string,
  design?: 'h-none',
  filter?: (value: string) => boolean
}

declare const Input: (props: props) => JSX.Element;

export default Input;