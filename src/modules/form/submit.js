import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para formatar o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega data atual e define a data mínima.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
	event.preventDefault()

	try {
		// Recuperar o nome do cliente.
		const name = clientName.value.trim()

		if(!name){
			return alert("Informe o nome do cliente")
		}

		// Recuperar a hora selecionado.
		const hourSelected = document.querySelector(".hour-selected")

		if(!hourSelected){
			return alert("Selecione um horário")
		}

		// Recuperar somente a hora e minuto.
		const [hour, minute] = hourSelected.textContent.split(":")

		// Inserir a hora na data.
		const when = dayjs(selectedDate.value).hour(hour).minute(minute).second(0)

		// Gera um ID.
		const id = new Date().getTime()

		// Envia o agendamento.
		await scheduleNew({
			id,
			name,
			when
		})
	} catch (error) {
		alert("Não foi possível realizar o agendamento")
		console.log(error)
	}
}