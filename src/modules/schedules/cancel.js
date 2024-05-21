import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll('.period')

// Gerar evento de click para cada lista (manhã, tarde e noite).
periods.forEach((period) => {
	period.addEventListener('click', async (event) => {
		if(event.target.classList.contains("cancel-icon")) {
			// Obter a li pai do elemento clicado.
			const item = event.target.closest("li")

			// Obter o id do agendamento.
			const { id } = item.dataset

			// Confirma que o id foi selecionado.
			if(id) {
				// Confirma se deseja cancelar o agendamento.
				const isConfirm = confirm("Deseja cancelar o agendamento?")

				if(isConfirm) {
					// Cancela o agendamento e recarrega a lista.
					await scheduleCancel({ id })
					schedulesDay()
				}
			}
		}
	})
})
