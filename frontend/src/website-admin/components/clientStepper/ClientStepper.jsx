import Stepper from "../stepper/Stepper";
import './clientStepper.scss';

function ClientStepper(prop) {
  const { setOpenStepper } = prop;
  const list = [
    <Step1 key={ 0 } />,
    <Step2 key={ 1 } />,
    <Step3 key={ 2 } />,
    <Step4 key={ 3 } />,
  ];
  return (
    <div className="partner_details">
      <Stepper list={ list } setOpenStepper={setOpenStepper} />
    </div>
  );
}
export default ClientStepper;

const Step1 = (prop) => {
  const { onNext } = prop;

  return (
    <div className="step">
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
          <label htmlFor='email'>البريد الالكترونى</label>
          <input type='email' id='email' value="mohamedsaid@gmail.com" readOnly />
        </div>
      </div>
      <button className="stepper-btn" onClick={ onNext }>التالى</button>
    </div>
  );
};

const Step2 = (prop) => {
  const { onNext } = prop;

  return (
    <div className="step">
      <h2>معلومات الحجز</h2>
      <div className="step-info">
        <div className='step-input'>
          <label >نوع الحجز</label>
          <input type='text' value="احجز الان" readOnly />
        </div>
        <div className='step-input'>
          <label >نوع الذهاب</label>
          <input type='text' value="ذهاب فقط" readOnly />
        </div>
        <div className='step-input'>
          <label >من</label>
          <input type='text' value="مطار جدة" readOnly />
        </div>
        <div className='step-input'>
          <label >الى</label>
          <input type='text' value="مكة المكرمة" readOnly />
        </div>
        <div className='step-input'>
          <label >تاريخ الحجز</label>
          <input type='text' value="31/10/2023" readOnly />
        </div>
        <div className='step-input'>
          <label >الوقت</label>
          <input type='text' value="10:00 PM" readOnly />
        </div>
        <div className='step-input'>
          <label >عدد الركاب</label>
          <input type='text' value="4" readOnly />
        </div>
        <div className='step-input'>
          <label>الفئة</label>
          <input type='text' value="اقتصادية" readOnly />
        </div>
      </div>
      <button className="stepper-btn" onClick={ onNext }>التالى</button>
    </div>
  );
};

const Step3 = (prop) => {
  const { onNext } = prop;
  return (
    <div className="step">
      <h2>معلومات الحجز</h2>
      <div className="step-info">
        <div className='step-input'>
          <label >وسيلة الدفع</label>
          <input type='text' value="دفع نقدى" readOnly />
        </div>
        <div className='step-input'>
          <label >الخدمات الاضافية</label>
          <input type='text' value="0:00" readOnly />
        </div>
        <div className='step-input'>
          <label >مبلغ الخصم</label>
          <input type='text' value="0:00" readOnly />
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
      <button className="stepper-btn" onClick={ onNext }>التالى</button>
    </div>
  );
};

const Step4 = (prop) => {
  const { onNext } = prop;
  return (
    <div className="step">
      <h2>معلومات اضافية</h2>
      <div className="notes">
        <h3>الملاحظات</h3>
        <p>
          الملاحظات اللى هيكتبها صاحب الحجز هنا الملاحظات اللى هيكتبها صاحب الحجز هنا الملاحظات اللى هيكتبها صاحب الحجز هنا الملاحظات اللى هيكتبها صاحب الحجز هنا الملاحظات اللى هيكتبها صاحب الحجز هنا الملاحظات اللى هيكتبها صاحب الحجز هنا الملاحظات اللى هيكتبها صاحب ى
        </p>
      </div>
      <button className="stepper-btn" onClick={ onNext } style={ { display: "flex", alignItems: "center", justifyContent: "center" } }>
        تحميل PDF <img src="download.svg" alt="download" />
      </button>
    </div>
  );
};
