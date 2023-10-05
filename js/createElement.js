import { newArrayFlights } from "./localStorage.js";

export function createItem(obj) {
  const item = document.createElement('li');
  const leftGroup = document.createElement('div');
  const rightGroup = document.createElement('div');
  const itemElementDate = document.createElement('time');
  const itemElementTime = document.createElement('time');
  const itemElementDirection = document.createElement('span');
  const itemElementNameFlight = document.createElement('span');
  const itemElementWrap = document.createElement('div');
  const itemElementAviacompany = document.createElement('img');
  const itemElementText = document.createElement('span');
  const itemElementStatus = document.createElement('span');
  const inputStatus = document.createElement('select');
  const optionCanceled = document.createElement('option');
  const optionCheckIn = document.createElement('option');
  const optionInFlight = document.createElement('option');
  const optionBoarding = document.createElement('option');
  const optionDelayed = document.createElement('option');
  const optionArrived = document.createElement('option');
  const btnDelete = document.createElement('button');

  item.classList.add('scoreboard__flight', 'flex');
  leftGroup.classList.add('scoreboard__flight-group', 'scoreboard__flight-group--left');
  rightGroup.classList.add('scoreboard__flight-group', 'scoreboard__flight-group--right');
  itemElementDate.classList.add('scoreboard__flight-element', 'scoreboard__flight-element--date');
  itemElementTime.classList.add('scoreboard__flight-element', 'scoreboard__flight-element--time');
  itemElementDirection.classList.add('scoreboard__flight-element', 'scoreboard__flight-element--direction');
  itemElementNameFlight.classList.add('scoreboard__flight-element', 'scoreboard__flight-element--flight');
  itemElementAviacompany.classList.add('scoreboard__flight-image');
  itemElementText.classList.add('scoreboard__flight-element', 'scoreboard__flight-element--text');
  itemElementStatus.classList.add('scoreboard__flight-element', 'scoreboard__flight-element--status');
  itemElementWrap.classList.add('scoreboard__flight-element', 'scoreboard__flight-element--wrap',)
  inputStatus.classList.add('scoreboard__flight-element', 'scoreboard__flight-element--select', 'choices');
  btnDelete.classList.add('scoreboard__flight-btn', 'btn-reset')

  function renderDate(newDate) {
    const months = ['янв.', 'фев.', 'мар.', 'апр.', 'май', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];
    const date = new Date(newDate);
    const day = date.getDate(newDate);
    const month = months[date.getMonth(newDate)];
    const formattedDate = `${day} ${month}`;

    return formattedDate;
  }

  itemElementText.textContent = 'Статус';
  itemElementDate.textContent = renderDate(obj.data.date);
  itemElementDate.dateTime = obj.data.date;
  itemElementTime.dateTime = obj.data.time;
  itemElementTime.textContent = obj.data.time;
  itemElementDirection.textContent = obj.data.direction;
  itemElementNameFlight.textContent = obj.data.flight;
  itemElementStatus.textContent = obj.data.status.name;
  itemElementStatus.setAttribute('data-value', obj.data.status.name);
  itemElementAviacompany.src = obj.data.aviacompany.image;
  optionCanceled.textContent = 'Отменен';
  optionCheckIn.textContent = 'Регистрация';
  optionInFlight.textContent = 'В полете';
  optionBoarding.textContent = 'Посадка';
  optionDelayed.textContent = 'Задерживается';
  optionArrived.textContent = 'Прибыл';
  optionCanceled.setAttribute('data-color', 'red');
  optionCheckIn.setAttribute('data-color', 'black');
  optionInFlight.setAttribute('data-color', 'blue');
  optionBoarding.setAttribute('data-color', 'blue');
  optionDelayed.setAttribute('data-color', 'red');
  optionArrived.setAttribute('data-color', 'green');
  btnDelete.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Frame 1321313941"><circle id="Ellipse 3" cx="10" cy="10" r="9.54545" stroke="#DB2525" stroke-width="0.909091"/><path id="Line 19" d="M6.65283 14.1528L14.1528 6.65283" stroke="#DB2525" stroke-width="0.981955" stroke-linecap="round"/><path id="Line 20" d="M13.8472 14.1528L6.34717 6.65283" stroke="#DB2525" stroke-width="0.981955" stroke-linecap="round"/></g></svg>'

  inputStatus.append(optionCanceled);
  inputStatus.append(optionCheckIn);
  inputStatus.append(optionInFlight);
  inputStatus.append(optionBoarding);
  inputStatus.append(optionDelayed);
  inputStatus.append(optionArrived);

  const options = inputStatus.getElementsByTagName('option');
  const arrayOptions = Array.from(options);
  arrayOptions.forEach(option => {
    if (option.value == obj.data.status.name) {
      option.selected = true;
    }
  })

  const changeSelectStatus = inputStatus.addEventListener('change', function () {
    const selectedOption = inputStatus.options[inputStatus.selectedIndex];
    const statusColor = selectedOption.dataset.color;
    obj.data.status.color = statusColor;
    obj.data.status.name = this.value;
  })

  let deleteClick = btnDelete.addEventListener('click', function () {
    item.remove();
    for (let i = 0; i < newArrayFlights.length; i++) {
      if (newArrayFlights[i].id == obj.id) {
        newArrayFlights.splice(i, 1)
      }
    }
  });

  return {
    item,
    leftGroup,
    rightGroup,
    itemElementAviacompany,
    itemElementDate,
    itemElementDirection,
    itemElementNameFlight,
    itemElementStatus,
    itemElementText,
    itemElementTime,
    itemElementWrap,
    inputStatus,
    btnDelete,
    deleteClick,
    changeSelectStatus
  };
}