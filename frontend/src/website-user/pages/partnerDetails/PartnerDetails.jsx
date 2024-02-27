import { useRef, useState } from "react";
import PropTypes from 'prop-types';
import Stepper from "../../components/stepper/Stepper";
import './partnerDetails.scss';

export default function PartnerDetails() {
  

  const list = [
    <Step1 key={0} />,
    <Step2 key={1} />,
    <Step3 key={2} />,
  ];
  return (
    <div className="partner_details">
      <Stepper list={list} />
    </div>
  );
}

const Step1 = ({ onNext }) => {
  // start input language
  const [activeLang, setActiveLang] = useState(false);
  const [selectLang, setSelectLang] = useState("اختر لغتك");
  const languages = ["العربية", "English", "Fr", "IT"];
  // end input language

  // start input company
  const [activeCompany, setActiveCompany] = useState(false);
  const [selectCompany, setSelectCompany] = useState("ادخل اسم الشركة");
  const companies = ["Toyota", "Mercedes", "BMW"];
  // end input company

  // start input years
  const year = new Date().getFullYear();
  const years = Array.from(new Array(100), (val, index) => index + year);
  const [activeYear, setActiveYear] = useState(false);
  const [selectYear, setSelectYear] = useState("ادخل سنه صناعه السياره");
  // end input years

  // start input color
  const [activeColor, setActiveColor] = useState(false);
  const [selectColor, setSelectColor] = useState("ادخل لون السيارة");
  const colors = ["سوداء", "حمراء", "زرقاء", "بيضاء"];
  // end input color

  return (
    <div className="step1">
      <h2>المعلومات الشخصية وتفاصيل السيارة</h2>
      <div className="step1_info">
        <div className='input'>
          <label htmlFor='fullName'>الاسم بالكامل<span>*</span></label>
          <input type='text' id='fullName' placeholder='ادخل اسمك' />
        </div>
        <div className="input">
          <label onClick={ (e) => { setActiveLang(!activeLang); e.preventDefault(); } }>اللغة<span>*</span></label>
          <div className="step-dropdown">
            <div className="dropdown-btn" onClick={ (e) => { setActiveLang(!activeLang); e.preventDefault(); } }>
              <span>{ selectLang }</span>
              <img src="/arrow-down.svg" alt="arrow down" />
            </div>
            {
              activeLang &&
              <div className="dropdown-content">
                {
                  languages.map((lang, index) => (
                    <div className="dropdown-item"
                      key={ index }
                      onClick={ (e) => {
                        setSelectLang(lang);
                        setActiveLang(false);
                        e.preventDefault();
                      } }
                    >
                      { lang }
                    </div>
                  ))
                }
              </div>
            }
          </div>
        </div>
        <div className="input">
          <label onClick={ (e) => { setActiveCompany(!activeCompany); e.preventDefault(); } }>الشركه المصنعه للمركبات والطراز<span>*</span></label>
          <div className="step-dropdown">
            <div className="dropdown-btn"
              onClick={ (e) => {
                setActiveCompany(!activeCompany);
                e.preventDefault();
              } }>
              <span>{ selectCompany }</span>
              <img src="/arrow-down.svg" alt="arrow down" />
            </div>
            {
              activeCompany &&
              <div className="dropdown-content">
                {
                  companies.map((item, index) => (
                    <div className="dropdown-item"
                      key={ index }
                      onClick={ (e) => {
                        setSelectCompany(item);
                        setActiveCompany(false);
                        e.preventDefault();
                      } }
                    >
                      { item }
                    </div>
                  ))
                }
              </div>
            }
          </div>
        </div>
        <div className="input">
          <label onClick={ (e) => { setActiveYear(!activeYear); e.preventDefault(); } }>سنه صناعه السياره<span>*</span></label>
          <div className="step-dropdown">
            <div className="dropdown-btn" onClick={ (e) => { setActiveYear(!activeYear); e.preventDefault();} }>
              <span>{ selectYear }</span>
              <img src="/arrow-down.svg" alt="arrow down" />
            </div>
            {
              activeYear &&
              <div className="dropdown-content">
                {
                  years.map((item, index) => (
                    <div className="dropdown-item"
                      key={ index }
                      onClick={ (e) => {
                        setSelectYear(item);
                        setActiveYear(false);
                        e.preventDefault();
                      } }
                    >
                      { item }
                    </div>
                  ))
                }
              </div>
            }
          </div>
        </div>
        <div className='input'>
          <label htmlFor='boardNum'>لوحه السياره<span>*</span></label>
          <input type='text' id='boardNum' placeholder='ادخل رقم اللوحة ' />
        </div>
        <div className="input">
          <label onClick={ (e) => { setActiveColor(!activeColor); e.preventDefault(); } }>لون السياره<span>*</span></label>
          <div className="step-dropdown">
            <div className="dropdown-btn" onClick={ (e) => { setActiveColor(!activeColor); e.preventDefault(); } }>
              <span>{ selectColor }</span>
              <img src="/arrow-down.svg" alt="arrow down" />
            </div>
            {
              activeColor &&
              <div className="dropdown-content">
                {
                  colors.map((item, index) => (
                    <div className="dropdown-item"
                      key={ index }
                      onClick={ (e) => {
                        setSelectColor(item);
                        setActiveColor(false);
                        e.preventDefault();
                      } }
                    >
                      { item }
                    </div>
                  ))
                }
              </div>
            }
          </div>
        </div>
      </div>
      <button className="stepper_btn btn" onClick={ onNext }>التالى</button>
    </div>
  );
};
Step1.propTypes = {
  onNext: PropTypes.string,
}

