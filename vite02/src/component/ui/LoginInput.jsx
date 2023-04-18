import React, { useRef } from "react";
import { isNormal, isManager, isAdmin } from "../LoginAtom";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { 
    TextField,
    Button
} from "@mui/material";

function LoginInput() {
    const userId = useRef();
    const userPw = useRef();
    const setIsNormal = useSetRecoilState(isNormal);
    const setIsManager = useSetRecoilState(isManager);
    const setIsAdmin = useSetRecoilState(isAdmin);
    const navigate = useNavigate();

    const getUser = async (URL) => {
        const res = await fetch(URL);
        const data = await res.json();
        return data;
    }
    const users = getUser("/userInfo");
    
    const validId = (id, pw) => {
        users.then((value) => {
            const normalUser = value.normal;
            const managerUser = value.manager;
            const adminUser = value.admin;

            let found = false;

            normalUser.forEach((exist) => {
                if (id === exist.id && pw === exist.pw) {
                    setIsNormal(true);
                    found = true;
                    navigate("/home");
                }
            })
            managerUser.forEach((exist) => {
                if (id === exist.id && pw === exist.pw) {
                    setIsManager(true);
                    found = true;
                    navigate("/home");
                }
            })
            adminUser.forEach((exist) => {
                if (id === exist.id && pw === exist.pw) {
                    setIsAdmin(true);
                    found = true;
                    navigate("/home");
                }
            if (found === false) {
                alert("존재하지 않는 회원입니다.");
            }
            })
        })
    }

    const curVal = (user) => {
        return (user.current.value);
    }

    const fillIdPw = () => {
        if (curVal(userId) === "") {
            alert("아이디를 입력하세요.");
        } else if (curVal(userPw) === "") {
            alert("비밀번호를 입력하세요.");
        }
    }

    const clickCheckIdPw = () => {
        if (curVal(userId) === "" || curVal(userPw) === "") {
            fillIdPw();
        } else {
            validId(curVal(userId), curVal(userPw));
        }
    }

    const keyUpCheckInput = (e) => {
        if (e.key === 'Enter') {
            if (curVal(userId) === "" || curVal(userPw) === "") {
                fillIdPw();
            } else {
                validId(curVal(userId), curVal(userPw));
            }
        }
    }

    return (
        <div className="loginBox">
            <form className="loginInput">
                <TextField label="ID" variant="standard" inputProps={{ onKeyUp:keyUpCheckInput }}
                inputRef={userId}/>
                <TextField label="PASSWORD" variant="standard" type="password" inputProps={{ onKeyUp:keyUpCheckInput }} inputRef={userPw}/>
            </form>
            <Button size="string" variant="outlined" onClick={clickCheckIdPw}>로그인</Button>
        </div>
    );
}

export default LoginInput;