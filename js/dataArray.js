const aeroflot = {
  name: "Аэрофлот",
  image: "../image/airlogo.jpg"
};
const airlines = {
  name: "S7 Airlines",
  image: "../image/airlineslogo.jpg"
};
const azimuth = {
  name: "Азимут",
  image: "../image/azimuthlogo.jpg"
}
const nordwind = {
  name: "Nordwind Airlines",
  image: "../image/nordwind.jpg"
}
const russia = {
  name: "Россия",
  image: "../image/russialogo.jpg"
}
const uralairlines = {
  name: "Ural Airlines",
  image: "../image/uralairlineslogo.jpg"
}

export let arrayFlights = [
  {
    data: {
      date: "04-27",
      time: "08: 55",
      direction: "Москва SVO",
      flight: "SU - 1651",
      aviacompany: aeroflot,
      status: {
        color: "green",
        name: "Прибыл",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },
  {
    data: {
      date: "04-27",
      time: "09: 20",
      direction: "Сочи",
      flight: "FV - 6502",
      aviacompany: russia,
      status: {
        color: "green",
        name: "Прибыл",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },
  {
    data: {
      date: "04-27",
      time: " 09: 40",
      direction: "Москва SVO",
      flight: "SU - 1637",
      aviacompany: aeroflot,
      status: {
        color: "green",
        name: "Прибыл",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },

  {
    data: {
      date: "04-27",
      time: "  09: 50",
      direction: "Москва DME",
      flight: "U6 - 526",
      aviacompany: uralairlines,
      status: {
        color: "black",
        name: "Посадка",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },

  {
    data: {
      date: "04-27",
      time: "10: 20",
      direction: "Самара",
      flight: "U6 - 484",
      aviacompany: airlines,
      status: {
        color: "black",
        name: "Посадка",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },

  {
    data: {
      date: "04-27",
      time: "10: 50",
      direction: " Москва SVO",
      flight: "SU - 1645",
      aviacompany: aeroflot,
      status: {
        color: "black",
        name: "Посадка",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },
  {
    data: {
      date: "04-27",
      time: "11: 15",
      direction: "Челябинск",
      flight: "U6 - 482",
      aviacompany: russia,
      status: {
        color: "red",
        name: "Отменен",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },

  {
    data: {
      date: "04-27",
      time: " 11: 40",
      direction: "Санкт Петербург",
      flight: "FV - 6892",
      aviacompany: nordwind,
      status: {
        color: "blue",
        name: "В полете",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },

  {
    data: {
      date: "04-27",
      time: " 12:05",
      direction: "Москва SVO",
      flight: "N4 - 124",
      aviacompany: airlines,
      status: {
        color: "blue",
        name: "В полете",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },

  {
    data: {
      date: "04-27",
      time: "12: 15",
      direction: "Казань",
      flight: "U6 - 615",
      aviacompany: uralairlines,
      status: {
        color: "red",
        name: "Задерживается",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },
  {
    data: {
      date: "04-27",
      time: "12: 20",
      direction: "Москва DME",
      flight: "U6 - 44",
      aviacompany: uralairlines,
      status: {
        color: "black",
        name: "Регистрация",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },

  {
    data: {
      date: "04-27",
      time: "12: 30",
      direction: "Москва DME",
      flight: "U6 - 34",
      aviacompany: uralairlines,
      status: {
        color: "black",
        name: "Регистрация",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },
  {
    data: {
      date: "04-27",
      time: "12: 45",
      direction: " Москва DME",
      flight: "S7 - 2008",
      aviacompany: azimuth,
      status: {
        color: "red",
        name: "Задерживается",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },

  {
    data: {
      date: "04-27",
      time: "12: 50",
      direction: "Москва SVO",
      flight: "SU - 1621",
      aviacompany: aeroflot,
      status: {
        color: "red",
        name: "Отменен",
        selected: true,
      },
    },
    fromTo: 'Прилёт',
    id: self.crypto.randomUUID()
  },

  {
    data: {
      date: "04-27",
      time: "12: 50",
      direction: "Москва SVO",
      flight: "SU - 1621",
      aviacompany: aeroflot,
      status: {
        color: "red",
        name: "Отменен",
        selected: true,
      },
    },
    fromTo: 'Вылет',
    id: self.crypto.randomUUID()
  },
];
