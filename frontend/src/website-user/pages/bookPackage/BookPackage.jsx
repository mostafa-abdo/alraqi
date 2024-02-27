import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { paymentOptions} from '../../data';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { TimePicker, InputNumber } from 'antd';
import './bookPackage.scss';

const BookPackage = () => {
  const [phone, setPhone] = useState('');

  // Handle the  payment option 
  const [selected, setSelected] = useState("الدفع عند الوصول");

  // Handle the  date change event
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };

  // Handle the expire date change event
  const [selectedExpireDate, setSelectedExpireDate] = useState(null);
  const handleChangeExpireDate = (date) => {
    setSelectedExpireDate(date);
  };

  // time picker
  const onChangeTime = (time, timeString) => {
    console.log(time, timeString);
  };

  return (
    <div className='book-package'>
      <div className='container'>
        <div className='info_div customer_info'>
          <h3>معلومات العميل</h3>
          <div className='inputs'>
            <div className='input'>
              <label htmlFor='fullName'>الاسم بالكامل<span>*</span></label>
              <input type='text' id='fullName' placeholder='ادخل اسمك' required />
            </div>
            <div className='input' >
              <label htmlFor='phone'>رقم الواتساب<span>*</span></label>
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
            <div className='input'>
              <label htmlFor='email'>البريد الالكترونى<span>*</span></label>
              <input type='email' id='email' placeholder='ادخل بريدك الالكترونى' required />
            </div>
            { selected === "الدفع عند الوصول" &&
              <>
                <div className='input' >
                  <label >التاريخ<span>*</span></label>
                  <DatePicker id="date-input"
                    selected={ selectedDate }
                    onChange={ handleChangeDate }
                    dateFormat="dd/MM/yyyy"
                    placeholderText="23/01/2024"
                  />
                </div>
                <div className='input'>
                  <label >الوقت<span>*</span></label>
                  <TimePicker 
                    className='time-input'
                    use12Hours
                    format="h:mm A"
                    variant="borderless"
                    placeholder='اكتب الوقت'
                    suffixIcon={ false }
                    onChange={ onChangeTime }
                  />
                </div>
                <div className='input'>
                  <label >الركاب<span>*</span></label>
                <InputNumber className='persons-input'
                  style={ { backgroundColor: "#F4F6F9", width: "333px", height: "52px", padding: "10px 10px 0 0" } }
                    variant="borderless"
                    placeholder='اكتب عدد الركاب'
                    min={ 1 }
                  />
                </div>
              </>
            }
          </div>
        </div>
        <div className='info_div payment_options'>
          <h3>خيارات الدفع</h3>
          <div className='options'>
            {
              paymentOptions.map((option, index) => (
                <div className={ `option ${selected === option.title ? "selected" : ""}` } key={ index } onClick={ () => setSelected(option.title) }>
                  <h4>{ option.title }</h4>
                  <p>{ option.description }</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='info_div payment_info'>
          <h3>معلومات الدفع </h3>
          <div>
            <h4>الخدمات الاضافيه </h4>
            <p>200.00 $</p>
          </div>
          <div>
            <h4>الخصم</h4>
            <p>0.00 $</p>
          </div>
          <div>
            <h4>مبلغ الحجز</h4>
            <p>200.00 $</p>
          </div>
          <div>
            <h4>مجموع المبلغ المطلوب</h4>
            <p>400.00 $</p>
          </div>
        </div>
        { selected === "الدفع عند الوصول" ? " " :
          <div className='info_div card_info'>
            <div className='title'>
              <h3>معلومات البطاقه</h3>
              <div className='cards'>
                <img src='/mastercard.svg' alt='mastercard' />
                <img src='/visa.svg' alt='visa' />
              </div>
            </div>
            <div className='inputs'>
              <div className='input'>
                <label htmlFor='cardName'>الاسم على بطاقة الائتمان<span>*</span></label>
                <input type='text' id='cardName' placeholder='ادخل اسم صاحب البطاقة' required />
              </div>
              <div className='input'>
                <label htmlFor='cardNumber'>رقم بطاقة الائتمان<span>*</span></label>
                <input type='tel' id='cardNumber' placeholder='ادخل رقم بطاقة الائتمان' required />
              </div>
              <div className='input'>
                <label >تاريخ الصلاحية<span>*</span></label>
                <DatePicker id="date-input"
                  selected={ selectedExpireDate }
                  onChange={ handleChangeExpireDate }
                  dateFormat="dd/MM/yyyy"
                  placeholderText="23/01/2024"
                />
              </div>
              <div className='input'>
                <label htmlFor='pass'>CVV<span>*</span></label>
                <input type='tel' id='pass' placeholder='223' required />
              </div>
            </div>
            <button className='pay_btn btn'>
              دفع
            </button>
          </div>
        }
        { selected === "الدفع عند الوصول" &&
          <button className='btn book-btn'>حجز</button>
        }
      </div>
    </div>
  )
};

export default BookPackage