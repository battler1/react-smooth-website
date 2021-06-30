import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SideBarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SideBarMenu>
					<SidebarLink to="about">About</SidebarLink>
					<SidebarLink to="discover">Discover</SidebarLink>
					<SidebarLink to="services">Services</SidebarLink>
					<SidebarLink to="signup">Sign Up</SidebarLink>
				</SideBarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/signin">Sign In</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
