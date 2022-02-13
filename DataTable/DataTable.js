import { DataTable as PrimereactDataTable } from 'primereact/datatable';
import './DataTable.scss';

const DataTable = (props) => {
  return <PrimereactDataTable {...props} className='DataTable' />
}

export default DataTable;