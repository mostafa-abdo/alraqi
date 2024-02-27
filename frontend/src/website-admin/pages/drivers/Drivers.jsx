import { driversRows, driversStats } from '../../data';
import TableData from '../../components/tableData/TableData';
import Stats from '../../components/stats/Stats';
import { Link } from 'react-router-dom';
import './drivers.scss';

const Drivers = () => {

  const columns = [
    {
      id: "id",
      label: "ID",
      minWidth: 60,
      align: 'center',
    },
    {
      id: "name",
      label: "الاسم بالكامل",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "email",
      label: "البريد الالكترونى",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "phone",
      label: "رقم الواتساب",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "carType",
      label: "نوع السياره",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "remove",
      label: "حذف",
      minWidth: 128,
      align: 'center',
    },
  ];

  function createBookingData(id, name, email, phone, carType, remove) {
    return { id, name, email, phone, carType, remove };
  }
  const rows = driversRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      item.email,
      <p style={ { direction: "ltr" } }>{ item.phone }</p>,
      item.carType,
      <img style={ { cursor: "pointer" } } src={ item.delete } alt='status' />
    )
  ));

  return (
    <div className='drivers'>
      <div className='nav-header'>كن شريكا</div>
      <div className='content'>
        <div className='header'>
          <Stats data={ driversStats } />
          <div className='wait-list'>
            <div className='title'>
              <img src='users-stats.svg' alt='users' />
              <span>قائمة الانتظار</span>
            </div>
            <Link className='button' to="/wait-list-drivers" >تفحص القائمة</Link>
          </div>
        </div>
        <div className='table' >
          <div className='head'>
            <div className='title'>السائقين</div>
          </div>
          <TableData columns={ columns } rows={ rows } numbers={ 8 } />
        </div>
      </div>
          
      
    </div>
  )
};

export default Drivers;