import { Link, NavLink } from 'react-router-dom';
import { menu } from '../../data';
import './sideNavbar.scss';
import { useStateContext } from '../../../contexts/ContextProvider';
import axiosClient from '../../../axios-client';
// import '../../styles/global2.scss';

const SideNavbar = () => {

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
    <div className='sideNavbar'>
      <div className='logo'>اللوجو</div>
      <div className='menu'>
        {
          menu.map((item) => (
            <NavLink to={ item.url }
              className={ `item ${({ isActive }) =>
                isActive ? "active" : ""}` }
              key={ item.id }
            >
              { ({ isActive }) => (
                <>
                  <img src={ isActive ? "../"+item.lightIcon : "../"+item.icon } alt={ item.title } />
                  <span className='itemTitle'>{ item.title }</span>
                </>
              ) }
            </NavLink>
          ))
        }
      </div>
      <Link to='/login' className='logout'>
        <img src='../logout.svg' alt='logout' />
        <span className='title' onClick={onLogout}>تسجيل الخروج</span>
      </Link>
    </div>
  )
};

export default SideNavbar;