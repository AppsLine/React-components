import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './Confirm.scss';

const confirm = (props) => {
  confirmAlert({
    title: props.title || 'Confirmar',
    message: props.message || '',
    buttons: [
      {
        label: props.buttons?.accept?.label || 'Aceptar',
        onClick: () => {
          if (props.buttons?.accept?.action) {
            props.buttons.accept.action();
          }
        }
      },
      {
        label: props.buttons?.cancel?.label || 'Cancelar',
        onClick: () => {
          if (props.buttons?.cancel?.action) {
            props.buttons.cancel.action();
          }
        }
      }
    ]
  });
}

export default confirm;