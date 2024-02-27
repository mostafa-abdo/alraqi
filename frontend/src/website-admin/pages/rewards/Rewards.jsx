import './rewards.scss';

const Rewards = () => {

  return (
    <div className='rewards'>
      <div className='nav-header'>الولاء و المكافات</div>
      <div className='content'>
        <div className='header'>
          <div className='discount'>
            <div className='discount-input'>
              <label htmlFor='number'>الخصم بعد عدد مرات الحجز</label>
              <input id='number' type='text' placeholder='ادخل عدد مرات الحجز' />
            </div>
            <div className='discount-input'>
              <label htmlFor='discount'>نسبة الخصم</label>
              <input id='discount' type='text' placeholder='ادخل نسبة الخصم' />
            </div>
            <button>حفظ</button>
          </div>
        </div>
        <div className='body'>
          <p><span>01</span> يجب ان تكون لديك حساب على موقعنا</p>
          <p><span>02</span> يمكنك الحصول على خصم بمقدار 5% كل 5 حجوزات</p>
        </div>
      </div>
    </div>
  )
};

export default Rewards;