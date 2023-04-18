import React from "react";
import { NavBarNormal } from "../component/TopNav";
import SideBar from "../component/SideBar";
import { Outlet } from "react-router-dom";
import "../scss/layout.scss";

function HomePage() {
    return (
        <div>
            <NavBarNormal />
            <aside>
                <SideBar />
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default HomePage;