import React from "react";
import { isNormal, isManager, isAdmin } from "../LoginAtom";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";


const LogoutButton = () => {
    const setIsNormal = useSetRecoilState(isNormal);
    const setIsManager = useSetRecoilState(isManager);
    const setIsAdmin = useSetRecoilState(isAdmin);
    const navigate = useNavigate();
    
    function ClickLogout () {
        setIsNormal(false);
        setIsManager(false);
        setIsAdmin(false);
        navigate("/");
    }
    
    return (
        <div>
            <button type="button" className="logoutBtn" onClick={ClickLogout}>로그아웃</button>
        </div>
    )
}

export default LogoutButton;