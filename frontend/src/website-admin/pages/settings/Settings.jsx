import { useState } from 'react';
import { settingsMenu } from '../../data';
import Profile from '../../components/profile/Profile';
import Payment from '../../components/payment/Payment';
import AddPlace from '../../components/addPlace/AddPlace';
import CarsTypes from '../../components/carsTypes/CarsTypes';
import Prices from '../../components/prices/Prices';
import ContactUs from '../../components/contactUs/ContactUs';
import AdditionalInfo from '../../components/additionalInfo/AdditionalInfo';
import Reviews from '../../components/reviews/Reviews';
import './settings.scss';

import { useStateContext } from '../../../contexts/ContextProvider';

const Settings = (user) => {
  const [active, setActive] = useState(1);


  return (
    <div className='settings'>
      <div className='nav-header'>الاعدادات</div>
      <div className='content'>
        <div className='header'>
          <h2 className='title'>تحكم فى اعدادات حسابك</h2>
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
          </div>
          <div className='main-content'>
            {
              active === 1 && <Profile user={user}/>
            }
            {
              active === 2 && <Payment />
            }
            {
              active === 3 && <AddPlace />
            }
            {
              active === 4 && <CarsTypes />
            }
            {
              active === 5 && <Prices />
            }
            {
              active === 6 && <ContactUs />
            }
            {
              active === 7 && <AdditionalInfo />
            }
            {
              active === 8 && <Reviews />
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default Settings;