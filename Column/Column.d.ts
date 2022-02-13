type props = {
  field?: string,
  header?: string,
  body?: (rowData: any) => JSX.Element | string | number,
  className?: string,
  style?: object,
  editor?: (props: any) => JSX.Element,
  onEditorInit?: (event: any) => void,
  onEditorCancel?: () => void,
  onEditorSubmit?: (event: any) => Promise<void>,
  expander?: boolean
}

declare const Column: (props: props) => JSX.Element;

export default Column;