import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div>
            <Link to="/normal/Login">
                <button>normal</button>
            </Link>
            <Link to="/manager/Login">
                <button>manager</button>
            </Link>
            <Link to="/admin/Login">
                <button>admin</button>
            </Link>
            
        </div>
    )
}

export default MainPage;