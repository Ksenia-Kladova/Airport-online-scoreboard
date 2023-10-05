import { render } from "./render.js";
import { createItem } from "./createElement.js";

const container = document.getElementById('4');

export function search(array, flag) {
  let searchInput = document.querySelector('.scoreboard__search-input');
  searchInput.addEventListener('keyup', function (e) {
    let searchText = e.target.value.toLowerCase();
    let searchArray = array.filter(function (flight) {
      let direction = flight.data.direction.toLowerCase();
      return direction.includes(searchText);
    });

  container.innerHTML = '';
  let flight;
  for (let itemFlight of searchArray) {
    flight = createItem(itemFlight);
    flight.item.append(flight.leftGroup);
    flight.item.append(flight.rightGroup);
    flight.leftGroup.append(flight.itemElementDate);
    flight.leftGroup.append(flight.itemElementTime);
    flight.leftGroup.append(flight.itemElementDirection);
    flight.leftGroup.append(flight.itemElementNameFlight);
    flight.leftGroup.append(flight.itemElementWrap)
    flight.itemElementWrap.append(flight.itemElementAviacompany);
    flight.rightGroup.append(flight.itemElementText);
    flight.rightGroup.append(flight.itemElementStatus);
    container.append(flight.item);
  }

    searchInput.addEventListener('input', function () {
      if (searchInput.value === '') {
        render(flag);
      }
    });
  });
}