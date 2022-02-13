type props = {
  value: {}[],
  emptyMessage?: string,
  editMode?: 'cell',
  resizableColumns?: boolean,
  columnResizeMode?: 'fit',
  showGridlines?: boolean,
  children: JSX.Element | JSX.Element[],
  paginator?: boolean,
  footer?: React.ReactNode,
  expandedRows?: undefined | null | any[],
  stripedRows?: boolean,
  rowExpansionTemplate?: JSX.Element | JSX.Element[] | ((rowData: any) => JSX.Element | JSX.Element[]),
  onRowToggle?: (rowData: any) => void
}

declare const DataTable: (props: props) => JSX.Element;

export default DataTable;