const calendar = document.getElementById('calendar');
const formElement = document.getElementById('form');
const dinners = document.getElementById('dinners');
const rootsStyles = document.documentElement.style;
let allDays;
const isLeap = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

let date = new Date();
let currentYear = date.getFullYear();
let getDays = date.getDate();
let getNumberDay = date.getDay();
let getMonths = date.getMonth();
let firstDay = new Date(currentYear, getMonths, 1);

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

const daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];
let currentMonth = monthsArray[getMonths];
let calendarDay = '';
let clickedDay;
const getDayOfWeek = day => new Date(currentYear, getMonths, day).getDay();

const deactivateDays = (index, day) => {
  if (getDays > index) {
    day.classList.add('disabled');
  }
  if (getDays === index) {
    day.classList.add('today');
  } else {
    calendarDay = day;
  }
};

const createDays = () => {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < daysOfTheWeek.length; index++) {
    const daysOfTheWeekElement = document.createElement('span');
    daysOfTheWeekElement.textContent = daysOfTheWeek[index];
    fragment.append(daysOfTheWeekElement);
  }

  for (let index = 1; index <= months[currentMonth]; index++) {
    const day = document.createElement('div');
    day.classList.add('day');
    day.textContent = index;
    fragment.append(day);
    deactivateDays(index, day);

    calendar.append(fragment);

    allDays = document.querySelectorAll('.day');

    let column;
    if (firstDay.getDay() === 0) column = 7;
    else column = firstDay.getDay();
    if (index === 1) {
      rootsStyles.setProperty('--first-day-column', column);
      day.classList.add('first-day');
    }
  }
};

createDays();

const selectDays = e => {
  if (
    !e.target.classList.contains('disabled') &&
    e.target.classList.contains('day')
  ) {
    allDays.forEach(div => div.classList.remove('selected'));

    e.target.classList.add('selected');
  }
};

const createOption = index => {
  const optionElement = document.createElement('option');
  optionElement.textContent = index;
  dinners.prepend(optionElement);
};

const dinneroptions = () => {
  if (!getNumberDay === 5 && !getNumberDay === 6 && !getNumberDay === 0) {
    for (let index = 1; index <= 8; index++) {
      createOption(index);
    }
  } else {
    for (let index = 1; index <= 15; index++) {
      createOption(index);
    }
  }
};

const enableSelect = e => {
  if (
    e.target.classList.contains('day') &&
    !e.target.classList.contains('disabled')
  ) {
    dinners.removeAttribute('disabled');
    dinneroptions();
  }
};

calendar.addEventListener('click', e => {
  selectDays(e);
  enableSelect(e);
  getDayOfWeek(e.target.textContent);
});