const Step2 = ({ onNext }) => {

  // handle upload files
  const fileInputRef = useRef(null);
  const handleFileInput = () => {
    fileInputRef.current.click();
  }

  return (
    <div className="step2">
      <h2>التفاصيل القانونيه والتسعيره</h2>
      <div className="upload_items">
        <div className="item">
          <div className="header">
            <h3><span>*</span>بطاقة الهوية الشخصية</h3>
            <p>
              يرجى تحميل صوره واضحه من بطاقه الهويه الشخصيه يجب ان تكون صوره ملونه وان تظهر كافه المعلومات بشكل واضح و الا تكون منتهيه الصلاحيه
            </p>
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
            <h3><span>*</span>صوره شخصيه مع خلفيه بيضاء</h3>
            <p>
              يرجى تحميل صوره شخصية يجب ان تكون حديثة يجب ان تظهر ملامح الوجة بشكل واضح
            </p>
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
            <h3><span>*</span>رخصه السائق</h3>
            <p>
              يرجي ان تكون صوره واضحه لرخصه القياده ويجب ان تكون صوره ملونه وان تظهر كافه المعلومات بشكل واضح يجب الا تكون منتهيه الصلاحيه
            </p>
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
            <h3><span>*</span>استمارة السيارة</h3>
            <p>
              يرجي تحميل صوره واضحه لرخصه القياده الخاصه بك يجب ان تكون صوره ملونه وان تظهر كافه المعلومات بشكل واضح و الا تكون منتهيه الصلاحيه
            </p>
          </div>
          <div className='upload_file' onClick={ handleFileInput }>
            <input ref={ fileInputRef } type='file' style={ { display: "none" } } />
            <img src='/upload.svg' alt='upload file' />
            <h2>Upload Files</h2>
            <p>PNG, JPG and GIF files are allowed</p>
          </div>
        </div>
      </div>
      <button className="stepper_btn btn" onClick={ onNext }>التالى</button>
    </div>
  );
};
Step2.propTypes = {
  onNext: PropTypes.string,
}

const Step3 = ({ onNext }) => {
  return (
    <div className="step3">
      <h2>تفاصيل الدفع</h2>
      <div className="step3_info">
        <div className='input'>
          <label htmlFor='address'>العنوان<span>*</span></label>
          <input type='text' id='address' placeholder='ادخل عنوانك الدائم' />
        </div>
        <div className='input'>
          <label htmlFor='cardOwner'>اسم صاحب الحساب البنكى<span>*</span></label>
          <input type='text' id='cardOwner' placeholder='ادخل اسم صاحب الحساب ' />
        </div>
        <div className='input'>
          <label htmlFor='cardNum'>رقم الحساب البنكى<span>*</span></label>
          <input type='text' id='cardNum' placeholder='ادخل رقم حسابك البنكى' />
        </div>
        <div className='input'>
          <label htmlFor='bank'>اسم البنك BIC/SWIFT<span>*</span></label>
          <input type='text' id='bank' placeholder='ادخل اسم البنك ' />
        </div>
      </div>
      <div>
        <button className="stepper_btn btn" onClick={onNext}>ارسال طلب</button>
      </div>
    </div>
  );
};
Step3.propTypes = {
  onNext: PropTypes.string,
}
