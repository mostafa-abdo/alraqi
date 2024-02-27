import { Link, NavLink } from "react-router-dom";
import { HashLink} from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import "./navbar.scss";
import { useStateContext } from "../../../contexts/ContextProvider";
import axiosClient from "../../../axios-client";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const {user, token, setUser, setToken} = useStateContext();
    const onLogout = (ev) => {
        ev.preventDefault()
        axiosClient.post('/logout')
            .then(() => {
                setUser(null)
                setToken(null)
            })
    }
  return (
    <nav className="navbar">
      <Link to="/" className="logo link large-screen ">الراقى للتوصيل</Link>
      <div className="links large-screen">
        <NavLink to="/" className="link" activeclassname="active">الرئيسية</NavLink>
        <HashLink className="link" smooth="true" to="/#choose-us">لماذا تختارنا</HashLink>
        <HashLink className="link" smooth="true" to="/our-services">خدماتنا</HashLink>
        <HashLink className="link" smooth="true" to="/#car-types">انواع سياراتنا</HashLink>
        <HashLink className="link" smooth="true" to="/#reviews">تقييمات العملاء</HashLink>
        <HashLink className="link" smooth="true" to="/#faq">الاسئلة الشائعة</HashLink>
        <HashLink className="link" smooth="true" to="/#contact-us">التواصل</HashLink>
      </div>

      {!token &&
        (
          <Link to="/login" className="login link ">تسجيل الدخول</Link>
        )
      }

      {token &&
        (
          <div className="logged-in">
            <Link to="/settings" className="link ">
              <img src="../settings.svg" alt="settings" />
            </Link>
            <Link  className="link " onClick={ (ev) => onLogout(ev) }>
              <img src="../logout.svg" alt="logout" />
            </Link>
        </div>
        )
      }
     
      
      <div className="smallscreen ">
        <Menu className="overlay-open" sx={ { fontSize: 30 } } onClick={ () => setToggleMenu(true) } />
        { toggleMenu &&
          <div className="links overlay">
            <Close className="overlay-close" sx={ { fontSize: 35 } } onClick={ () => setToggleMenu(false) } />
            <NavLink to="/" className="link" activeclassname="active" onClick={ () => setToggleMenu(false) }>الرئيسية</NavLink>
            <HashLink className="link" smooth="true" to="/#choose-us" onClick={ () => setToggleMenu(false) }>لماذا تختارنا</HashLink>
            <HashLink className="link" smooth="true" to="/our-services" onClick={ () => setToggleMenu(false) }>خدماتنا</HashLink>
            <HashLink className="link" smooth="true" to="/#car-types" onClick={ () => setToggleMenu(false) }>انواع سياراتنا</HashLink>
            <HashLink className="link" smooth="true" to="/#reviews" onClick={ () => setToggleMenu(false) }>تقييمات العملاء</HashLink>
            <HashLink className="link" smooth="true" to="/#faq" onClick={ () => setToggleMenu(false) }>الاسئلة الشائعة</HashLink>
            <HashLink className="link" smooth="true" to="/#contact-us" onClick={ () => setToggleMenu(false) }>التواصل</HashLink>
          </div>
        }
      </div>
    </nav>
  )
};

export default Navbar;