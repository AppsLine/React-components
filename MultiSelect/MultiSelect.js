import { MultiSelect as PrimereactMultiSelect } from 'primereact/multiselect';
import './MultiSelect.scss';

const MultiSelect = (props) => {
  const showPlaceholder = () => {
    if(Array.isArray(props.value)) {
      if(props.value.length >= 1) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="MultiSelect">
      {showPlaceholder() &&
        <div className="placeholder">
          <span>{props.placeholderTitle || props.placeholder}</span>
        </div>
      }
      <PrimereactMultiSelect {...props} />
    </div>
  );
}

export default MultiSelect;