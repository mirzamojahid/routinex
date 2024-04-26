import { base_endpoint, headerx } from "./constants";
import { useLocation, Navigate } from "react-router-dom"

export const clearToken = () => {

    try {
        localStorage.clear();
        return true;
    } catch (err) {
        return false;
    }

}


export const setToken = (token) => {

    try {
        localStorage.setItem("token", token);
        const x = localStorage.getItem("token");
        if (x === token) {
            return true;
        } else {
            return false;
        }
    } catch {
        return false;
    }
}

export const CheckToken = () => {
    let token = null;
    try {
        token = localStorage.getItem("token") ?? null;
    } catch {

    }
    return token;

}

export async function CheckAuthenticated() {
    try {
        const x = CheckToken();
        headerx['Authorization'] = 'Token ' + x;
        const res = await fetch(base_endpoint + "/check/authenticated/", { headers: headerx })
        if (res.status === 401) {
            clearToken();

        } else if (res.status === 200) {
            const jsonx = await res.json()
            localStorage.setItem("img", jsonx['data']['img'])
        }
    } catch (err) {

    }
}


export function RequireToken({ children }) {

    let auth = CheckToken()
    let location = useLocation();

    if (!auth) {
        return <Navigate to='/login' state={{ from: location }} />;
    }

    return children;
}