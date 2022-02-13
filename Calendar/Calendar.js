import { locale, addLocale } from 'primereact/api';
import { Calendar as PrimereactCalendar } from 'primereact/calendar';
import './Calendar.scss';

addLocale('es', {
  firstDayOfWeek: 1,
  dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  today: 'Hoy',
  clear: 'Claro'
});

locale('es');

const Calendar = (props) => {
  let minDate = null;

  if(props.minDateCurrent) {
    if(props.minDate) {
      delete props.minDate;
    }
    minDate = new Date();
  }

  return (
    <div className="Calendar">
      {props.value &&
        <div className="placeholder">
          <span>{props.placeholderTitle || props.placeholder}</span>
        </div>
      }
      <PrimereactCalendar minDate={minDate} {...props} />
    </div>
  );
}

Calendar.defaultProps = {
  icon: 'fas fa-calendar-alt',
  dateFormat: 'DD dd/mm/yy'
};

export default Calendar;