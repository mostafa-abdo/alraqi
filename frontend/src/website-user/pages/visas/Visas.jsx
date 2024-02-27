import VisasStepper from "../../components/visasStepper/VisasStepper";
import Select from 'react-dropdown-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from "react-router-dom";
import './visas.scss';

function Visas() {
  const list = [
    <Step1 key={ 0 } />,
    <Step2 key={ 1 } />,
    <Step3 key={ 2 } />,
    <Step4 key={ 3 } />,
  ];
  return (
    <div className="visas-details">
      <VisasStepper list={ list } />
    </div>
  );
}
export default Visas;

const Step1 = (prop) => {
  const { onNext } = prop;

  const [selectedDate, setSelectedDate] = useState(null);
  // Handle the date change event
  const handleDate = (date) => {
    setSelectedDate(date);
  }; //end

  const options = [
    { name: "السعودية" },
    { name: "مصر" },
    { name: "اليمن" },
    { name: "لبنان" },
    { name: "العراق" },
    { name: "سوريا" },
    { name: "الجزائر" },
    { name: "الإمارات" },
    { name: "الأردن" },
    { name: "البحرين" },
    { name: "تونس" },
    { name: "السودان" },
    { name: "ليبيا" },
    { name: "المغرب" },
    { name: "فلسطين" },
    { name: "قطر" },
    { name: "الكويت" },
    { name: "عمان" },
    { name: "موريتانيا" },
    { name: "الصومال" },
  ];

  return (
    <div className="visas-step">
      <h2>معلومات حجز السفر</h2>
      <div className="step-info">
        <div className='box'>
          <div className='title'>الجنسية <span>*</span></div>
          <div className='input-dropdown'>
            <Select className='select-input'
              options={ options }
              direction='rtl'
              placeholder='ادخل جنسيتك'
              labelField='name'
              valueField='name'
              color='#9094A0'
            // onChange={ (value) => (value.map(e => setValue(e.name))) }
            />
          </div>
        </div>
        <div className='box'>
          <div className='title'>مسافر من <span>*</span></div>
          <div className='input-dropdown'>
            <Select className='select-input'
              options={ options }
              direction='rtl'
              placeholder='ادخل الدولة المسافر منها'
              labelField='name'
              valueField='name'
              color='#9094A0'
            // onChange={ (value) => (value.map(e => setValue(e.name))) }
            />
          </div>
        </div>
        <div className='box'>
          <div className='title'>مسافر الى دولة <span>*</span></div>
          <div className='input-dropdown'>
            <Select className='select-input'
              options={ options }
              direction='rtl'
              placeholder='ادخل الدولة المسافر اليها'
              labelField='name'
              valueField='name'
              color='#9094A0'
            // onChange={ (value) => (value.map(e => setValue(e.name))) }
            />
          </div>
        </div>
        <div className='box'>
          <div className='title'>متى تاريخ الحجز؟ <span>*</span></div>
          <div className='oneRoundDate'>
            <DatePicker id="date-input"
              selected={ selectedDate }
              onChange={ handleDate }
              dateFormat="yyyy/MM/dd"
              placeholderText="ادخل تاريخ السفر المتوقع"
            />
          </div>
        </div>
      </div>
      <button className="stepper-btn" onClick={ onNext }>التالى</button>
    </div>
  );
};

