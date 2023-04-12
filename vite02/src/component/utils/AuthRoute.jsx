import React, { useEffect } from "react";
import GoMain from "./GoMain";
import { isNormal, isManager, isAdmin } from "../LoginAtom";
import { useRecoilValue } from "recoil";
import { Outlet, useNavigate } from "react-router-dom";

export const RouteMain = () => {
    const isN = useRecoilValue(isNormal);
    const isM = useRecoilValue(isManager);
    const isA = useRecoilValue(isAdmin);
    const all = isN ? 1 : (isM ? 2 : (isA ? 3 : 0));
    const navigate = useNavigate();

    let page = "/";
    if (all === 1) {
        page = "/normal/home";
    } else if (all === 2) {
        page = "/manager/home";
    } else if (all === 3) {
        page = "/admin/home";
    }
    useEffect(() => {
        if (all !== 0) {
            alert("로그인한 사용자는 접근할 수 없는 페이지입니다.");
            navigate(page);
        }
    }, [all, page, navigate]);
    return <Outlet />;
}


export const RouteNormal = () => {
    const isN = useRecoilValue(isNormal);

    useEffect(() => {
        if (!isN) {
            alert("로그인이 필요한 페이지입니다.");
        }
    }, [isN]);
    return isN ? <Outlet /> : <GoMain />;

}

export const RouteManager = () => {
    const isM = useRecoilValue(isManager);

    useEffect(() => {
        if (!isM) {
            alert("로그인이 필요한 페이지입니다.")
        }
    }, [isM]);
    return isM ? <Outlet /> : <GoMain />;

} 

export const RouteAdmin = () => {
    const isA = useRecoilValue(isAdmin);

    useEffect(() => {
        if (!isA) {
            alert("로그인이 필요한 페이지입니다.");
        }
    }, [isA]);
    return isA ? <Outlet /> : <GoMain/>;

}