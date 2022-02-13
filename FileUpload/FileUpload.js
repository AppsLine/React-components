import { FileUpload as PrimereactFileUpload} from 'primereact/fileupload';
import './FileUpload.scss';

const FileUpload = (props) => {
    return <PrimereactFileUpload {...props} />;
}

export default FileUpload;