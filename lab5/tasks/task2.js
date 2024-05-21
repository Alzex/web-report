document.addEventListener('DOMContentLoaded', function () {
  const dateInput = document.getElementById('date-input');
  const calendar = document.getElementById('calendar');
  const monthYear = document.getElementById('month-year');
  const calendarDays = document.getElementById('calendar-days');
  const prevMonth = document.getElementById('prev-month');
  const nextMonth = document.getElementById('next-month');
  const prevYear = document.getElementById('prev-year');
  const nextYear = document.getElementById('next-year');
  const cancelDate = document.getElementById('cancel-date');

  let selectedDate = null;
  let currentDate = new Date();

  function renderCalendar(date) {
    calendarDays.innerHTML = '';
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const prevLastDate = new Date(year, month, 0).getDate();
    const prevDays = firstDay === 0 ? 6 : firstDay - 1;

    monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    for (let x = prevDays; x > 0; x--) {
      const day = document.createElement('div');
      day.classList.add('hidden');
      day.textContent = prevLastDate - x + 1;
      calendarDays.appendChild(day);
    }

    for (let i = 1; i <= lastDate; i++) {
      const day = document.createElement('div');
      day.textContent = i;
      day.addEventListener('click', () => selectDate(new Date(year, month, i)));
      calendarDays.appendChild(day);
    }
  }

  function selectDate(date) {
    selectedDate = date;
    dateInput.value = date.toLocaleDateString();
    toggleCalendar();
  }

  function toggleCalendar() {
    if (calendar.style.display === 'none' || calendar.style.display === '') {
      calendar.style.display = 'block';
    } else {
      calendar.style.display = 'none';
    }
  }

  dateInput.addEventListener('click', toggleCalendar);
  prevMonth.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });
  nextMonth.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });
  prevYear.addEventListener('click', () => {
    currentDate.setFullYear(currentDate.getFullYear() - 1);
    renderCalendar(currentDate);
  });
  nextYear.addEventListener('click', () => {
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    renderCalendar(currentDate);
  });
  cancelDate.addEventListener('click', () => {
    selectedDate = null;
    dateInput.value = '';
    toggleCalendar();
  });

  renderCalendar(currentDate);
});
