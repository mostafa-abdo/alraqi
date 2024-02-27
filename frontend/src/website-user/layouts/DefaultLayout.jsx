import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../axios-client";
import { useEffect } from "react";


export default function DefaultLayout () {
    const {user, token, setUser, setToken} = useStateContext();


    if(!token){
        return <Navigate to="/login" />
    }

    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data)
            })
    }, [])


    return (
        <div>
            <Outlet />
        </div>
    )
}
