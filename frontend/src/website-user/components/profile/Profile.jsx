import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './profile.scss';

const Profile = () => {
  const [active, setActive] = useState('info');
  const [phone, setPhone] = useState('');

  return (
    <div className='profile'>
      <div className='edit'>
        <p className={ `edit-title first ${active === 'info' ? "active" : " "}` } onClick={ () => setActive('info') }>تعديل البيانات الشخصية</p>
        <p className={ `edit-title ${active === 'password' ? "active" : " "}` }
          onClick={ () => setActive('password') }
        >تعديل كلمه المرور</p>
      </div>
      <div className='body'>
        {
          active === 'info' &&
          <div className='inputs-container'>
            <div className='input-container'>
              <label htmlFor='email'>البريد الالكترونى</label>
              <input id='email' type='email' placeholder='ادخل البريد الالكترونى' />
            </div>
            <div className='input-container'>
              <label htmlFor='fullName'>الاسم بالكامل</label>
              <input id='fullName' type='email' placeholder='ادخل اسمك بالكامل ' />
            </div>
            <div className='input' >
              <label className='label' htmlFor='phone'>رقم الواتساب</label>
              <div>
                <PhoneInput
                  id="phone"
                  country={ "sa" }
                  placeholder="رقم الجوال"
                  onChange={ (value) => setPhone(value) }
                  value={ phone }
                  required
                />
              </div>
            </div>
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