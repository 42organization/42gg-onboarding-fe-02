import React from "react";
import { NavBarManager } from "../../component/TopNav";
import SideBar from "../../component/SideBar";
import Content from "../../component/Content";

function ManagerPage() {
    return (
        <div>
            <NavBarManager />
            <main>
                <SideBar />
                <Content title="빈 컨텐츠" sub="내용을 채워주세요"/>
            </main>
        </div>
    )
}

export default ManagerPage;