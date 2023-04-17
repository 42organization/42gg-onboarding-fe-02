import React, { useState } from "react";
import "../scss/layout.scss"
import LogoutButton from "./ui/LogoutButton";
import { Link } from "react-router-dom";
import { 
    Tabs,
    Tab,
} from "@mui/material";

function LinkTab(props) {
    return (
        <Tab className="linkTab"
            component={Link}
            {...props}
        />
    );
}

export const NavBarNormal = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <header className="topNav">
            <div>
                <a href="/normal">
                    <h1>FE-02</h1>
                </a>
            </div>
            <Tabs className="navTabs" value={value} onChange={handleChange} aria-label="nav tabs example">
                <LinkTab label="홈" to="/normal"/>
                <LinkTab label="추천 목록" to="/normal/recommend-list"/>
                <LinkTab label="상품 목록" to="/normal/product-list"/>
                <LinkTab label="설정" to="/normal/setting"/>
            </Tabs>
            <LogoutButton />
        </header>
    );
}

export const NavBarManager = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <header className="topNav">
            <a href="/manager">
                <h1>FE-02</h1>
            </a>            
            <Tabs className="navTabs" value={value} onChange={handleChange} aria-label="nav tabs example" centered>
                <LinkTab label="홈" to="/manager"/>
                <LinkTab label="사용자 목록" to="/manager/user-list"/>
                <LinkTab label="상품 관리" to="/manager/product-manage"/>
                <LinkTab label="통계" to="/manager/statistics"/>
                <LinkTab label="설정" to="/manager/setting"/>
            </Tabs>
            <LogoutButton />
        </header>
    );
}

export const NavBarAdmin = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <header className="topNav">
            <a href="/admin">
                <h1>FE-02</h1>
            </a>            
            <Tabs className="navTabs" value={value} onChange={handleChange} aria-label="nav tabs example" centered>
                <LinkTab label="홈" to="/admin"/>
                <LinkTab label="사용자 목록" to="/admin/user-list"/>
                <LinkTab label="디자인 모드" to="/admin/design-mode"/>
                <LinkTab label="사용자 권한" to="/admin/user-auth"/>
                <LinkTab label="설정" to="/admin/setting"/>
            </Tabs>
            <LogoutButton />
        </header>
    );
}