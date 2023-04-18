
import React from "react";
import { Link } from "react-router-dom";
import styles from "./scss/style.module.scss";
import LogoutButton from './page/LogoutButton';
import Button from '@mui/material/Button';

function Sidebar() {
	return (
		<div className={styles.SidebarWrep}>
			<nav>
			<Link to="/about">
				<Button>About</Button>
			</Link>
				<Link to="/Home">
					<Button>Menu</Button>
				</Link>
				<Link to="/Profile">
					<Button>Profile</Button>
				</Link>
				<Link to="/Login">
						<LogoutButton />
				</Link>
			</nav>
		</div>
	);
}

export default Sidebar;