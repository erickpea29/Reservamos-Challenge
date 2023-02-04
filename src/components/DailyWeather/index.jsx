import * as Separator from '@radix-ui/react-separator'
import { FiSun } from 'react-icons/fi'
import { CiCloudSun } from 'react-icons/ci'
import { AiOutlineCloud } from 'react-icons/ai'
import {
	BsClouds,
	BsCloudDrizzle,
	BsCloudRainHeavy,
	BsSnow,
} from 'react-icons/bs'
import { IoIosThunderstorm } from 'react-icons/io'
import { WiDust } from 'react-icons/wi'
import { DailyWeatherContainer, SingleContainer } from './styled'

const DailyWeather = ({ data }) => {
	const today = new Date()

	const weekday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]

	const d = new Date()
	let day = weekday[d.getDay()]

	const icon = [
		{ name: 'clear sky', icon: <FiSun size={70} /> },
		{ name: 'few clouds', icon: <CiCloudSun size={70} /> },
		{ name: 'scattered clouds', icon: <AiOutlineCloud size={70} /> },
		{ name: 'broken clouds', icon: <BsClouds size={70} /> },
		{ name: 'shower rain', icon: <BsCloudDrizzle size={70} /> },
		{ name: 'rain', icon: <BsCloudRainHeavy size={70} /> },
		{ name: 'thunderstorm', icon: <IoIosThunderstorm size={70} /> },
		{ name: 'snow options', icon: <BsSnow size={70} /> },
		{ name: 'mist', icon: <WiDust size={70} /> },
	]

	return (
		<>
			<DailyWeatherContainer>
				{data?.daily.map((item, index) => {
					return (
						<SingleContainer>
							<div
								key={index}
								style={{ width: '100%', maxWidth: 300, margin: '0 15px' }}
							>
								<div
									style={{ display: 'flex', height: 20, alignItems: 'center' }}
								>
									{icon.map((dat) => {
										if (dat.name === item.weather[0].description) {
											return dat.icon
										}
									})}
									<Separator.Root
										className='SeparatorRoot'
										decorative
										orientation='vertical'
										style={{ margin: '0 15px' }}
									/>
									<div
										style={{ width: '100%', maxWidth: 300, margin: '0 15px' }}
									>
										<p>{day}</p>
									</div>
								</div>
								<br />
								<Separator.Root
									className='SeparatorRoot'
									orientation='horizontal'
									style={{ margin: '15px 0' }}
								/>
								<div
									style={{
										display: 'flex',
										height: 20,
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<p
										style={{
											fontSize: '1rem',
											fontWeight: '600',
										}}
									>
										{item.temp.max}°.{' '}
									</p>
									<p>{item.temp.min}°.</p>
								</div>
							</div>
						</SingleContainer>
					)
				})}
			</DailyWeatherContainer>
		</>
	)
}

export default DailyWeather
