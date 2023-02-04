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
						<SidebarLink href='www.google.com' onClick={toggle}>
							Github
						</SidebarLink>
						<SidebarLink href='www.google.com' onClick={toggle}>
							Figma
						</SidebarLink>
					</SidebarMenu>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	)
}

export default Sidebar
