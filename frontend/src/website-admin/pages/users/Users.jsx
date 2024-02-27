// import { bookingStats, usersStats } from '../../data';
import TableData from '../../components/tableData/TableData';
import UserStats from '../../components/stats/UserStats';
import BookingStats from '../../components/stats/BookingStats';

import './users.scss';
import { useEffect, useState } from 'react';
import axiosClient from '../../../axios-client';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [usersNum, setUsersNum] = useState(0);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    setLoading(true)
    axiosClient.get('/users')
      .then(({ data }) => {
        
        console.log(data);
        setUsersNum(data.data.length)
        setUsers(data.data)
        
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
      })
  }

  const onDelete = (ev, id) => {
    ev.preventDefault()
    if(window.confirm('هل تريد حذف هذا المستخدم؟')){
      axiosClient.delete(`/users/${id}`)
        .then(() => {
          getUsers()
        })
    }
  }

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
      minWidth: 183,
      align: 'center',
    },
    {
      id: "email",
      label: "البريد الالكترونى",
      minWidth: 183,
      align: 'center',
    },
    {
      id: "phone",
      label: "رقم الواتساب",
      minWidth: 183,
      align: 'center',
    },
    {
      id: "bookingNumbers",
      label: "عدد مرات الحجز",
      minWidth: 183,
      align: 'center',
    },
    {
      id: "cancelledNumbers",
      label: "عدد مرات الغاء الحجز",
      minWidth: 183,
      align: 'center',
    },
    {
      id: "remove",
      label: "حذف",
      minWidth: 130,
      align: 'center',
    },
  ];

  function createBookingData(id, name, email, phone, bookingNumbers, cancelledNumbers, remove) {
    return { id, name, email, phone, bookingNumbers, cancelledNumbers, remove };
  }
  const rows = users.map(item => (
    createBookingData(
      item.id,
      item.name,
      item.email,
      <p style={{direction:"ltr"}}>{ item.phone }</p>,
      0,
      0,
      <img style={{cursor:"pointer"}} onClick={ev => onDelete(ev, item.id)} src="../delete.svg" alt='status'/>
    )
  ))

  return (

    <div className='users'>
      <div className='nav-header'>المستخدمين</div>
      <div className='content'>
        <div className='header'>
          <UserStats usersNum={ usersNum } bookingsNum={ 120 } unBookedNum={ 50 }/>
          <BookingStats />
        </div>
        <div className='table' >
          <div className='head'>
            <div className='title'>المستخدمين</div>
          </div>
          <TableData columns={ columns } rows={ rows } numbers={ 8 } loading={ loading }/>
        </div>
      </div>
    </div>
  )
};

export default Users;