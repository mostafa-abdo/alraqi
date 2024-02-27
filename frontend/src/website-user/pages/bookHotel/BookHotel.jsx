import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { InputNumber } from 'antd';
import Select from 'react-dropdown-select';
import './bookHotel.scss';

const BookHotel = () => {
  const [phone, setPhone] = useState('');
  const options = [
    { name: "ريفيرا" },
    { name: "بلازا" },
    { name: "ماجيك " },
  ]

  // Handle the  date change event
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="book-hotel">
      <div className='container'>
        <div className='info_div customer_info'>
          <h3>معلومات طلب حجز الفندق</h3>
          <form className='inputs'>
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
            <div className='dropdown-box'>
              <label className='title'>اسم الفندق <span>*</span></label>
              <div className='input-dropdown'>
                <Select className='select-input'
                  options={ options }
                  direction='rtl'
                  placeholder='ادخل اسم الفندق'
                  labelField='name'
                  valueField='name'
                  color='#9094A0'
                // onChange={ (value) => console.log(value.map(e=>e.name)) }
                />
              </div>
            </div>
            <div className='input' >
              <label >تاريخ الحجز<span>*</span></label>
              <DatePicker id="date-input"
                selected={ selectedDate }
                onChange={ handleChangeDate }
                dateFormat="dd/MM/yyyy"
                placeholderText="ادخل التاريخ"
              />
            </div>
            <div className='input'>
              <label >الايام<span>*</span></label>
              <InputNumber style={ { backgroundColor: "#F4F6F9", width: "330px", height: "52px", padding: "10px 10px 0 0" } }
                variant="borderless"
                placeholder='ادخل عدد الايام'
                min={ 1 }
              />
            </div>
            <div className='input'>
              <label >الغرف<span>*</span></label>
              <InputNumber style={ { backgroundColor: "#F4F6F9", width: "330px", height: "52px", padding: "10px 10px 0 0" } }
                variant="borderless"
                placeholder='ادخل عدد الغرف'
                min={ 1 }
              />
            </div>
            <div className='input'>
              <label >الاشخاص<span>*</span></label>
              <InputNumber style={ { backgroundColor: "#F4F6F9", width: "330px", height: "52px", padding: "10px 10px 0 0" } }
                variant="borderless"
                placeholder='ادخل عدد الاشخاص'
                min={ 1 }
              />
            </div>
          </form>
        </div>
        <button className='btn'>ارسال الطلب</button>
      </div>
    </div>
  )
};

export default BookHotel;