const Step2 = (prop) => {
  const { onNext } = prop;
  // radio buttons
  const handleChangeRounds = (event) => {
    const value = event.target.value;
  }; //end

  return (
    <div className="visas-step">
      <h2>معلومات الهوية</h2>
      <div className="step-info">
        <div className='radio-container'>

          <div className="radio-box">
            <h3 className="title">هل هويتك او اقامتك سارية الصلاحية؟</h3>
            <div className="radio-buttons">
              <label htmlFor='radio-1' className="radio">
                <input id='radio-1' name='group1' type="radio" value='yes' onChange={ handleChangeRounds } />
                <label htmlFor='radio-1' className="radio-label">نعم</label>
              </label>
              <label htmlFor='radio-2' className="radio">
                <input id='radio-2' name='group1' type="radio" value='no' onChange={ handleChangeRounds } />
                <label htmlFor='radio-2' className="radio-label">لا</label>
              </label>
            </div>
          </div>

          <div className="radio-box">
            <h3 className="title">هل جواز سفرك سارى الصلاحية و متبقى اكثر من 6 اشهر؟</h3>
            <div className="radio-buttons">
              <label htmlFor='radio-3' className="radio">
                <input id='radio-3' name='group2' type="radio" value='yes' onChange={ handleChangeRounds } />
                <label htmlFor='radio-3' className="radio-label">نعم</label>
              </label>
              <label htmlFor='radio-4' className="radio">
                <input id='radio-4' name='group2' type="radio" value='no' onChange={ handleChangeRounds } />
                <label htmlFor='radio-4' className="radio-label">لا</label>
              </label>
            </div>
          </div>

          <div className="radio-box">
            <h3 className="title">هل لديك كشف جساب بنكى 3 او 6 اشهر ؟
              <p>بعض السفارات تتطلب كشف حساب</p>
            </h3>
            <div className="radio-buttons">
              <label htmlFor='radio-5' className="radio">
                <input id='radio-5' name='group3' type="radio" value='yes' onChange={ handleChangeRounds } />
                <label htmlFor='radio-5' className="radio-label">نعم</label>
              </label>
              <label htmlFor='radio-6' className="radio">
                <input id='radio-6' name='group3' type="radio" value='no' onChange={ handleChangeRounds } />
                <label htmlFor='radio-6' className="radio-label">لا</label>
              </label>
            </div>
          </div>

          <div className="radio-box">
            <h3 className="title">هل لديك كشف جساب بنكى 3 او 6 اشهر ؟
              <p>بعض السفارات تتطلب كشف حساب</p>
            </h3>
            <div className="radio-buttons">
              <label htmlFor='radio-7' className="radio">
                <input id='radio-7' name='group4' type="radio" value='yes' onChange={ handleChangeRounds } />
                <label htmlFor='radio-7' className="radio-label">نعم</label>
              </label>
              <label  htmlFor='radio-8' className="radio">
                <input id='radio-8' name='group4' type="radio" value='no' onChange={ handleChangeRounds } />
                <label htmlFor='radio-8' className="radio-label">لا</label>
              </label>
            </div>
          </div>

        </div>
      </div>
      <button className="stepper-btn" onClick={ onNext }>التالى</button>
    </div>
  );
};

const Step3 = (prop) => {
  const { onNext } = prop;

  // handle upload files
  const fileInputRef = useRef(null);
  const handleFileInput = () => {
    fileInputRef.current.click();
  }

  return (
    <div className="visas-step">
      <h2>التفاصيل القانونيه </h2>
      <div className="step-info">
        <div className="upload_items">
          <div className="item">
            <div className="header">
              <h3><span>*</span>جواز السفر</h3>
              <p>يرجى تحميل صوره واضحه من جواز السفر</p>
            </div>
            <div className='upload_file' onClick={ handleFileInput }>
              <input ref={ fileInputRef } type='file' style={ { display: "none" } } />
              <img src='/upload.svg' alt='upload file' />
              <h2>Upload Files</h2>
              <p>PNG, JPG and GIF files are allowed</p>
            </div>
          </div>
          <div className="item">
            <div className="header">
              <h3><span>*</span>الاقامة</h3>
              <p>يرجى تحميل صوره واضحة من الاقامة</p>
            </div>
            <div className='upload_file' onClick={ handleFileInput }>
              <input ref={ fileInputRef } type='file' style={ { display: "none" } } />
              <img src='/upload.svg' alt='upload file' />
              <h2>Upload Files</h2>
              <p>PNG, JPG and GIF files are allowed</p>
            </div>
          </div>
        </div>
      </div>
      <button className="stepper-btn" onClick={ onNext }>التالى</button>
    </div>
  );
};

const Step4 = () => {
  const [open, setOpen] = useState(false);
  // const [phone, setPhone] = useState('');

  const scrollTop = () => { 
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    });
  }

  return (
    <div className="visas-step">
      <h2>المعلومات الشخصية</h2>
      <div className="step-info">
        <form className='step4-inputs'>
          <div className='input'>
            <label htmlFor='fullName'>الاسم بالكامل<span>*</span></label>
            <input type='text' id='fullName' placeholder='ادخل الاسم كما هو مكتوب فى جواز السفر' required />
          </div>
          <div className='input' >
            <label htmlFor='phone'>رقم الجوال<span>*</span></label>
            <div>
              <PhoneInput
                id="phone"
                country={ "sa" }
                placeholder="رقم الجوال"
                // onChange={ (value) => setPhone(value) }
                // value={ phone }
                required
              />
            </div>
          </div>
          <div className='input'>
            <label htmlFor='email'>البريد الالكترونى<span>*</span></label>
            <input type='email' id='email' placeholder='ادخل بريدك الالكترونى' required />
          </div>
        </form>
      </div>
      <div className="alert-container">
        <button className="stepper-btn" onClick={ () => setOpen(true) }>ارسال طلب</button>
        { open &&
          <div className="success-alert">
            <div className="success-container">
              <img src="close.svg" alt="close" className="close-btn" onClick={ () => setOpen(false) } />
              <img src="success.svg" alt="success" />
              <h2>تم ارسال طلبك الى الفريق</h2>
              <p>
                سيتم التواصل معك من قبل مستشار السفر
                عبر الرقم المسجل فى اقرب وقت
              </p>
              <Link className="return-btn" to='/'  onClick={scrollTop}>العودة للصفحة الرئيسية</Link>
            </div>
          </div>
        }
      </div>
    </div>
  );
};