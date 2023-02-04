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
	const [currentWeather, setCurrentWeather] = useState(null)

	const handleOnSearchChange = (searchData) => {
		const lat = searchData.lat
		const long = searchData.long

		const CurrentWeatherFetch = fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=hourly,minutely&appid=a5a47c18197737e8eeca634cd6acb581`,
		)

		Promise.all([CurrentWeatherFetch]).then(async (responses) => {
			const CurrentWeatherResponse = await responses[0].json()

			setCurrentWeather({ ...CurrentWeatherResponse })
		})
	}

	console.log(currentWeather)
	return (
		<>
			<WeatherContainer>
				<SelectContainer>
					<Select onSearchChange={handleOnSearchChange} />
				</SelectContainer>
				<CurrentWeatherContainer>
					<CurrentWeather data={currentWeather} />
				</CurrentWeatherContainer>
			</WeatherContainer>
			<br />
			<DailyWeather data={currentWeather} />
		</>
	)
}

export default WeatherModal
