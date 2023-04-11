import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div>
            <Link to="/normalLogin">
                <button>normal</button>
            </Link>
            <Link to="/managerLogin">
                <button>manager</button>
            </Link>
            <Link to="/adminLogin">
                <button>admin</button>
            </Link>
            
        </div>
    )
}

export default MainPage;