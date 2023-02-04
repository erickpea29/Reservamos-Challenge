import styled from 'styled-components'

export const WeatherContainer = styled.div`
	width: 65%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 50px auto;
	align-items: center;
	background-image: linear-gradient(
		to right,
		rgba(102, 186, 91, 1),
		rgba(102, 186, 91, 0.7)
	);
	padding: 40px 30px;
	border-radius: 20px;
	justify-content: space-evenly;
`
export const SelectContainer = styled.div`
	width: 50%;
	height: 100%;
	position: relative;
	justify-content: center;
	align-items: center;
`

export const CurrentWeatherContainer = styled.div`
	background: #fff;
	padding: 50px 40px;
	border-radius: 20px;
`
