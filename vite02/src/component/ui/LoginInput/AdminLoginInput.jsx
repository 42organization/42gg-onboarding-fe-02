import React, { useRef } from "react";
import { isAdmin } from "../../LoginAtom";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { 
    TextField,
    FormControl,
    Button
} from "@mui/material";

function AdminLoginInput() {
    const userId = useRef(null);
    const userPw = useRef(null);
    const setIsAdmin = useSetRecoilState(isAdmin);
    const navigate = useNavigate();
    
    const getUser = async (URL) => {
        const res = await fetch(URL)
        const data = await res.json();
        return data;
    }
    const users = getUser("/userInfo");

    const validId = (id, pw) => {
        users.then((value) => {
            value.admin.map((exist) => {if (id === exist.id && pw === exist.pw) {
                setIsAdmin(true);
                navigate("/admin");
            }}
        )}
    )}

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
            <FormControl className="loginInput" sx={{ m: 1, width: '25ch' }} id="outlined-basic" variant="outlined">
                <TextField label="ID" inputProps={{ onKeyUp:keyUpCheckInput }}
                inputRef={userId}/>
                <TextField label="PASSWORD" type="password" inputProps={{ onKeyUp:keyUpCheckInput }} inputRef={userPw}/>
            </FormControl>
            <Button variant="outlined" onClick={clickCheckIdPw}>로그인</Button>
        </div>
    );
}

export default AdminLoginInput;