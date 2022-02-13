type props = {
  title?: string,
  message?: string,
  buttons?: {
    accept?: {
      label?: string,
      action?: () => void
    },
    cancel?: {
      label?: string,
      action?: () => void
    }
  }
}

declare const Confirm: (props: props) => void;

export default Confirm;