import React from "react";
import AdminLoginInput from "../component/ui/logininput/AdminLoginInput";
import ManagerLoginInput from "../component/ui/logininput/ManagerLoginInput";
import NormalLoginInput from "../component/ui/logininput/NormalLoginInput";
import GoMain from "../component/utils/GoMain";

export function NormalLoginPage () {
    return (
        <div className="NormalLoginPage">
            <NormalLoginInput />
            <GoMain />
        </div>
    );
}

export function ManagerLoginPage () {
    
    return (
        <div className="ManagerLoginPage">
            <ManagerLoginInput />
            <GoMain />
        </div>
    );
}

export function AdminLoginPage () {
    
    return (
        <div className="AdminLoginPage">
            <AdminLoginInput />
            <GoMain />
        </div>
    );
}
