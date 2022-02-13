type props = {
  value?: Date,
  showTime?: boolean,
  hourFormat?: '12'|'24',
  onChange: (value: {value: Date}) => void | React.Dispatch<React.SetStateAction<{}>>,
  timeOnly?: boolean,
  minDate?: Date,
  maxDate?: Date,
  required?: boolean,
  placeholder?: string,
  icon?: string,
  dateFormat?: string,
  minDateCurrent?: boolean,
  disabled?: boolean
}

declare const Calendar: (props: props) => JSX.Element;

export default Calendar;