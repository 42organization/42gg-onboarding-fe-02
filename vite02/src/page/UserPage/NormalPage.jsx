import React from "react";
import { NavBarNormal } from "../../component/TopNav";
import SideBar from "../../component/SideNav";

function NormalPage() {
    return (
        <div>
            <NavBarNormal />
            <main>
                <SideBar />
            </main>
        </div>
    )
}

export default NormalPage;