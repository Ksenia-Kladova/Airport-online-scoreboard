import { newArrayFlights, getLocal, saveLocal } from "./localStorage.js";
import { search } from "./search.js";
import { render } from "./render.js";
import { filterArrayFlights } from "./filterArrayFlights.js";
import { getForm } from "./getForm.js";
import { createItem } from "./createElement.js";
import { renderEditing } from "./renderEditing.js"

const btnOut = document.querySelector('.scoreboard__btn-out');
const btnArrival = document.querySelector('.scoreboard__btn-arrival');
const btnEditing = document.querySelector('.scoreboard__btn-editing');
const btnSave = document.querySelector('.scoreboard__btn-save');
let flag = 'arrival';

btnOut.addEventListener('click', (event) => {
  flag = event.target.dataset.flag;
  btnOut.classList.add('scoreboard__btn-out--active');
  btnArrival.classList.remove('scoreboard__btn-arrival--active');

  const array = filterArrayFlights(newArrayFlights, flag);
  search(array,flag);
  getForm(flag);
  render(flag);
})

btnArrival.addEventListener('click', (event) => {
  flag = event.target.dataset.flag;
  btnArrival.classList.add('scoreboard__btn-arrival--active');
  btnOut.classList.remove('scoreboard__btn-out--active');

  const array = filterArrayFlights(newArrayFlights, flag);
  search(array, flag);
  getForm(flag);
  render(flag);
})

let newArray = filterArrayFlights(newArrayFlights, flag);
search(newArray, flag);
getForm(flag);

btnEditing.addEventListener('click', () => {
  if (btnEditing.innerHTML === 'редактирование') {
    btnEditing.innerHTML = 'отменить редактирование';
    for (let itemFlight of newArray) {
      const flight = createItem(itemFlight);
      flight.deleteClick;
      flight.changeSelectStatus;
    }
    btnSave.addEventListener('click', () => {
      saveLocal("scoreboard", newArrayFlights);
      render(flag);
      btnEditing.innerHTML = 'редактирование';
    })
    getLocal("scoreboard");
    let newArrayEd = filterArrayFlights(newArrayFlights, flag);
    renderEditing(flag);
  } else if (btnEditing.innerHTML = 'отменить редактирование') {
    btnEditing.innerHTML = 'редактирование';
    
    render(flag);
  }
})

render(flag);
