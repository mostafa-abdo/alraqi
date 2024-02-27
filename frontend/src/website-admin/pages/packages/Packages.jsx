import PackageSteps from '../../components/packageStepper/packageSteps/PackageSteps';
import { packagesRows, packagesStats } from '../../data';
import TableData from '../../components/tableData/TableData';
import PackageStats from '../../components/stats/PackageStats';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './packages.scss';

const Packages = () => {
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
      id: "phone",
      label: "رقم الواتساب",
      minWidth: 200,
      align: 'center',
    },
    {
      id: "category",
      label: "الفئه",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "payment",
      label: "وسيله الدفع",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "status",
      label: "حاله الحجز",
      minWidth: 128,
      align: 'center',
    },
  ];

  function createBookingData(id, name, phone, category, payment, status) {
    return { id, name, phone, category, payment, status };
  }
  const rows = packagesRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      <p style={ { direction: "ltr" } }>{ item.phone }</p>,
      item.category,
      item.payment,
      <img style={ { cursor: "pointer" } } src={ item.status } alt='status' onClick={() => setOpenStepper(true)} />
    )
  ));

  return (
    <div className='packages'>
      <div className='nav-header'>الباقات</div>
      <div className='content'>
        <div className='header'>
          <PackageStats data={ packagesStats } />
          <div className='available-packages'>
            <div className='title'>
              <img src='../users-stats.svg' alt='users' />
              <span>الباقات المتاحة</span>
            </div>
            <Link className='button' to="/dashboard/packages/packages-control">رؤية الباقات</Link>
          </div>
        </div>
        <div className='table' >
          <div className='head'>
            <div className='title'>حجوزات الباقات</div>
          </div>
          <TableData columns={ columns } rows={ rows } numbers={ 8 } />
        </div>
        { openStepper &&
          <PackageSteps setOpenStepper={ setOpenStepper } />
        }
      </div>
    </div>
  )
};

export default Packages;