import { useState } from 'react';
import { settingsMenu } from '../../data';
import Profile from '../../components/profile/Profile';
import './settings.scss';
import { Link } from 'react-router-dom';

const Settings = () => {
  const [active, setActive] = useState(1)

  return (
    <div className='settings'>
      <div className='content'>
        <div className='header'>
          <h2 className='title'>تحكم فى اعدادات حسابك</h2>
          <div className='save-btn'>حفظ</div>
        </div>
        <div className='body'>
          <div className='side-menu'>
            {
              settingsMenu.map((item) => (
                <div
                  className={ `item ${active === item.id && "active"}` }
                  key={ item.id }
                  onClick={ () => setActive(item.id) }
                >
                  <img src={ active === item.id ? item.lightIcon : item.icon } alt='' />
                  <span className='itemTitle'>{ item.title }</span>
                </div>
              ))
            }
            <Link to='/' className={ `item ` }>
              <img src="gray-logout.svg" alt='' />
              <span className='itemTitle'>تسجيل الخروج</span>
            </Link>
          </div>
          <div className='main-content'>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Settings;