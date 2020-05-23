let workTime = [20, 25, 30];
let restTime = [5, 10, 12];

const warnTagEl = document.getElementById('warn-tag');
const button = document.getElementById('start');
const workTimeEl = document.getElementById('work-time-number');
const restTimeEl = document.getElementById('rest-time-number');

button.addEventListener('click', () => {
  let work = workTime[Math.floor(Math.random() * 3)];
  let rest = restTime[Math.floor(Math.random() * 3)];
  workTimeEl.innerHTML = work.toString();
  restTimeEl.innerHTML = rest.toString();

  warnTagEl.style.display = 'block';
  setTimeout(() => {
    warnTagEl.style.display = 'none';
  }, 1500);
});
