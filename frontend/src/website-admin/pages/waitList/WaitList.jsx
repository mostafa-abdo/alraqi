import DriverSteps from '../../components/driverStepper/driverSteps/DriverSteps';
import TableData from '../../components/tableData/TableData';
import { waitListRows } from '../../data';
import { useState } from 'react';
import './waitList.scss';

const WaitList = () => {
  const [openStepper, setOpenStepper] = useState(false);

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
      id: "status",
      label: "الحالة",
      minWidth: 128,
      align: 'center',
    },
  ];

  function createBookingData2(id, name, email, phone, carType, status) {
    return { id, name, email, phone, carType, status };
  }
  const rows = waitListRows.map((item) => (
    createBookingData2(
      item.id,
      item.name,
      item.email,
      <p style={ { direction: "ltr" } }>{ item.phone }</p>,
      item.carType,
      item.status.map((item) => (
        <div key={ item.id } style={{display: "flex", gap: "15px", justifyContent: "center"}}>
          <img style={ { cursor: "pointer" } } src={ item.true } alt='true' onClick={ () => setOpenStepper(true) } />
          <img style={ { cursor: "pointer" } } src={ item.false } alt='false' />
        </div>
      ))
    )
  ));


  return (
    <div className='wait-list'>
      <div className='content'>
        <div className='table' >
          <div className='head'>
            <div className='title'>قائمة الانتظار</div>
          </div>
          <TableData columns={ columns } rows={ rows } numbers={ 10 } />
        </div>
        { openStepper &&
          <DriverSteps setOpenStepper={ setOpenStepper } />
        }
      </div>
    </div>
  )
};

export default WaitList;