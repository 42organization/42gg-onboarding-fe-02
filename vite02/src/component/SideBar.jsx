import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import "../scss/layout.scss";

function MyNavLink(props) {
    const { content } = props;

    return (
        <NavLink className="sideNav">{content}</NavLink>
    );
}


const SideBar = () => {
    const [drawer, setDrawer] = useState(false);

    const handleDrawerOpen = () => {
        setDrawer(true);
    };
    
    const handleDrawerClose = () => {
        setDrawer(false);
    };


    return (
        <aside>
            <Button variant="outlined" onClick={drawer ? handleDrawerClose : handleDrawerOpen}>Menu</Button>
            <nav className={ drawer ? "isOpen" : "isClose" }>
                <MyNavLink content="리스트 1" />
                <MyNavLink content="리스트 2" />
                <MyNavLink content="리스트 3" />
                <MyNavLink content="리스트 4" />
                <MyNavLink content="리스트 5" />
                <MyNavLink content="리스트 6" />
            </nav>
        </aside>
        
    )

}

export default SideBar;
