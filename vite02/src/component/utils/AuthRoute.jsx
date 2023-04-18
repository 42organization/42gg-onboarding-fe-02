import React, { useEffect } from "react";
import { isNormal, isManager, isAdmin } from "../LoginAtom";
import { useRecoilValue } from "recoil";
import { Outlet, useNavigate } from "react-router-dom";

export const RouteMain = () => {
    const isN = useRecoilValue(isNormal);
    const isM = useRecoilValue(isManager);
    const isA = useRecoilValue(isAdmin);
    const all = isN ? 1 : (isM ? 2 : (isA ? 3 : 0));
    const navigate = useNavigate();

    useEffect(() => {
        if (all !== 0) {
            alert("로그인한 사용자는 접근할 수 없는 페이지입니다.");
            navigate("/home");
        }
    }, [all, navigate]);
    return <Outlet />;
}

export const RouteAll = () => {
    const isN = useRecoilValue(isNormal);
    const isM = useRecoilValue(isManager);
    const isA = useRecoilValue(isAdmin);
    const all = isN ? 1 : (isM ? 2 : (isA ? 3 : 0));
    const navigate = useNavigate();

    useEffect(() => {
        if (all === 0) {
            alert("로그인이 필요한 페이지입니다.");
            navigate("/");
        }
    }, [all, navigate]);
    return <Outlet />;
}

export const RouteManagerAdmin = () => {
    const isM = useRecoilValue(isManager);
    const isA = useRecoilValue(isAdmin);
    const navigate = useNavigate();

    useEffect(() => {
        if (isM === false && isA === false) {
            alert("권한이 필요한 페이지입니다.");
            navigate("/home");
        }
    }, [isM, isA, navigate]);
    return <Outlet />;
}

export const RouteAdmin = () => {
    const isA = useRecoilValue(isAdmin);
    const navigate = useNavigate();

    useEffect(() => {
        if (isA === false) {
            alert("권한이 필요한 페이지입니다.");
            navigate("/home");
        }
    }, [isA, navigate]);
    return <Outlet />;
}

export const RouteNormal = () => {
    const isN = useRecoilValue(isNormal);
    const navigate = useNavigate();

    useEffect(() => {
        if (isN === false) {
            alert("권한이 필요한 페이지입니다.");
            navigate("/home");
        }
    }, [isN, navigate]);
    return <Outlet />;
}
export const RouteManager = () => {
    const isM = useRecoilValue(isManager);
    const navigate = useNavigate();

    useEffect(() => {
        if (isM === false) {
            alert("권한이 필요한 페이지입니다.");
            navigate("/home");
        }
    }, [isM, navigate]);
    return <Outlet />;
}

