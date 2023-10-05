import { render } from "./render.js";
import { newArrayFlights } from "./localStorage.js";
import { saveLocal, getLocal } from "./localStorage.js";
import JustValidatePluginDate from "https://cdn.jsdelivr.net/npm/just-validate-plugin-date@1.2.0/+esm";

const form = document.getElementById('form');
const inputDate = document.getElementById('date');
const inputTime = document.getElementById('time');
const inputFlight = document.getElementById('flight');
const selectDirection = document.getElementById('direction');
const selectAviacompany = document.getElementById('aviacompany');
const selectStatus = document.getElementById('status');
const selectType = document.getElementById('fromTo');
let objChoice = {
  searchEnabled: false,
  itemSelectText: 'L',
  tabindex: 0,
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
  },
};

const choicesDirection = new Choices(selectDirection, objChoice);
const choicesAviacompany = new Choices(selectAviacompany, objChoice);
const choicesStatus = new Choices(selectStatus, objChoice);
const choicesType = new Choices(selectType, objChoice);

inputDate.addEventListener('input', function () {
  let inputValue = this.value;
  if (inputValue.length === 2) {
    this.value = inputValue + '-';
  }
});

inputTime.addEventListener('input', function () {
  let inputValue = this.value;
  if (inputValue.length === 2) {
    this.value = inputValue + ':';
  }
});

const validation = new JustValidate('#form',
  {
    globalConfig: {
      validateBeforeSubmitting: true,
      focusInvalidField: true,
    },
  },
);

export function getForm(flag) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    validation
      .addField('#date', [
        {
          plugin: JustValidatePluginDate(() => ({
            format: 'dd-MM',
          })),
          errorMessage: 'Дата: день-месяц',
          successMessage: 'Заполнено'
        },
        {
          rule: 'required',
          errorMessage: 'Обязательно',
          successMessage: 'Заполнено'
        },
      ])
      .addField('#time', [
        {
          rule: 'required',
          errorMessage: 'Обязательно',
          successMessage: 'Заполнено'
        },
        {
          rule: 'customRegexp',
          value: /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/,
          errorMessage: 'Неверный формат',
          successMessage: 'Заполнено'
        },
      ])
      .addField('#direction', [
        {
          validator: (value) => {
            return value !== 'Направление';
          },
          errorMessage: 'Обязательно',
          successMessage: 'Заполнено'
        },
      ],
        {
          errorsContainer: '.scoreboard__form-wrapper--direction',
        }
      )
      .addField('#flight', [
        {
          rule: 'required',
          errorMessage: 'Обязательно',
        },
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'Введите больше трёх символов'
        },
        {
          rule: 'maxLength',
          value: 20,
          errorMessage: 'Введите меньше 20 символов',
          successMessage: 'Заполнено'
        },
      ])
      .addField('#aviacompany', [
        {
          validator: (value) => {
            return value !== 'Авиакомпания';
          },
          errorMessage: 'Обязательно',
          successMessage: 'Заполнено'
        },
      ],
        {
          errorsContainer: '.scoreboard__form-wrapper--aviacompany',
        }
      )
      .addField('#status', [
        {
          validator: (value) => {
            return value !== 'Статус';
          },
          errorMessage: 'Обязательно',
          successMessage: 'Заполнено'
        },
      ],
        {
          errorsContainer: '.scoreboard__form-wrapper--status',
        }
      )
      .addField('#fromTo', [
        {
          validator: (value) => {
            return value !== 'Тип';
          },
          errorMessage: 'Обязательно',
          successMessage: 'Заполнено'
        },
      ],
        {
          errorsContainer: '.scoreboard__form-wrapper--fromto',
        })
      .onSuccess(() => {
        const selectedOptionStatus = selectStatus.options[selectStatus.selectedIndex];
        const selectedOptionAviacompany = selectAviacompany.options[selectAviacompany.selectedIndex];
        const formWrappers = document.querySelectorAll('.scoreboard__form-wrapper');

        let flight = {
          data: {
            date: inputDate.value,
            time: inputTime.value,
            direction: selectDirection.value,
            flight: inputFlight.value,
            aviacompany: {
              name: selectAviacompany.value,
              image: selectedOptionAviacompany.getAttribute("data-image")
            },
            status: {
              color: selectedOptionStatus.getAttribute("data-color"),
              name: selectStatus.value,
              selected: true,
            },
          },
          fromTo: selectType.value,
          id: self.crypto.randomUUID()
        }

        newArrayFlights.push(flight);

        this.reset();
        choicesDirection.removeActiveItems();
        choicesDirection.setChoiceByValue('Направление');
        choicesAviacompany.removeActiveItems();
        choicesAviacompany.setChoiceByValue('Авиакомпания');
        choicesStatus.removeActiveItems();
        choicesStatus.setChoiceByValue('Статус');
        choicesType.removeActiveItems();
        choicesType.setChoiceByValue('Тип');

        saveLocal("scoreboard", newArrayFlights);
        render(flag);
      });
  });
}