import React from "react";
import { NavLink } from "react-router-dom";
import "../TopNav.scss"
import LogoutButton from "./ui/LogoutButton";

export const NavBarNormal = () => {
    return (
        <header>
            <div>
                <a href="/normal/home">
                    <h1>FE-02</h1>
                </a>
            </div>
            <nav className="navBar">
                <div>
                    <NavLink to="/normal/home">홈</NavLink>
                </div>
                <div>
                    <NavLink to="/normal/recommend-list">추천 목록</NavLink>
                </div>
                <div>
                    <NavLink to="/normal/product-list">상품 목록</NavLink>
                </div>
                <div>
                    <NavLink to="/normal/setting">설정</NavLink>
                </div>
            </nav>
            <div className="logoutBtn">
                <LogoutButton />
            </div>
        </header>
    );
}

export const NavBarManager = () => {
    return (
        <header>
                <a href="/manager/home">
                    <h1>FE-02</h1>
                </a>
            <nav className="navBar">
                <div>
                    <NavLink to="/manager/home">홈</NavLink>
                </div>
                <div>
                    <NavLink to="/manageradmin/user-list">사용자 목록</NavLink>
                </div>
                <div>
                    <NavLink to="/manager/product-manage">상품 관리</NavLink>
                </div>
                <div>
                    <NavLink to="/manager/statistics">통계</NavLink>
                </div>
                <div>
                    <NavLink to="/manager/setting">설정</NavLink>
                </div>
            </nav>
            <div className="logoutBtn">
                <LogoutButton />
            </div>
        </header>
    );
}

export const NavBarAdmin = () => {
    return (
        <header>
            <div>
                <a href="/admin/home">
                    <h1>FE-02</h1>
                </a>
            </div>
            <nav className="navBar">
                <div>
                    <NavLink to="/admin/home">홈</NavLink>
                </div>
                <div>
                    <NavLink to="/manageradmin/user-list">사용자 목록</NavLink>
                </div>
                <div>
                    <NavLink to="/admin/design">디자인 모드</NavLink>
                </div>
                <div>
                    <NavLink to="/admin/user-setting">사용자 관리</NavLink>
                </div>
                <div>
                    <NavLink to="/admin/setting">설정</NavLink>
                </div>
            </nav>
            <div className="logoutBtn">
                <LogoutButton />
            </div>
        </header>
    );
}