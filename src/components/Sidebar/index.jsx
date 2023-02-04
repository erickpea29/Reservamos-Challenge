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
							href='http://www.google.com'
							target='_blank'
							onClick={toggle}
						>
							Github
						</SidebarLink>
						<SidebarLink
							href='http://www.google.com'
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
