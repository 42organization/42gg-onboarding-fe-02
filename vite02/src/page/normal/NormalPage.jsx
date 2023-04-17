import React from "react";
import { NavBarNormal } from "../../component/TopNav";
import SideBar from "../../component/SideBar";
import { Outlet } from "react-router-dom";

function NormalPage() {
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

export default NormalPage;