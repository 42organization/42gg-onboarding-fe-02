
import React from "react";
import { Link } from "react-router-dom";
import styles from "./scss/style.module.scss";
import LogoutButton from './page/LogoutButton';

function Sidebar() {

	return (
		<div className={styles.SidebarWrap}>
			<Link to="/about">
				<button>About</button>
			</Link>
				<Link to="/users">
					<button>Users</button>
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