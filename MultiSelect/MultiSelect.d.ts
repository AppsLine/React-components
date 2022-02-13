type props = {
  value?: {}[],
  options: {}[],
  emptyFilterMessage?: string,
  onChange: (value: any) => void | React.Dispatch<React.SetStateAction<{}>>,
  placeholder: string,
  placeholderTitle?: string,
  optionLabel?: string,
  optionValue?: string,
  display?: 'chip',
  filter?: boolean
}

declare const MultiSelect: (props: props) => JSX.Element;

export default MultiSelect;