import { createItem } from "./createElement.js"
import { getLocal, newArrayFlights } from "./localStorage.js";
import { filterArrayFlights } from "./filterArrayFlights.js";

const container = document.getElementById('4');
export function render(flag) {
  container.innerHTML = '';
  getLocal("scoreboard");
  let array = filterArrayFlights(newArrayFlights, flag);

  let flight;

  for (let itemFlight of array) {
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
}