import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

export default function GuestAdminLayout() {

    const {token} = useStateContext();

    if(token){
        return <Navigate to='/dashboard/'/>
    }

    return (
        <Outlet/>
    )
}
