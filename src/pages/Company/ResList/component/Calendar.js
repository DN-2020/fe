import React, { useState, useEffect } from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './eventUtil';
import RegisterModal from './RegisterModal';

const Calendar = (props) => {
	const [weekendsVisible, setWeekendsVisible] = useState({
		weekendsVisible: true,
	});

	const [currentEvents, setCurrentEvents] = useState({
		currentEvents: [],
	});

	const [modal, setModal] = useState(false);

	const [selectInfo, setSelectInfo] = useState({
		selectInfo: [],
	});

	const [startDate, setStartDate] = useState({
		startDate: [],
	});
	const [endDate, setEndDate] = useState({
		endDate: [],
	});

	const [title, setTitle] = useState({
		title: [],
	});

	//모달로 일정 등록
	const handleDateSelect = () => {
		let calendarApi = selectInfo.view.calendar;
		console.log('등록');

		calendarApi.unselect(); // clear date selection

		if (title) {
			calendarApi.addEvent({
				id: createEventId(),
				title: title['title'],
				start: startDate['startDate'],
				end: endDate['endDate'],
				allDay: selectInfo.allDay,
			});
		}
	};
	//모달 열기
	const openModal = (selctInfo) => {
		setModal(!modal);
		setSelectInfo(selctInfo);
		//setStartDate(s.startStr.replace(/\"/gi,/\'/gi ))
		//setStartDate(s.startStr)
	};

	const titleHandler = (events) => {
		setTitle({
			title: events.target.value,
		});
		console.log(title);
	};
	const formatDate = (date) => {
		const month = formatMonth(date.substring(4, 7));
		const day = date.substring(8, 10);
		const year = date.substring(11, 15);
		const format = year + '-' + month + '-' + day;
		console.log(format);
		return format;
	};
	const formatMonth = (month) => {
		switch (month) {
			case 'Jan':
				return '01';
			case 'Feb':
				return '02';
			case 'Mar':
				return '03';
			case 'Apr':
				return '04';
			case 'May':
				return '05';
			case 'Jun':
				return '06';
			case 'Jul':
				return '07';
			case 'Aug':
				return '08';
			case 'Sep':
				return '09';
			case 'Oct':
				return '10';
			case 'Nov':
				return '11';
			case 'Dec':
				return '12';
		}
	};
	const dateHandler = (events) => {
		let a = formatDate(new String(events[0]['_d']));
		let b = formatDate(new String(events[1]['_d']));
		setStartDate({
			startDate: a,
		});

		setEndDate({
			endDate: b,
		});
	};

	//하나씩 일정 추가
	const handleDateSelects = (selectInfo) => {
		let title = prompt('Please enter a new title for your event');
		let calendarApi = selectInfo.view.calendar;
		console.log(selectInfo);

		calendarApi.unselect(); // clear date selection

		if (title) {
			calendarApi.addEvent({
				id: createEventId(),
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}
	};

	const handleEventClick = (clickInfo) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${clickInfo.event.title}'`
			)
		) {
			clickInfo.event.remove();
		}
	};

	const handleEvents = (events) => {
		setCurrentEvents({
			currentEvents: events,
		});
	};

	return (
		<div>
			<div className="demo-app">
				<button onClick={() => setWeekendsVisible(!weekendsVisible)}>
					toggle weekends
				</button>
				<div className="demo-app-main">
					<FullCalendar
						height="1200px"
						plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
						headerToolbar={{
							left: 'prev,next today',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay',
						}}
						initialView="dayGridMonth"
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						weekends={weekendsVisible}
						initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
						select={openModal}
						eventContent={renderEventContent} // custom render function
						eventClick={handleEventClick}
						eventsSet={handleEvents} // called after events are initialized/added/changed/removed
						/* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
					/>
				</div>
			</div>

			<RegisterModal
				title="일정등록"
				isOpen={modal}
				width={1150}
				titleHandler={titleHandler}
				handleDateSelect={handleDateSelect}
				openModal={openModal}
				dateHandler={dateHandler}
				endDate={endDate}
				onChange={(v) => setModal(v)}
			/>
		</div>
	);
};

function renderEventContent(eventInfo) {
	return (
		<>
			<b>{eventInfo.timeText}</b>
			<i>{eventInfo.event.title}</i>
		</>
	);
}
function renderSidebarEvent(event) {
	return (
		<li key={event.id}>
			<b>
				{formatDate(event.start, {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				})}
			</b>
			<i>{event.title}</i>
		</li>
	);
}

export default Calendar;
