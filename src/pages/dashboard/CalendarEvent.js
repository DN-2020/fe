let eventId = 0;
let date11 = '2020-11-11';
let end = '2020-11-12';
const date = new Date(date11);
const date3 = new Date('2020-10-17');
const date2 = new Date('2020-10-15');
const date1 = new Date('2020-10-15');

export const INITIAL_EVENTS = [
  {
    id: 0,
    title: '예약타이틀1',
    content: '예약타이틀1 예약상세내용입니다',
    start: date11,
    end: end,
    // color: '#A9F5A9',
  },
  {
    id: 2,
    title: '예2',
    content: '예약타이틀222 예약상세내용입니다',
    start: date11,
    end: end,
    // color: '#A9F5A9',
  },
  {
    id: 3,
    title: '예2',
    content: '예약타이틀222 예약상세내용입니다',
    start: date11,
    end: end,
    // color: '#A9F5A9',
  },
];

export function createEventId() {
  return String(eventId++);
}
