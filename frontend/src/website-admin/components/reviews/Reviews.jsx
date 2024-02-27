import { useState } from "react";
import { reviewsRows } from "../../data";
import TableData from "../tableData/TableData"
import './reviews.scss';

const Reviews = () => {
  const [open, setOpen] = useState(false);

  // radio buttons
  const handleChangeRounds = (event) => {
    const value = event.target.value;
  }; //end

  const columns = [
    {
      id: "id",
      label: "ID",
      minWidth: 85,
      align: 'center',
    },
    {
      id: "name",
      label: "الاسم",
      minWidth: 177,
      align: 'center',
    },
    {
      id: "review",
      label: "التقييم",
      minWidth: 177,
      align: 'center',
    },
    {
      id: "email",
      label: "النوع",
      minWidth: 177,
      align: 'center',
    },
    {
      id: "actions",
      label: "الحالة",
      minWidth: 128,
      align: 'center',
    }
  ];

  function createBookingData(id, name, review, email, actions) {
    return { id, name, review, email, actions };
  }
  const rows = reviewsRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      <div>
        {
          item.review.map((item, index) => (
            <img src={ "../"+item } alt='star' key={ index } style={ { marginLeft: "5px" } } />
          ))
        }
      </div>,
      <div className='radio_buttons'>
        {
          item.genderArr.map((i) => (
            <div className="radio" key={ i.id }>
              <input id={`radio-${i.id}`} name={`group${item.id}`} type="radio" value={i.gender} onChange={ handleChangeRounds } />
              <label htmlFor={`radio-${i.id}`} className="radio-label">{ i.gender }</label>
            </div>
          ))
        }
      </div>,
      <div >
        <img src={ "../"+item.right } alt='right' style={ { cursor: "pointer" } } onClick={ () => setOpen(true) } />
        <img src={ "../"+item.wrong } alt='wrong' style={ { cursor: "pointer", marginRight: "15px" } } />
      </div>
    )
  ));

  // filter inputs
  const [active, setActive] = useState(false);
  const [select, setSelect] = useState("ذكر");
  const options = ["ذكر", "انثى"];
  // end

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="reviews">
      <TableData columns={ columns } rows={ rows } numbers={ 10 } />
      { open &&
        <div className="modal">
          <h1>تقييم العميل</h1>
          <span className="close" onClick={ () => setOpen(false) }>
            <img src='close.svg' alt='close' />
          </span>
          <form onSubmit={ handleSubmit }>
            {/* inputs */ }
            <div className='filter-inputs'>
              <div className='input-container'>
                <label>الاسم</label>
                <input type='text' placeholder='ادخل الاسم' required />
              </div>
              <div className='input-container'>
                <label>التقييم</label>
                <div className='stars' style={ { display: "flex", gap: "5px"} }>
                  <img src='star.svg' alt='star' />
                  <img src='star.svg' alt='star' />
                  <img src='star.svg' alt='star' />
                  <img src='star.svg' alt='star' />
                  <img src='star.svg' alt='star' />
                </div>
              </div>
              <div className='input-container'>
                <label>الكومنت</label>
                <textarea rows={5} type='text' placeholder='ادخل الكومنت' required />
              </div>
              <div className="input">
                <label onClick={ (e) => { setActive(!active); e.preventDefault(); } }>النوع</label>
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
            </div>
            <div className="buttons">
              <button>قبول</button>
              <button>رفض</button>
            </div>
          </form>
        </div>
      }
    </div>
  )
};

export default Reviews