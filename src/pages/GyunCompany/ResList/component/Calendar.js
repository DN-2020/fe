import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import { INITIAL_EVENTS } from '../CalendarEvent';
// import './Calendar.css';
// import { handleEventClick } from '../CalendarFunc';
/*
npm install @fullcalendar/react @fullcalendar/daygrid
*/
const Calendar = (props) => {
  console.log(props.props);
  const handleEventClick = (clickInfo) => {
    console.log(clickInfo.event.extendedProps.content);
    console.log(clickInfo.event.start);
    console.log(clickInfo.event.end);
    // setcalEvent(clickInfo.event.extendedProps.content);
  };
  // const arr2 = [];
  // arr2 = props.props.map((e) => e);
  // console.log(arr2);
  return (
    <div>
      <div className="demo-app" style={{ scrollbarWidth: 'none' }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          headerToolbar={{
            left: '',
            center: 'prevYear prev title next nextYear',
            right: '',
          }}
          height="480px"
          initialView="dayGridMonth"
          selectable={true}
          selectMirror={true}
          events={props.props}
          // initialEvents={props.props} // alternatively, use the `events` setting to fetch from a feed
          // eventContent={props.props} // custom render function
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};

// const renderEventContent = (eventInfo) => {
//   return (
//     <>
//       {/**<ul>
//         <li>{eventInfo.event.title}</li>
//         <li>{eventInfo.event.extendedProps.content}</li>
//       </ul>**/}
//       {eventInfo.event.title}
//     </>
//   );
// };

Calendar.propTypes = {};

export default Calendar;
