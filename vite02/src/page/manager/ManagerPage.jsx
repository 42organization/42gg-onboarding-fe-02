import React from "react";
import { NavBarManager } from "../../component/TopNav";
import SideBar from "../../component/SideBar";
import { Outlet } from "react-router-dom";

function ManagerPage() {
    return (
        <div>
            <NavBarManager />
            <aside>
                <SideBar />
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default ManagerPage;