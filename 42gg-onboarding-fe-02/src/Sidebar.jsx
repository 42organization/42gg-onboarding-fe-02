
import React from "react";
import { Link } from "react-router-dom";
//import styles from "./scss/style.module.scss";
import LogoutButton from './page/LogoutButton';
/* import styled from 'styled-components';

const SidebarWrep = styled.div`
display: flex;
//flex-direction: column;
align-items: center;
justify-content: center;
position: fixed;
width: 200px;
//background-color: rgb(240, 247, 92);
height: 100vh;
`;

const Right = styled.div`
	width: 10%;
	height:5rem;
	margin-left: 10%;
`; */

function Sidebar() {

	return (
		<div>
			<Link to="/about">
				<button>About</button>
			</Link>
				<Link to="/Home">
					<button>Menu</button>
				</Link>
				<Link to="/Profile">
					<button>Profile</button>
				</Link>
				<Link to="/Login">
						<LogoutButton />
				</Link>
		</div>
	);
}

export default Sidebar;