import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import  '../styles/global.scss';

const Layout = () => {
    return (
        <div className='website-main'>
            <Navbar />
            <div className='website-container'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
