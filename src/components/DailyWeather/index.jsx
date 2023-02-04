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
		{ name: 'clear sky', icon: <FiSun size={50} /> },
		{ name: 'few clouds', icon: <CiCloudSun size={50} /> },
		{ name: 'scattered clouds', icon: <AiOutlineCloud size={50} /> },
		{ name: 'overcast clouds', icon: <BsClouds size={50} /> },
		{ name: 'broken clouds', icon: <BsClouds size={50} /> },
		{ name: 'shower rain', icon: <BsCloudDrizzle size={50} /> },
		{ name: 'rain', icon: <BsCloudRainHeavy size={50} /> },
		{ name: 'thunderstorm', icon: <IoIosThunderstorm size={50} /> },
		{ name: 'snow', icon: <BsSnow size={50} /> },
		{ name: 'light snow', icon: <BsSnow size={50} /> },
		{ name: 'rain and snow,', icon: <BsSnow size={50} /> },
		{ name: 'mist', icon: <WiDust size={50} /> },
		{ name: 'fog', icon: <WiDust size={50} /> },
		{ name: 'moderate rain', icon: <BsCloudDrizzle size={50} /> },
		{ name: 'light rain', icon: <IoIosThunderstorm size={50} /> },
	]

	return (
		<>
			<DailyWeatherContainer>
				{data?.daily.map((item, index) => {
					return (
						<SingleContainer>
							<div
								key={index}
								style={{ width: '85%', maxWidth: 300, margin: '0 15px' }}
							>
								<div
									style={{ display: 'flex', height: 30, alignItems: 'center' }}
								>
									<Separator.Root
										className='SeparatorRoot'
										decorative
										orientation='vertical'
										style={{
											margin: '0 30px  ',
										}}
									/>
									{icon.map((items) => {
										if (items.name === item.weather[0].description) {
											return items.icon
										}
									})}
									<Separator.Root
										className='SeparatorRoot'
										decorative
										orientation='vertical'
										style={{ margin: '0 15px' }}
									/>
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
