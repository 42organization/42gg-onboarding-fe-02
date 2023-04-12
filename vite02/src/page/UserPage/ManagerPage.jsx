import React from "react";
import { NavBarManager } from "../../component/TopNav";
import SideBar from "../../component/SideNav";

function ManagerPage() {
    return (
        <div>
            <NavBarManager />
            <main>
                <SideBar />
            </main>
        </div>
    )
}

export default ManagerPage;