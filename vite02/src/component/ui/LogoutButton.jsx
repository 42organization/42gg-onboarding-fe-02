import React from "react";
import { isNormal, isManager, isAdmin } from "../LoginAtom";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

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
        <div className="logoutBtn">
            <Button variant="outlined" onClick={ClickLogout}>로그아웃</Button>
        </div>
    )
}

export default LogoutButton;