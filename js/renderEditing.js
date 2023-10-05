import { createItem } from "./createElement.js";
import { getLocal, newArrayFlights } from "./localStorage.js";
import { filterArrayFlights } from "./filterArrayFlights.js";

const container = document.getElementById('4');

export function renderEditing(flag) {
  container.innerHTML = '';
  getLocal("scoreboard");
  let array = filterArrayFlights(newArrayFlights, flag);
  let flight;

  for (let itemFlight of array) {
    flight = createItem(itemFlight);

    flight.item.classList.add('scoreboard__flight--editing');
    flight.item.append(flight.leftGroup);
    flight.item.append(flight.rightGroup);
    flight.leftGroup.append(flight.itemElementDate);
    flight.leftGroup.append(flight.itemElementTime);
    flight.leftGroup.append(flight.itemElementDirection);
    flight.leftGroup.append(flight.itemElementNameFlight);
    flight.leftGroup.append(flight.itemElementWrap)
    flight.itemElementWrap.append(flight.itemElementAviacompany);
    flight.rightGroup.append(flight.itemElementText);
    flight.rightGroup.append(flight.inputStatus);
    flight.rightGroup.append(flight.btnDelete);
    container.append(flight.item);

    const choices = new Choices(flight.inputStatus, {
      searchEnabled: false,
      itemSelectText: ' ',
      callbackOnCreateTemplates: function () {
        return {
          option: ({ label, value, customProperties, active, disabled }) => {
            const opt = Choices.defaults.templates.option.call(this, { label, value, customProperties, active, disabled })

            const originalOption = this._presetOptions.filter((option) => option.value === value)[0]

            if (originalOption) {
              const dataset = originalOption.dataset || {}

              for (const [dataProperty, dataValue] of Object.entries(dataset)) {
                opt.dataset[dataProperty] = typeof dataValue === 'string' ? dataValue : undefined
              }
            }

            return opt
          }
        }
      }
    });
  }
}