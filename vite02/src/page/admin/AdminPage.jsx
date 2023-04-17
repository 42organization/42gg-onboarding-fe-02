import React from "react";
import { NavBarAdmin } from "../../component/TopNav";
import SideBar from "../../component/SideBar";
import { Outlet } from "react-router-dom";

function AdminPage() {
    return (
        <div>
            <NavBarAdmin />
            <aside>
                <SideBar />
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminPage;