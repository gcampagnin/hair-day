import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, name, when }) {
	try {
		await fetch(`${apiConfig.baseURL}/schedules`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id,
				name,
				when
			}),
		})

		alert("Agendamento realizado com sucesso!")
	} catch (error) {
		alert("Erro ao agendar horário")
		console.log(error)
	}
}