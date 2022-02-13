type props = string | {
  theme?: string,
  closeWith?: [],
  timeout?: number,
  progressBar?: boolean,
  animation?: {
    open?: string,
    close?: string,
  },
  icon?: string|boolean,
  text: string
};

declare const Toast: {
  warning: (props: props) => void,
  error: (props: props) => void,
  success: (props: props) => void,
  info: (props: props) => void
}

export default Toast;