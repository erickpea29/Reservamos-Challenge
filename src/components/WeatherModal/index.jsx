import React, { useState } from 'react'
import Select from '../Select'
import CurrentWeather from '../CurrentWeather'
import DailyWeather from '../DailyWeather'
import {
	WeatherContainer,
	SelectContainer,
	CurrentWeatherContainer,
} from './styled'

const WeatherModal = () => {
	const [weatherData, setWeatherData] = useState(null)

	const handleOnSearchChange = (searchData) => {
		const lat = searchData.lat
		const long = searchData.long

		if (lat !== null && long !== null) {
			const promiseOptions = fetch(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=hourly,minutely&appid=a5a47c18197737e8eeca634cd6acb581`,
			)

			Promise.all([promiseOptions]).then(async (responses) => {
				const weatherResponse = await responses[0].json()

				setWeatherData({ ...weatherResponse })
			})
		}
	}

	return (
		<>
			<WeatherContainer>
				<SelectContainer>
					<Select onSearchChange={handleOnSearchChange} />
				</SelectContainer>
				<CurrentWeatherContainer>
					<CurrentWeather data={weatherData} />
				</CurrentWeatherContainer>
			</WeatherContainer>
			<br />
			{weatherData && <DailyWeather data={weatherData} />}
			{!weatherData && <div>ola</div>}
		</>
	)
}

export default WeatherModal
