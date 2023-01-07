import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

const SidebarLink = styled(Link)`
display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;

&:hover {
	background: #252831;
	border-left: 4px solid green;
	cursor: pointer;
}
`;

const SidebarLabel = styled.span`
margin-left: 16px;
`;

const DropdownLink = styled(Link)`
background: #252831;
height: 60px;
padding-left: 3rem;
display: flex;
align-items: center;
text-decoration: none;
color: #f5f5f5;
font-size: 18px;

&:hover {
	background: green;
	cursor: pointer;
}
`;

let val1;

const SubMenu = () => {

const [subnav, setSubnav] = useState(false);
const navigate = useNavigate();


const noaddc=function(){
	
	val1 = { h: "Add Coupon", status: '', code: '', category: '', startDate: '', endDate: '', type: '', value: '', limit: '' };
	console.log("item",val1)

	// if(item?.[1]?.title==='Coupons Add'){
	// 	// console.log('yayy',item?.[1]?.title,window.location);
	// 	
	// 	console.log('new',val1);
	// 	}
	// else{
	// 	console.log(item);
	// 	

	// }
}

const showSubnav = () => {
	setSubnav(!subnav)
	val1={h:'abc'};
	console.log('val1',val1)};
// console.log('olchanged',val1);
return (
	<>
	<SidebarLink to={'#'}
	onClick={showSubnav}>
		<div>
		
		<SidebarLabel >{'Sales Promotion'}</SidebarLabel>
		</div>
		<div >
		{subnav
			? <RiIcons.RiArrowUpSFill />
			: [
				{
					title: "Coupons List",
					path: "/coupon",
					icon: <IoIcons.IoIosPaper />,
				},
				{
					title: "Coupons Add",
					path: "/couponAdd",
					icon: <IoIcons.IoIosPaper />,
				},
				
				]
			? <RiIcons.RiArrowDownSFill />
			: null}
		</div>
		</SidebarLink>
		<div>
		{subnav
			? <div><DropdownLink to={'/coupon'} key={0}>
			{<IoIcons.IoIosPaper />}
			<SidebarLabel onClick={noaddc} >{'Coupons List'}</SidebarLabel>
			</DropdownLink>
			<DropdownLink to={'/couponAdd'} key={1}>
			{<IoIcons.IoIosPaper />}
			<SidebarLabel onClick={noaddc}>{'Coupons Add'}</SidebarLabel>
			</DropdownLink></div>
			: [
				{
					title: "Coupons List",
					path: "/coupon",
					icon: <IoIcons.IoIosPaper />,
				},
				{
					title: "Coupons Add",
					path: "/couponAdd",
					icon: <IoIcons.IoIosPaper />,
				},
				
				]
			? null
			: null}
			</div>
	
			
	<SidebarLink to={'/admin'}>
		<div>
		<SidebarLabel >{'Admin'}</SidebarLabel>
		</div>
		<div >
		</div>
	</SidebarLink>
	<SidebarLink to={'/banner'}>
		<div>
		<SidebarLabel >{'Banner'}</SidebarLabel>
		</div>
		<div >
		</div>
	</SidebarLink>
			
	</>
);
};

export {SubMenu,val1};