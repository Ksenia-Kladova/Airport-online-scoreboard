import { arrayFlights } from "./dataArray.js"

export let newArrayFlights;

export function saveLocal(key, arr) {
  localStorage.setItem(key, JSON.stringify(arr))
}

export function getLocal(key) {
  let data = localStorage.getItem(key);
  if (data != '' && data != null) {
    newArrayFlights = JSON.parse(data)
  } else {
    saveLocal("scoreboard", arrayFlights);
  }
}

getLocal("scoreboard");