import Stepper from "../stepper/Stepper";
import './landmarkSteps.scss';

function LandmarkSteps(prop) {
  const { setOpenStepper } = prop;
  const list = [
    <Step1 key={ 0 } />,
    <Step2 key={ 1 } />,
  ];
  return (
    <div>
      <Stepper list={ list } setOpenStepper={setOpenStepper} />
    </div>
  );
}
export default LandmarkSteps;

const Step1 = (prop) => {
  const { onNext } = prop;

  return (
    <div className="landmark-step">
      <h2>معلومات العميل</h2>
      <div className="step-info">
        <div className='step-input'>
          <label htmlFor='fullName'>الاسم بالكامل</label>
          <input type='text' id='fullName' value="محمد سعيد احمد" readOnly />
        </div>
        <div className='step-input phone-input'>
          <label htmlFor='phone'>رقم الواتساب</label>
          <div>
            <div className="flag"><img src="flag.svg" alt="flag" /><span>+20</span></div>
            <input type='text' id='phone' value="01201201201" readOnly />
          </div>
        </div>
        <div className='step-input'>
          <label>البريد الالكترونى</label>
          <input type='text' value="Mohamed@gmail.com" readOnly />
        </div>
        <div className='step-input'>
          <label>من</label>
          <input type='text' value="جده" readOnly />
        </div>
        <div className='step-input'>
          <label>الوقت</label>
          <input type='text' value="6:00" readOnly />
        </div>
        <div className='step-input'>
          <label>التاريخ</label>
          <input type='text' value="31/10/2023" readOnly />
        </div>
        <div className='step-input'>
          <label>الركاب</label>
          <input type='text' value="4" readOnly />
        </div>
      </div>
      <button className="stepper-btn" onClick={ onNext }>التالى</button>
    </div>
  );
};

const Step2 = (prop) => {
  const { onNext } = prop;
  return (
    <div className="landmark-step">
      <h2>معلومات الدفع</h2>
      <div className="step-info">
        <div className='step-input'>
          <label >وسيلة الدفع</label>
          <input type='text' value="دفع نقدى" readOnly />
        </div>
        <div className='step-input'>
          <label >مبلغ الحجز</label>
          <input type='text' value="100 ريال" readOnly />
        </div>
        <div className='step-input'>
          <label >اجمالى المبلغ المطلوب</label>
          <input type='text' value="100 ريال" readOnly />
        </div>
      </div>
      <div>
        <button className="stepper-btn" onClick={ onNext }>
          <span>تحميل PDF</span> <img src="download.svg" alt="download" />
        </button>
      </div>
    </div>
  );
};
