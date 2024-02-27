import { useRef } from "react";
import Stepper from "../stepper/Stepper";
import './driverSteps.scss';

function DriverSteps(prop) {
  const { setOpenStepper } = prop;
  const list = [
    <Step1 key={ 0 } />,
    <Step2 key={ 1 } />,
    <Step3 key={ 2 } />,
  ];
  return (
    <div className="partner_details">
      <Stepper list={ list } setOpenStepper={setOpenStepper} />
    </div>
  );
}
export default DriverSteps;

const Step1 = (prop) => {
  const { onNext } = prop;

  return (
    <div className="driver-step">
      <h2>معلومات العميل</h2>
      <div className="step-info">
        <div className='step-input'>
          <label htmlFor='fullName'>الاسم بالكامل</label>
          <input type='text' id='fullName' value="محمد سعيد احمد" readOnly />
        </div>
        <div className='step-input'>
          <label>اللغة</label>
          <input type='text' value="العربية" readOnly />
        </div>
        <div className='step-input'>
          <label>الشركة المصنعة للمركبات و الطراز</label>
          <input type='text' value="اسم الشركة" readOnly />
        </div>
        <div className='step-input'>
          <label>سنة صناعة السيارة</label>
          <input type='text' value="2023" readOnly />
        </div>
        <div className='step-input'>
          <label>لوحه السياره</label>
          <input type='text' value="444" readOnly />
        </div>
        <div className='step-input'>
          <label>لون السياره</label>
          <input type='text' value="احمر" readOnly />
        </div>
      </div>
      <button className="stepper-btn" onClick={ onNext }>التالى</button>
    </div>
  );
};

const Step2 = (prop) => {
  const { onNext } = prop;

  // handle upload files
  const fileInputRef = useRef(null);
  const handleFileInput = () => {
    fileInputRef.current.click();
  }

  return (
    <div className="driver-step step2">
      <h2>تفاصيل الدفع</h2>
      <div className="step-info">
        <div className="upload_items">
          <div className="item">
            <div className="header">
              <h3>صوره شخصيه مع خلفيه بيضاء</h3>
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
              <h3>بطاقة الهوية الشخصية</h3>
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
              <h3>رخصه السائق</h3>
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
              <h3>استمارة السيارة</h3>
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

const Step3 = (prop) => {
  const { onNext } = prop;
  return (
    <div className="driver-step">
      <h2>تفاصيل الدفع</h2>
      <div className="step-info">
        <div className='step-input'>
          <label >رقم حساب البنكي</label>
          <input type='text' value="١2213343434" readOnly />
        </div>
        <div className='step-input'>
          <label >اسم البنك BIC/SWIFT</label>
          <input type='text' value="١2213343434" readOnly />
        </div>
        <div className='step-input'>
          <label >العنوان</label>
          <input type='text' value="السعوديه" readOnly />
        </div>
        <div className='step-input'>
          <label >اسم صاحب الحساب البنكى</label>
          <input type='text' value="محمد حامد" readOnly />
        </div>
      </div>
      <div style={{display:"flex"}}>
        <button className="stepper-btn" onClick={ onNext }>قبول</button>
        <button className="stepper-btn rejected-btn" onClick={ onNext }>رفض</button>
      </div>
    </div>
  );
};
