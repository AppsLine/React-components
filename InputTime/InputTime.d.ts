import { ChangeEvent } from 'react';

type props = {
  value?: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  label?: string,
  design?: 'icon-none'
}

declare const InputTime: (props: props) => JSX.Element;

export default InputTime;