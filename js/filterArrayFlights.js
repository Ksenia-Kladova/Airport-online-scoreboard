export function filterArrayFlights(array, key) {
  let filteredArray = []
  if (key === 'out') {
    filteredArray = array.filter(flight => flight.fromTo === 'Вылет');
  } else {
    if (key === 'arrival') {
      filteredArray = array.filter(flight => flight.fromTo === 'Прилёт');
    }
  }

  return filteredArray;
}