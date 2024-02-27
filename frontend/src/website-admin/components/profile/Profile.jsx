import { useState } from 'react';
import './profile.scss';

const Profile = () => {
  const [active, setActive] = useState('email')

  return (
    <div className='profile'>
      <div className='edit'>
        <p className={ active === 'email' ? "active" : " " } onClick={ () => setActive('email') }>تعديل البريد الالكترونى</p>
        <p className={ active === 'password'? "active" : " " } onClick={ () => setActive('password') }>تعديل كلمه المرور</p>
      </div>
      <div className='body'>
        {
          active === 'email' &&
          <div className='input-container'>
            <label htmlFor='email'>البريد الالكترونى</label>
            <input id='email' type='email' placeholder='ادخل البريد الالكترونى' />
          </div>
        }
        {
          active === 'password' &&
          <div>
            <div className='input-container'>
              <label htmlFor='currentPass'>كلمه المرور الحالية</label>
              <input id='currentPass' type='password' placeholder='ادخل كلمه المرور الحالية' />
            </div>
            <div className='input-container'>
              <label htmlFor='newPass'>كلمه المرور الجديدة</label>
              <input id='newPass' type='password' placeholder='ادخل كلمه المرور الجديدة' />
            </div>
            <div className='input-container'>
              <label htmlFor='confirmPass'> تاكيد كلمه المرور الجديده</label>
              <input id='confirmPass' type='password' placeholder='ادخل كلمه المرور الجديدة' />
            </div>
          </div>
        }
      </div>
    </div>
  )
};

export default Profile