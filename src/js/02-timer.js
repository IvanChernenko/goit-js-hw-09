import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
let CURRENT_DATE = new Date();
const daysMy = document.querySelector('[data-days]');
const hoursMy = document.querySelector('[data-hours]');
const minutesMy = document.querySelector('[data-minutes]');
const secondsMy = document.querySelector('[data-seconds]');
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < CURRENT_DATE) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', timer(selectedDates[0]));
    }
  },
};

flatpickr('#datetime-picker', options);

const timer = targetDate => {
  return function () {
    const myInt = setInterval(() => {
      const delta = new Date(targetDate) - new Date();
      renderTimer(delta);
    }, 1000);
  };
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value < 10) {
    return `${value}`.padStart(2, '0');
  }
  return value;
}

const renderTimer = string => {
  let { days, hours, minutes, seconds } = convertMs(string);
  daysMy.textContent = addLeadingZero(days);
  minutesMy.textContent = addLeadingZero(minutes);
  hoursMy.textContent = addLeadingZero(hours);
  secondsMy.textContent = addLeadingZero(seconds);

};
