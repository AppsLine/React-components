import { Dropdown as PrimereactDropDown } from 'primereact/dropdown';
import './DropDown.scss';

const DropDown = (props) => {
  return (
    <div className="DropDown">
      {props.value &&
        <div className="placeholder">
          <span>{props.placeholderTitle || props.placeholder}</span>
        </div>
      }
      <PrimereactDropDown {...props} />
    </div>
  );
}

DropDown.defaultProps = {
  emptyMessage: 'Sin resultados'
};

export default DropDown;