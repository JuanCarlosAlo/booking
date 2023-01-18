const calendar = document.getElementById("calendar");
const formElement = document.getElementById("form");
const dinners = document.getElementById("dinners");
const isLeap = (year) => {
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
  december: 30,
};

const monthsArray = [
  "january",
  "february",
  "february",
  "april",
  "may",
  "june",
  "july",
  "agust",
  "september",
  "october",
  "november",
  "december",
];
let currentMonth = monthsArray[date.getMonth()];
let calendarDay = "";

const deactivateDays = (index, day) => {
  if (date.getDate() > index + 1) {
    day.classList.add("disabled");
  }
  if (date.getDate() === index + 1) {
    day.classList.add("today");
  } else {
    calendarDay = day;
  }
};

const createDays = () => {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < months[currentMonth]; index++) {
    const day = document.createElement("div");
    day.classList.add("day");
    fragment.append(day);
    deactivateDays(index, day);
  }
  calendar.append(fragment);
};

createDays();

const calendarArragedment = () => {
  calendar.children[0].style.gridColumnStart = 7;
};

calendarArragedment();

calendar.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("day") &&
    !e.target.classList.contains("disabled")
  ) {
    dinners.removeAttribute("disabled");
  }
});
