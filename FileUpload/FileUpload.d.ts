type FileProps = {
  name: string,
  objectURL: string
}

type OptionsProps = {
    
}

type uploadHandlerProps = {
  files: File[],
  options: {
    clear: () => void,
    props: props
  }
}

type props = {
  name?: string,
  url?: string,
  accept?: string,
  maxFileSize?: number,
  ref?: React.MutableRefObject,
  auto?: boolean,
  mode?: 'basic',
  customUpload?: boolean,
  chooseOptions?: {
    icon: string,
    label?: string,
    iconOnly?: boolean,
    className?: string
  },
  onUpload?: (xhr: XMLHttpRequest) => void,
  onSelect?: () => void,
  onError?: () => void,
  onClear?: () => void,
  onBeforeUpload?: (xhr: XMLHttpRequest) => void,
  onBeforeSend?: (xhr: XMLHttpRequest) => void,
  headerTemplate?: (options: any) => null | JSX.Element[] | JSX.Element,
  itemTemplate?: (file: FileProps, OptionsProps: OptionsProps) => null | JSX.Element[] | JSX.Element,
  emptyTemplate?: () => null | JSX.Element[] | JSX.Element,
  uploadHandler?: (event: any) => void
}

declare const FileUpload: (props: props) => JSX.Element;

export default FileUpload;