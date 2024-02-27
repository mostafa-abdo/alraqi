import { useState } from 'react';
import { hotelsRows } from '../../data';
import TableData from '../../components/tableData/TableData';
import './hotels.scss';

const Hotels = () => {
  const [open, setOpen] = useState(false);

  const columns = [
    {
      id: "id",
      label: "ID",
      minWidth: 60,
      align: 'center',
    },
    {
      id: "name",
      label: "الاسم",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "phone",
      label: "رقم الهاتف",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "email",
      label: "البريد الالكترونى",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "actions",
      label: "الحالة",
      minWidth: 128,
      align: 'center',
    }
  ];

  function createBookingData(id, name, phone, email, actions) {
    return { id, name, phone, email, actions };
  }
  const rows = hotelsRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      <p style={ { direction: "ltr" } }>{ item.phone }</p>,
      item.email,
      <div >
        <img src={ item.right } alt='right' style={ { cursor: "pointer" } } onClick={ () => setOpen(true) } />
        <img src={ item.wrong } alt='wrong' style={ { cursor: "pointer", marginRight: "15px" } } />
      </div>
    )
  ));

  return (
    <div className='hotels'>
      <div className='nav-header'>الفنادق</div>
      <div className='content'>
        <div className='table' >
          <div className='head'>
            <div className='title'>قائمة الانتظار</div>
          </div>
          <TableData columns={ columns } rows={ rows } numbers={ 10 } />
          {
            open &&
            <div className="hotel-popup">
              <div className='head'>
                <h2>معلومات العميل</h2>
                <img src="close.svg" alt="close" onClick={ () => setOpen(false) } />
              </div>
              <div className="popup-info">
                <div className='popup-input'>
                  <label htmlFor='fullName'>الاسم بالكامل</label>
                  <input type='text' id='fullName' value="محمد سعيد احمد" readOnly />
                </div>
                <div className='popup-input phone-input'>
                  <label htmlFor='phone'>رقم الواتساب</label>
                  <div>
                    <div className="flag"><img src="flag.svg" alt="flag" /><span>+20</span></div>
                    <input type='text' id='phone' value="01201201201" readOnly />
                  </div>
                </div>
                <div className='popup-input'>
                  <label>البريد الالكترونى</label>
                  <input type='text' value="Mohamed@gmail.com" readOnly />
                </div>
                <div className='popup-input'>
                  <label>اسم الفندق</label>
                  <input type='text' value="بلازا" readOnly />
                </div>
                <div className='popup-input'>
                  <label>تاريخ الحجز</label>
                  <input type='text' value="31/10/2023" readOnly />
                </div>
                <div className='popup-input'>
                  <label>الايام</label>
                  <input type='text' value="4" readOnly />
                </div>
                <div className='popup-input'>
                  <label>الغرف</label>
                  <input type='text' value="4" readOnly />
                </div>
                <div className='popup-input'>
                  <label>الاشخاص</label>
                  <input type='text' value="4" readOnly />
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
};

export default Hotels;