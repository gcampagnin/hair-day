import dayjs from "dayjs"

import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({ date }) {
	try {
		const response = await fetch(`${apiConfig.baseURL}/schedules`)

		const data = await response.json()

		// Filtrar os agendamentos do dia selecionado.
		const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

		return dailySchedules
	} catch (error) {
		console.log(error)
		alert("Não foi possível carregar os agendamentos do dia selecionado")
	}
}