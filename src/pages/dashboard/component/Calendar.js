import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { INITIAL_EVENTS } from '../CalendarEvent';

/*
npm install @fullcalendar/react @fullcalendar/daygrid
*/
const Calendar = (props) => {
  const handleEventClick = (clickInfo) => {
    console.log(clickInfo.event.extendedProps.content);
    console.log(clickInfo.event.start);
    console.log(clickInfo.event.end);
  };

  return (
    <div>
      <div className="demo-app">
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin]}
            headerToolbar={{
              left: '',
              center: 'prev title next',
              right: '',
            }}
            initialView="dayGridMonth"
            selectable={true}
            selectMirror={true}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
          />
        </div>
      </div>
    </div>
  );
};

function renderEventContent(eventInfo) {
  return (
    <>
      <ul>
        <li>{eventInfo.event.title}</li>
        {/*<li>{eventInfo.event.extendedProps.content}</li>*/}
      </ul>
    </>
  );
}

Calendar.propTypes = {};

export default Calendar;
