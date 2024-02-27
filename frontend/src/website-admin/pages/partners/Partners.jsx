import { travelPartnersRows, travelPartnersStats } from '../../data';
import TableData from '../../components/tableData/TableData';
import Stats from '../../components/stats/Stats';
import './travelPartners.scss';

const Partners = () => {

  const columns = [
    {
      id: "id",
      label: "ID",
      minWidth: 55,
      align: 'center',
    },
    {
      id: "name",
      label: "الاسم بالكامل",
      minWidth: 280,
      align: 'center',
    },
    {
      id: "email",
      label: "البريد الالكترونى",
      minWidth: 280,
      align: 'center',
    },
    {
      id: "phone",
      label: "رقم الواتساب",
      minWidth: 280,
      align: 'center',
    },
    {
      id: "bookingNumbers",
      label: "عدد الحجوزات",
      minWidth: 280,
      align: 'center',
    },
  ];

  function createBookingData(id, name, email, phone, bookingNumbers) {
    return { id, name, email, phone, bookingNumbers };
  }
  const rows = travelPartnersRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      item.email,
      <p style={ { direction: "ltr" } }>{ item.phone }</p>,
      item.bookingNumbers,
    )
  ));

  return (
    <div className='travel-partners'>
      <div className='nav-header'>وكلاء السفر</div>
      <div className='content'>
        <div className='header'>
          <Stats data={ travelPartnersStats } />
          <div className='discount'>
            <div className='title'>
              <img src='users-stats.svg' alt='users' />
              <span>نسبة الخصم</span>
            </div>
            <div className='discount-input'>
              <input type='text' placeholder='ادخل نسبة الخصم' />
              <button>حفظ</button>
            </div>
          </div>
        </div>
        <div className='table' >
          <div className='head'>
            <div className='title'>وكلاء السفر</div>
          </div>
          <TableData columns={ columns } rows={ rows } numbers={ 8 } />
        </div>
      </div>
    </div>
  )
};

export default Partners;