import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavLinks,
} from './styled'

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo>
						<img src='src\assets\logo.png'></img>
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu style={{ fontSize: '1.2rem', fontWeight: '520' }}>
						<NavLinks href='wwww.google.com'>Github</NavLinks>
						<NavLinks href='wwww.google.com'>Figma</NavLinks>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
