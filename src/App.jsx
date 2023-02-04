import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import WeatherModal from './components/WeatherModal'

const App = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<Router>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<WeatherModal />
		</Router>
	)
}

export default App
