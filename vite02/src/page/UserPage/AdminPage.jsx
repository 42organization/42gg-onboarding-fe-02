import React from "react";
import { NavBarAdmin } from "../../component/TopNav";
import SideBar from "../../component/SideNav";

function AdminPage() {
    return (
        <div>
            <NavBarAdmin />
            <main>
                <SideBar />

            </main>
        </div>
    )
}

export default AdminPage;