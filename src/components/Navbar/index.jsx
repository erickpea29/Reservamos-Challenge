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
						<img src='/logos.png'></img>
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu style={{ fontSize: '1.2rem', fontWeight: '520' }}>
						<NavLinks
							href='https://github.com/erickpea29/Reservamos-Challenge.git'
							target='_blank'
						>
							Github
						</NavLinks>
						<NavLinks
							href='https://www.figma.com/file/5MUMNLKe0dLGgN4I73OnYz/Reservamos-Challenge?node-id=0%3A1&t=MsaPg5H0rzUCjJml-1'
							target='_blank'
						>
							Figma
						</NavLinks>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
