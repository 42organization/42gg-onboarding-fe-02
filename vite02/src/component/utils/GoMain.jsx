import React from "react";
import { Link } from "react-router-dom";

function GoMain() {
    return (
        <div>
            <Link to="/">
                메인화면으로 돌아가기
            </Link>
        </div>
    )
}

export default GoMain;