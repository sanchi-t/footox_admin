import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SubMenu} from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
background: #15171c;
height: 50px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
font-size: 1.5rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;
let val2;
const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => {
	val2={h:'abc'};
	setSidebar(!sidebar);
	
};

return (
	<>
	<IconContext.Provider value={{ color: "#ffff" }}>
		<Nav>
		<NavIcon to="#">
			<FaIcons.FaBars onClick={showSidebar} />
		</NavIcon>
		</Nav>
		<SidebarNav sidebar={sidebar}>
		<SidebarWrap>
			<NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon>
			<SubMenu  />;
			
		</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export {Sidebar,val2};
