let eventId = 0;
let date11 = '2020-10-11';
const date = new Date(date11);
const date3 = new Date('2020-10-17');
const date2 = new Date('2020-10-15');
const date1 = new Date('2020-10-15');

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Example Event1',
    content: 'dddddd',
    start: date,
    end: date2,
    color: '#A9F5A9',
  },
  {
    id: createEventId(),
    title: 'Example Event2',
    content: 'ddddddssss',
    start: date1,
    end: date3,
  },
];

export function createEventId() {
  return String(eventId++);
}
