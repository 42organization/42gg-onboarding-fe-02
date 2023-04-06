import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import LoginButton from "../ui/LoginButton";
import LoginInput from "../ui/LoginInput";

function LoginPage(props) {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");

    // const navigate = useNavigate();

    return (
        <form name="loginForm">
            <LoginInput value={userId} placeholder="ID" onChange={(event) => setUserId(event.target.value)} />
            <LoginInput value={userPw} placeholder="PASSWORD"
            onChange={(event) => setUserPw(event.target.value)} />
            <LoginButton title="로그인" onClick={(event) => {
                event.preventDefault();
            }}/>
        </form>
    );
}

export default LoginPage;