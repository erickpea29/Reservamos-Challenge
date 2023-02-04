import styled from 'styled-components'

export const DailyWeatherContainer = styled.div`
	display: flex;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

export const SingleContainer = styled.div`
	background-color: #fff;
	border-radius: 10px;
	margin: -15px 20px 0 20px;
	width: 200px;
	height: 150px;
	display: flex;
	align-items: center;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`
