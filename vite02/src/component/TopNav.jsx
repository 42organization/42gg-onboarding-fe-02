import React, { useState } from "react";
import LogoutButton from "./ui/LogoutButton";
import { Link } from "react-router-dom";
import { 
    Tabs,
    Tab,
} from "@mui/material";
import { isNormal, isAdmin, isManager } from "./LoginAtom";
import { useRecoilValue } from "recoil";

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

    const isN = useRecoilValue(isNormal);
    const isM = useRecoilValue(isManager);
    const isA = useRecoilValue(isAdmin);

    if (isN) {
        return (
            <header className="topNav">
                <div>
                    <a href="/home">
                        <h1>FE-02</h1>
                    </a>
                </div>
                <Tabs className="navTabs" value={value} onChange={handleChange} aria-label="nav tabs example">
                    <LinkTab label="홈" to="/home"/>
                    <LinkTab label="추천 목록" to="/home/recommend-list"/>
                    <LinkTab label="상품 목록" to="/home/product-list"/>
                    <LinkTab label="설정" to="/home/normal-setting"/>
                </Tabs>
                <LogoutButton />
            </header>
        );
    } else if (isM) {    
        return (
            <header className="topNav">
                <a href="/home">
                    <h1>FE-02</h1>
                </a>            
                <Tabs className="navTabs" value={value} onChange={handleChange} aria-label="nav tabs example" centered>
                    <LinkTab label="홈" to="/home"/>
                    <LinkTab label="추천 목록" to="/home/recommend-list"/>
                    <LinkTab label="상품 목록" to="/home/product-list"/>
                    <LinkTab label="상품 관리" to="/home/product-manage"/>
                    <LinkTab label="설정" to="/home/manager-setting"/>
                </Tabs>
                <LogoutButton />
            </header>
        );
    } else if (isA) {
        return (
            <header className="topNav">
                <a href="/home">
                    <h1>FE-02</h1>
                </a>            
                <Tabs className="navTabs" value={value} onChange={handleChange} aria-label="nav tabs example" centered>
                    <LinkTab label="홈" to="/home"/>
                    <LinkTab label="추천 목록" to="/home/recommend-list"/>
                    <LinkTab label="상품 목록" to="/home/product-list"/>
                    <LinkTab label="상품 관리" to="/home/product-manage"/>

                    <LinkTab label="권한 관리" to="/home/user-auth"/>
                    <LinkTab label="설정" to="/home/admin-setting"/>
                </Tabs>
                <LogoutButton />
            </header>
        );
    }
}
