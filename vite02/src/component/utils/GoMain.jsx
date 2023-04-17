import React from "react";
import { Link } from "react-router-dom";

function GoMain() {
    return (
        <div>
            <Link className="goMain" to="/">
                메인으로 돌아가기
            </Link>
        </div>
    )
}

export default GoMain;