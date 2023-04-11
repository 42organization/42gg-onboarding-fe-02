import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function ManagerLoginInput() {
    const userId = useRef();
    const userPw = useRef();
    const navigate = useNavigate();
    
    function curVal(user) {
        return user.current.value;
    }

    const getUser = async (URL) => {
        const res = (await fetch(URL)).json();
        return res;
    }
    const users = getUser("/userInfo");
    console.log(users);

    const validId = (id, pw) => {
        users.then((value) => {
            value.manager.map((exist) => {if (id === exist.id && pw === exist.pw) {
                navigate("/manager");
            }}
        )}
    )}


    const fillIdPw = () => {
        if (curVal(userId) === "") {
            alert("아이디를 입력하세요");
        } else {
            if (curVal(userPw) === "") {
                alert("비밀번호를 입력하세요")
            }
        }
    }

    const clickCheckIdPw = () => {
        if (curVal(userId) === "" || curVal(userPw) === "") {
            fillIdPw();
        } else {
            validId(curVal(userId), curVal(userPw))
            
            }
        }

    const keyUpCheckId = (e) => {
        if (e.key === 'Enter') {
            if (curVal(userId) === "" || curVal(userPw) === "") {
                fillIdPw();
            } else {
                validId(curVal(userId), curVal(userPw));
            }
        }
    }

    const keyUpCheckPw = (e) => {
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
            <input maxLength= "15" type="text" placeholder="ID" ref={userId} onKeyUp={keyUpCheckId}></input>
            <span>비밀번호</span>
            <input maxLength="15" type="text" placeholder="PASSWORD" ref={userPw} onKeyUp={keyUpCheckPw}></input>
            <button type="button" onClick={clickCheckIdPw}>로그인</button>
        </div>
    );
}

export default ManagerLoginInput;