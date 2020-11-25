import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { INITIAL_EVENTS } from '../CalendarEvent'
import './Calendar.css'
// import { handleEventClick } from '../CalendarFunc';
/*
npm install @fullcalendar/react @fullcalendar/daygrid
*/
const Calendar = (props) => {
  const handleEventClick = (clickInfo) => {
    // props.setcalEvent(clickInfo.event.extendedProps.content);
    props.setcontent(clickInfo.event.extendedProps.content)
    props.setreservation_nm(clickInfo.event.extendedProps.reservation_nm)
    props.setapproval_method(clickInfo.event.extendedProps.approval_method)
    props.setreservation_total_price(clickInfo.event.extendedProps.reservation_total_price)
  }

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
          events={props.props.reData}
          // eventSourceSuccess={props.props}

          // initialEvents={props.props} // alternatively, use the `events` setting to fetch from a feed
          // initialEvents={INITIAL_EVENTS}
          // initialEvents= {aaa}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
        />
      </div>
    </div>
  )
}

const renderEventContent = (eventInfo) => {
  return (
    <>
      {/**<ul>
        <li>{eventInfo.event.title}</li>
        <li>{eventInfo.event.extendedProps.content}</li>
      </ul>**/}
      {eventInfo.event.title}
    </>
  )
}

Calendar.propTypes = {}

export default Calendar
