import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/metroui.css';
import './Toast.scss';

Noty.overrideDefaults({
  theme: 'metroui',
  closeWith: ['click', 'button'],
  timeout: 5000,
  progressBar: true,
  animation: {
    open: 'animate__animated animate__fadeInRight',
    close: 'animate__animated animate__zoomOut'
  }
});

const toast = {
  warning: (props) => {
    new Noty(renderProps({
      type: 'warning',
      icon: '<i class="fas fa-exclamation-triangle"></i>',
      props
    })).show();
  },
  error: (props) => {
    new Noty(renderProps({
      type: 'error',
      icon: '<i class="fas fa-times"></i>',
      props
    })).show();
  },
  success: (props) => {
    new Noty(renderProps({
      type: 'success',
      icon: '<i class="fas fa-check"></i>',
      props
    })).show();
  },
  info: (props) => {
    new Noty(renderProps({
      type: 'info',
      icon: '<i class="fas fa-check"></i>',
      props
    })).show();
  }
}

const renderProps = ({ icon, type, props }) => {
  try {
    if (typeof props === 'string') {
      return {
        text: `${icon}${props}`,
        type: type
      }
    } else {
      if (props.icon === false) {
        icon = '';
      } else if (typeof props.icon === 'string') {
        icon = `${props.icon}`;
      }
      props.text = `${icon}${props.text}`;
      return {
        ...props,
        type: type
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export default toast;