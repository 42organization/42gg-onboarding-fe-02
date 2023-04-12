export function curVal(user) {
    return (user.current.value);
}

export function fillIdPw(userId, userPw){
    if (curVal(userId) === "") {
        alert("아이디를 입력하세요.");
    } else if (curVal(userPw) === "") {
        alert("비밀번호를 입력하세요.");
    }
}
