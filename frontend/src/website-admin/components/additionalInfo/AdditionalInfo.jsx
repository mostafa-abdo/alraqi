import { useState } from 'react';
import './additionalInfo.scss';

const AdditionalInfo = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [open, setOpen] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  // filter inputs
  const [active, setActive] = useState(false);
  const [select, setSelect] = useState("فلوس");
  const options = ["فلوس", "فلوس"];
  // end

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='additional-info'>
      <div className='checkbox_inputs'>
        <div className="checkbox">
          <label htmlFor="checkbox-1" className=" container">
            خدمة الاستقبال من بوابة الخروج من المطار
            <input
              id='checkbox-1'
              value='option1'
              type="checkbox"
              checked={ selectedOption === 'option1' }
              onChange={ handleOptionChange }
            />
            <span className="checkmark"></span>
          </label>
          <span style={ { display: "flex", alignItems: "center", gap: "5px" } }>
            مجانا
            <div className='actions'>
              <img src='edit.svg' alt='' />
              <img src='delete.svg' alt='' />
            </div>
          </span>
        </div>
        <div className="checkbox">
          <label htmlFor="checkbox-2" className="container">
            الاستقبال من داخل المطار <br />
            <span className='text'>(للترحيب باسمك بلوحه ف المطار مع المساعده)</span>
            <input
              id='checkbox-2'
              value='option2'
              type="checkbox"
              checked={ selectedOption === 'option2' }
              onChange={ handleOptionChange }
            />
            <span className="checkmark checkmark2"></span>
          </label>
          <span style={ { display: "flex", alignItems: "center", gap: "5px" } }>
            100 ريال
            <div className='actions'>
              <img src='edit.svg' alt='' />
              <img src='delete.svg' alt='' />
            </div>
          </span>
        </div>
      </div>
      <div className='add-btn'>
        <button onClick={ () => setOpen(true) }>اضافة</button>
      </div>
      { open &&
        <div className="modal">
          <h1>اضافة  خدمه</h1>
          <span className="close" onClick={ () => setOpen(false) }>
            <img src='close.svg' alt='close' />
          </span>
          <form onSubmit={ handleSubmit }>
            {/* inputs */ }
            <div className='filter-inputs'>
              <div className='input-container'>
                <label>اسم الخدمة</label>
                <input type='text' placeholder='ادخل اسم الخدمة' required />
              </div>
              <div className='input-container'>
                <label>وصف الخدمة<span style={ { color: "#9094A0" } }>(اختيارى)</span></label>
                <input type='text' placeholder='ادخل الوصف' />
              </div>
              <div className="input">
                <label onClick={ (e) => { setActive(!active); e.preventDefault(); } }>مقابل الخدمة</label>
                <div className="step-dropdown">
                  <div className="dropdown-btn" onClick={ (e) => { setActive(!active); e.preventDefault(); } }>
                    <span>{ select }</span>
                    <img src="/arrow-down.svg" alt="arrow down" />
                  </div>
                  {
                    active &&
                    <div className="dropdown-content">
                      {
                        options.map((item, index) => (
                          <div className="dropdown-item"
                            key={ index }
                            onClick={ (e) => {
                              setSelect(item);
                              setActive(false);
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
              <div className='input-container'>
                <label>السعر</label>
                <input type='text' placeholder='ادخل السعر' />
              </div>
            </div>
            <button>اضافة</button>
          </form>
        </div>
      }
    </div>
  )
};

export default AdditionalInfo;