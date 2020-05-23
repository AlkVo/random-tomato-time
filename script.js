let workTime = [20, 20, 25, 20, 15, 25, 20];
let restTime = [5, 10, 12];

const warnTagEl = document.getElementById('warn-tag');
const button = document.getElementById('start');

const workTimeEl1 = document.getElementById('work-time-number 1');
const restTimeEl1 = document.getElementById('rest-time-number 1');
const workTimeEl2 = document.getElementById('work-time-number 2');
const restTimeEl2 = document.getElementById('rest-time-number 2');
const workTimeEl3 = document.getElementById('work-time-number 3');
const restTimeEl3 = document.getElementById('rest-time-number 3');

const excuteTimeEl1 = document.getElementById('excuse-time 1');
const excuteTimeEl2 = document.getElementById('excuse-time 2');
const excuteTimeEl3 = document.getElementById('excuse-time 3');

const endTimeEl = document.getElementById('end-time');

const WORK = 'work';
const REST = 'rest';

button.addEventListener('click', () => {
  //设置每个时间段
  setElTime(workTimeEl1, restTimeEl1, excuteTimeEl1, 0, 0);

  setElTime(
    workTimeEl2,
    restTimeEl2,
    excuteTimeEl2,
    (getElTime(workTimeEl1) + getElTime(restTimeEl1)) * 60 * 1000
  );
  setElTime(
    workTimeEl3,
    restTimeEl3,
    excuteTimeEl3,
    (getElTime(workTimeEl1) + getElTime(restTimeEl1)) * 60 * 1000 +
      (getElTime(workTimeEl2) + getElTime(restTimeEl2)) * 60 * 1000
  );

  //设置最后结束时间
  let date = new Date();
  date.setTime(
    date.getTime() +
      (getElTime(workTimeEl1) + getElTime(restTimeEl1)) * 60 * 1000 +
      (getElTime(workTimeEl2) + getElTime(restTimeEl2)) * 60 * 1000 +
      (getElTime(workTimeEl3) + getElTime(restTimeEl3)) * 60 * 1000
  );

  endTimeEl.innerHTML = `结束时间是  ${date.getHours()}:${date.getMinutes()}`;

  warnTagEl.style.display = 'block';
  setTimeout(() => {
    warnTagEl.style.display = 'none';
  }, 1500);
});

function getRandomTime(type) {
  switch (type) {
    case WORK:
      return workTime[Math.floor(Math.random() * 7)];
    case REST:
      return restTime[Math.floor(Math.random() * 3)];
  }
}

function setElTime(workTimeEl, restTimeEl, excuteTimeEl, elaspedTime) {
  let date = new Date();

  if (elaspedTime != 0) {
    date.setTime(date.getTime() + elaspedTime);
  }

  let work = getRandomTime(WORK);
  let rest = getRandomTime(REST);

  workTimeEl.innerHTML = work.toString();
  restTimeEl.innerHTML = rest.toString();

  let hour = date.getHours();
  let minutes = date.getMinutes();
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  excuteTimeEl.innerText = `${hour}:${minutes}`;
}

function getElTime(element) {
  return +element.innerText;
}
