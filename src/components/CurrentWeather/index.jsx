import * as Separator from '@radix-ui/react-separator'
import './styled.css'
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

const CurrentWeather = ({ data }) => {
	const today = new Date()

	let now = today.toLocaleTimeString('en-US')

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
		{ name: 'overcast clouds', icon: <BsClouds size={70} /> },
		{ name: 'scattered clouds', icon: <AiOutlineCloud size={70} /> },
		{ name: 'broken clouds', icon: <BsClouds size={70} /> },
		{ name: 'shower rain', icon: <BsCloudDrizzle size={70} /> },
		{ name: 'rain', icon: <BsCloudRainHeavy size={70} /> },
		{ name: 'thunderstorm', icon: <IoIosThunderstorm size={70} /> },
		{ name: 'snow options', icon: <BsSnow size={70} /> },
		{ name: 'mist', icon: <WiDust size={70} /> },
		{ name: 'rain and snow,', icon: <BsSnow size={70} /> },
		{ name: 'fog', icon: <WiDust size={70} /> },
		{ name: 'moderate rain', icon: <BsCloudDrizzle size={70} /> },
		{ name: 'light rain', icon: <IoIosThunderstorm size={70} /> },
		{ name: 'light snow', icon: <BsSnow size={70} /> },
	]

	const capitalized = data?.current.weather[0].description.replace(
		/^./,
		data?.current.weather[0].description[0].toUpperCase(),
	)

	if (data !== null) {
		return (
			<div style={{ width: '100%', maxWidth: 300, margin: '0 15px' }}>
				<div style={{ display: 'flex', height: 20, alignItems: 'center' }}>
					{icon.map((item) => {
						if (item.name === data?.current.weather[0].description) {
							return item.icon
						}
					})}
					<Separator.Root
						className='SeparatorRoot'
						decorative
						orientation='vertical'
						style={{ margin: '0 15px' }}
					/>
					<div style={{ width: '100%', maxWidth: 300, margin: '0 15px' }}>
						<p className=''>Weather</p>
						<p className='city'>
							{day}, {now}
						</p>
						<p>{capitalized}</p>
					</div>
				</div>
				<br />
				<Separator.Root
					className='SeparatorRoot'
					orientation='horizontal'
					style={{ margin: '15px 0' }}
				/>
				<div style={{ display: 'flex', height: 20, alignItems: 'center' }}>
					<div className='temp'>{data?.current.temp}°</div>

					<div
						style={{
							width: '100%',
							maxWidth: 300,
							margin: '0 15px',
							paddingTop: '15px',
						}}
						className='info'
					>
						<p>Humidity: {data?.current.humidity}%</p>
						<p>Wind: {data?.current.wind_speed} km/h</p>
						<p>UVI: {data?.current.uvi}</p>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div>
				<FiSun size={70} />
			</div>
		)
	}
}

export default CurrentWeather
