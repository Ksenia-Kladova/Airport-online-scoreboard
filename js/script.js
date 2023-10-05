
import { newArrayFlights, getLocal } from "./localStorage.js";
import { search } from "./search.js";
import { render } from "./render.js";
import { filterArrayFlights } from "./filterArrayFlights.js";

getLocal("scoreboard");

let flag = 'arrival';

const btnOut = document.querySelector('.scoreboard__btn-out');
const btnArrival = document.querySelector('.scoreboard__btn-arrival');

let array = [];

btnOut.addEventListener('click', () => {
  btnOut.classList.add('scoreboard__btn-out--active');
  btnArrival.classList.remove('scoreboard__btn-arrival--active')
  flag = 'out';
  array = filterArrayFlights(newArrayFlights, flag)
  render(flag);
  search(array, flag);
})
btnArrival.addEventListener('click', () => {
  btnArrival.classList.add('scoreboard__btn-arrival--active');
  btnOut.classList.remove('scoreboard__btn-out--active')
  flag = 'arrival';
  array = filterArrayFlights(newArrayFlights, flag)
  render(flag);
  search(array, flag);
})


let newArray = filterArrayFlights(newArrayFlights, flag);
search(newArray, flag);

render(flag);
