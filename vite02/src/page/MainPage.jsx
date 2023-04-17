import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Button } from "@mui/material";

function MainPage() {
    return (
        <div className="mainPage">
            <div className="loginBtns">
                <Button variant="outlined">
                    <NavLink to="/normal-login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "pending"}>
                        normal
                    </NavLink>
                </Button>
                <Button variant="outlined">
                    <NavLink to="/manager-login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "pending"}>
                        manager
                    </NavLink>
                </Button>
                <Button variant="outlined">
                    <NavLink to="/admin-login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "pending"}>
                        admin
                    </NavLink>
                </Button>
            </div>
            <Outlet />
        </div>
    )
}

export default MainPage;