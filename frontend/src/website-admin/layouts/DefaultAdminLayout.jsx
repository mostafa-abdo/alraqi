import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../axios-client";
import { useEffect } from "react";

import SideNavbar from "../components/sideNavbar/SideNavbar";

import '../styles/global.scss';

export default function DefaultAdminLayout() {
    const { user, token, setUser, setToken } = useStateContext();


    if (!token) {
        return <Navigate to="/dashboard/login" />
    }


    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data)
            })
    }, [])

    return (
        <div className='dashboard-main'>
            <div className='sideNavContainer'>
                <SideNavbar />
            </div>
            <div className='contentContainer'>
                <Outlet/>
                
            </div>
        </div>
    )
    
}
