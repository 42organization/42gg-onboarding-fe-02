import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { isNormal, isManager, isAdmin } from "./LoginAtom";
import { useRecoilValue } from "recoil";

function MyNavLink(props) {
    const { listName } = props;

    return (
        <NavLink className="sideNav">{listName}</NavLink>
    )
}


const SideBar = () => {
    const [drawer, setDrawer] = useState(false);

    const handleDrawerOpen = () => {
        setDrawer(true);
    };
    
    const handleDrawerClose = () => {
        setDrawer(false);
    };

    let listName;
    if (useRecoilValue(isNormal) === true) {
        listName = "Normal";
    } else if (useRecoilValue(isManager) === true) {
        listName = "Manager";
    } else if (useRecoilValue(isAdmin) === true) {
        listName = "Admin";
    }


    return (
        <aside>
            <Button variant="outlined" onClick={drawer ? handleDrawerClose : handleDrawerOpen}>Menu</Button>
            <nav className={ drawer ? "isOpen" : "isClose" }>
                <MyNavLink listName={listName} />
                <MyNavLink listName={listName} />
                <MyNavLink listName={listName} />
                <MyNavLink listName={listName} />
                <MyNavLink listName={listName} />
            </nav>
        </aside>
        
    )

}

export default SideBar;
