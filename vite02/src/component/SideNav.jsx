import React from "react";
import { NavLink } from "react-router-dom";
import "../SideNav.scss"

const SideBar = () => {
    return (
        <div>
            <nav className="sideBar">
                <div className="onoffBtn">
                    <button>→</button>
                </div>
                <ul>
                    <li>
                        <NavLink>목록1</NavLink>
                    </li>
                    <li>
                        <NavLink>목록1</NavLink>
                    </li>
                    <li>
                        <NavLink>목록1</NavLink>
                    </li>
                    <li>
                        <NavLink>목록1</NavLink>
                    </li>
                    <li>
                        <NavLink>목록1</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar;
