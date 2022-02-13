type props = {
  value?: {},
  options: {}[],
  emptyMessage?: string,
  onChange: (value: any) => void | React.Dispatch<React.SetStateAction<{}>>,
  placeholder: string,
  placeholderTitle?: string,
  optionLabel?: string,
  optionValue?: string
}

declare const DropDown: (props: props) => JSX.Element;

export default DropDown;