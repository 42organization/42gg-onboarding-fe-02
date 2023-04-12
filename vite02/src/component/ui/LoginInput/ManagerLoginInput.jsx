import React, { useRef } from "react";
import { isManager } from "../../LoginAtom";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { curVal, fillIdPw } from "../../utils/LoginInputUtils";

function ManagerLoginInput() {
    const userId = useRef();
    const userPw = useRef();
    const setIsManager = useSetRecoilState(isManager);
    const navigate = useNavigate();

    const getUser = async (URL) => {
        const res = (await fetch(URL)).json();
        return res;
    }
    const users = getUser("/userInfo");
    console.log(users);

    const validId = (id, pw) => {
        users.then((value) => {
            value.manager.map((exist) => {if (id === exist.id && pw === exist.pw) {
                setIsManager(true);
                navigate("/manager/home");
            }}
        )}
    )}


    const clickCheckIdPw = () => {
        if (curVal(userId) === "" || curVal(userPw) === "") {
            fillIdPw();
        } else {
            validId(curVal(userId), curVal(userPw))
            
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

export default ManagerLoginInput;