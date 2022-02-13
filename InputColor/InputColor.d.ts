type props = {
  value?: string,
  onChange: (value: string) => void | React.Dispatch<React.SetStateAction<string>>,
  label?: string,
  handleChangeColor?: boolean
}

declare const InputTime: (props: props) => JSX.Element;

export default InputTime;