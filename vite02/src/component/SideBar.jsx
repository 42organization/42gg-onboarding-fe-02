import React from "react";
import { NavLink } from "react-router-dom";
import "../SideBar.scss"

const SideBar = () => {
    return (
        <div>
            <nav className="sideBar">
                <div>
                    <NavLink>리스트1</NavLink>
                </div>
                <div>
                    <NavLink>리스트2</NavLink>
                </div>
                <div>
                    <NavLink>리스트3</NavLink>
                </div>
                <div>
                    <NavLink>리스트4</NavLink>
                </div>
                <div>
                    <NavLink>리스트5</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default SideBar;
