import React from 'react'
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
} from './styled'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<Icon onClick={toggle}>
					<CloseIcon />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink
							href='https://github.com/erickpea29/Reservamos-Challenge.git'
							target='_blank'
							onClick={toggle}
						>
							Github
						</SidebarLink>
						<SidebarLink
							href='https://www.figma.com/file/5MUMNLKe0dLGgN4I73OnYz/Reservamos-Challenge?node-id=0%3A1&t=MsaPg5H0rzUCjJml-1'
							target='_blank'
							onClick={toggle}
						>
							Figma
						</SidebarLink>
					</SidebarMenu>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	)
}

export default Sidebar
