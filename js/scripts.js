const calendar = document.getElementById('calendar');
const isLeap = year => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

let date = new Date();
let currentYear = date.getFullYear();

const months = {
  january: 31,
  february: isLeap(currentYear) ? 29 : 28,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  agust: 30,
  september: 31,
  october: 30,
  november: 31,
  december: 30
};

const monthsArray = [
  'january',
  'february',
  'february',
  'april',
  'may',
  'june',
  'july',
  'agust',
  'september',
  'october',
  'november',
  'december'
];

const createDays = () => {
  const fragments = document.createDocumentFragment();
};
