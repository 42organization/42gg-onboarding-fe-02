import React, { useRef } from "react";
import { isNormal } from "../../LoginAtom";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { curVal, fillIdPw } from "../../utils/LoginInputUtils";

function NormalLoginInput() {
    const userId = useRef();
    const userPw = useRef();
    const setIsNormal = useSetRecoilState(isNormal);
    const navigate = useNavigate();

    const getUser = async (URL) => {
        const res = await fetch(URL);
        const data = await res.json();
        return data;
    }
    const users = getUser("/userInfo");
    console.log(users);
    
    const validId = (id, pw) => {
        users.then((value) => {
            value.normal.map((exist) => {if (id === exist.id && pw === exist.pw) {
                setIsNormal(true);
                navigate("/normal/home");
            }}
        )})
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
        <div>
            <span>아이디</span>
            <input maxLength= "15" type="text" placeholder="ID" ref={userId} onKeyUp={keyUpCheckInput}></input>
            <span>비밀번호</span>
            <input maxLength="15" type="password" placeholder="PASSWORD" ref={userPw} onKeyUp={keyUpCheckInput}></input>
            <button type="button" onClick={clickCheckIdPw}>로그인</button>
        </div>
    );
}

export default NormalLoginInput;