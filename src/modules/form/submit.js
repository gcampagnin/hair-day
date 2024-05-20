import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Data atual para formatar o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega data atual e define a data mínima.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
	event.preventDefault()
}