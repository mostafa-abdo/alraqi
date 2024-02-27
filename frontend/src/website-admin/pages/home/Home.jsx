import { useState } from 'react';
import { bookingRows, homeNumbers, profitsRows } from '../../data';
import TableData from '../../components/tableData/TableData';
import './home.scss';

const Home = () => {
  const [open, setOpen] = useState(false);

  const profitsColumns = [
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
      id: "bookingDate",
      label: "تاريخ الحجز",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "revenues",
      label: "ايرادات",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "expenses",
      label: "المصروفات",
      minWidth: 128,
      align: 'center',
    },
    {
      id: "profits",
      label: "الارباح",
      minWidth: 128,
      align: 'center',
    },
  ];

  const bookingColumns = [
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
      id: "trip",
      label: "الرحلة",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "bookingDate",
      label: "تاريخ الحجز",
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

  function createData(id, name, phone, bookingDate, revenues, expenses, profits) {
    return { id, name, phone, bookingDate, revenues, expenses, profits };
  }
  const profitsData = profitsRows.map((item) => (
    createData(
      item.id,
      item.name,
      <p style={{direction:"ltr"}}>{ item.phone }</p>,
      item.bookingDate,
      item.revenues,
      item.expenses,
      item.profits
    )
  ));

  function createBookingData(id, name, phone, trip, bookingDate, payment, status) {
    return { id, name, phone, trip, bookingDate, payment, status };
  }
  const bookingData = bookingRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      <p style={{direction:"ltr"}}>{ item.phone }</p>,
      item.trip,
      item.bookingDate,
      item.payment,
      <img src={ item.status } alt='status' />
    )
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // filter inputs
  const [activeType, setActiveType] = useState(false);
  const [selectType, setSelectType] = useState("احجز الان");
  const bookingTypes = ["احجز الان", "احجز", "احجز الان", "احجز الان"];

  const [activeMethod, setActiveMethod] = useState(false);
  const [selectMethod, setSelectMethod] = useState("ذهاب فقط");
  const methodTypes = ["ذهاب فقط", "ذهاب", "احجز الان", "احجز الان"];

  const [activePlace, setActivePlace] = useState(false);
  const [selectPlace, setSelectPlace] = useState("مكة");
  const Places = ["مكة", "المدينة", "احجز الان", "احجز الان"];

  const [activePlaceTo, setActivePlaceTo] = useState(false);
  const [selectPlaceTo, setSelectPlaceTo] = useState("المدينة");

  const [activeDate, setActiveDate] = useState(false);
  const [selectDate, setSelectDate] = useState("هذا الشهر");
  const dates = ["هذا الشهر", "اليوم", "احجز الان", "احجز الان"];

  const [activeStatus, setActiveStatus] = useState(false);
  const [selectStatus, setSelectStatus] = useState("قائمة الانتظار");
  const status = ["قائمة الانتظار", "مكتملة", "احجز الان", "احجز الان"];

  const [activePayment, setActivePayment] = useState(false);
  const [selectPayment, setSelectPayment] = useState("الكل");
  const payments = ["الكل", "نقدى", "احجز الان", "احجز الان"];
  // end

  return (
    <div className='home'>
      <div className='nav-header'>الرئيسية</div>
      <div className='home-content'>
        <div className='home-numbers'>
          {
            homeNumbers.map((item) => (
              <div className='item' key={ item.id }>
                <div className='img'>
                  <img src={ "../"+item.img } alt={ item.title } />
                </div>
                <h2 className='title'>{ item.number }<span>{ item.title }</span></h2>
              </div>
            ))
          }
        </div>
        {/* tables */ }
        <div className='profitsTable'>
          <div className='head'>
            <div className='title'>الارباح</div>
            <div className='actions'>
              <div className='download'>تحميل<img src='../download.svg' alt='download' /></div>
              <div className='filter' onClick={ () => setOpen(true) }><img src='../filter.svg' alt='filter' /></div>
              { open &&
                <div className="modal">
                  <h1>تصفية</h1>
                  <span className="close" onClick={ () => setOpen(false) }>
                    <img src='../close.svg' alt='close' />
                  </span>
                  <form onSubmit={ handleSubmit }>
                    {/* inputs */ }
                    <div className='filter-inputs'>
                      <div className="input">
                        <label onClick={ (e) => { setActiveType(!activeType); e.preventDefault(); } }>نوع الحجز</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActiveType(!activeType); e.preventDefault(); } }>
                            <span>{ selectType }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activeType &&
                            <div className="dropdown-content">
                              {
                                bookingTypes.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectType(item);
                                      setActiveType(false);
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
                      <div className="input">
                        <label onClick={ (e) => { setActiveMethod(!activeMethod); e.preventDefault(); } }>طريقة الذهاب</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActiveMethod(!activeMethod); e.preventDefault(); } }>
                            <span>{ selectMethod }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activeMethod &&
                            <div className="dropdown-content">
                              {
                                methodTypes.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectMethod(item);
                                      setActiveMethod(false);
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
                      <div className="input">
                        <label onClick={ (e) => { setActivePlace(!activePlace); e.preventDefault(); } }>من</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActivePlace(!activePlace); e.preventDefault(); } }>
                            <span>{ selectPlace }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activePlace &&
                            <div className="dropdown-content">
                              {
                                Places.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectPlace(item);
                                      setActivePlace(false);
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
                      <div className="input">
                        <label onClick={ (e) => { setActivePlaceTo(!activePlaceTo); e.preventDefault(); } }>الى</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActivePlaceTo(!activePlaceTo); e.preventDefault(); } }>
                            <span>{ selectPlaceTo }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activePlaceTo &&
                            <div className="dropdown-content">
                              {
                                Places.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectPlaceTo(item);
                                      setActivePlaceTo(false);
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
                      <div className="input">
                        <label onClick={ (e) => { setActiveDate(!activeDate); e.preventDefault(); } }>تاريخ الحجز</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActiveDate(!activeDate); e.preventDefault(); } }>
                            <span>{ selectDate }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activeDate &&
                            <div className="dropdown-content">
                              {
                                dates.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectDate(item);
                                      setActiveDate(false);
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
                      <div className="input">
                        <label onClick={ (e) => { setActiveStatus(!activeStatus); e.preventDefault(); } }>حالة الحجز</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActiveStatus(!activeStatus); e.preventDefault(); } }>
                            <span>{ selectStatus }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activeStatus &&
                            <div className="dropdown-content">
                              {
                                status.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectStatus(item);
                                      setActiveStatus(false);
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
                      <div className="input">
                        <label onClick={ (e) => { setActivePayment(!activePayment); e.preventDefault(); } }>وسيلة الدفع</label>
                        <div className="step-dropdown">
                          <div className="dropdown-btn" onClick={ (e) => { setActivePayment(!activePayment); e.preventDefault(); } }>
                            <span>{ selectPayment }</span>
                            <img src="/arrow-down.svg" alt="arrow down" />
                          </div>
                          {
                            activePayment &&
                            <div className="dropdown-content">
                              {
                                payments.map((item, index) => (
                                  <div className="dropdown-item"
                                    key={ index }
                                    onClick={ (e) => {
                                      setSelectPayment(item);
                                      setActivePayment(false);
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
                    <button>تصفية</button>
                  </form>
                </div>
              }
            </div>
          </div>
          <TableData columns={ profitsColumns } rows={ profitsData } numbers={ 4 } />
        </div>
        <div className='bookingTable'>
          <div className='title'>اخر الحجوزات</div>
          <TableData columns={ bookingColumns } rows={ bookingData } numbers={ 4 } />
        </div>
      </div>
    </div>
  )
};

export default Home;