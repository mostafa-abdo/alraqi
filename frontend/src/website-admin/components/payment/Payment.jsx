import { useState } from "react";
import { paymentOptions, paymentRows } from "../../data";
import TableData from "../tableData/TableData";
import './payment.scss';

const Payment = () => {
  const [card, setCard] = useState(false);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openImg, setOpenImg] = useState(false);
  const [openNewCard, setOpenNewCard] = useState(false);
  const [openEditCard, setOpenEditCard] = useState(false);

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
      id: "bookingDate",
      label: "تاريخ الحجز",
      minWidth: 178,
      align: 'center',
    },
    {
      id: "paid",
      label: "المبلغ المدفوع",
      minWidth: 128,
      align: 'center',
    }
  ];

  function createBookingData(id, name, phone, bookingDate, paid) {
    return { id, name, phone, bookingDate, paid };
  }
  const rows = paymentRows.map((item) => (
    createBookingData(
      item.id,
      item.name,
      <p style={ { direction: "ltr" } }>{ item.phone }</p>,
      item.bookingDate,
      item.paid,
    )
  ));

  // filter inputs
  const [activeDate, setActiveDate] = useState(false);
  const [selectDate, setSelectDate] = useState("هذا الشهر");
  const dates = ["هذا الشهر", "اليوم", "احجز الان", "احجز الان"];
  // end

  const handleAddCard = () => {
    setOpenNewCard(false);
    setCard(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const [images, setImages] = useState([]);
  const [inputKey, setInputKey] = useState(0); // To reset the file input

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
    setImages(images.concat(imagesArray));
    setInputKey(inputKey + 1); // Reset the input to allow selecting the same image again
    setOpenImg(false);
  };

  const removeImage = (indexToRemove) => {
    const filteredImages = images.filter((_, index) => index !== indexToRemove);
    setImages(filteredImages);
  };

  return (
    <div className="payment">
      <div className='payment-options'>
        <h3>خيارات الدفع</h3>
        <div className='options'>
          {
            paymentOptions.map((option, index) => (
              <div key={ index } className="option" >
                <h4>{ option.title }</h4>
                <p>{ option.description }</p>
                <div className="actions">
                  <img src="../edit.svg" alt="edit" onClick={ () => setOpenEdit(true) } />
                  <img src="../delete.svg" alt="delete" />
                  {
                    openEdit &&
                    <div className="modal">
                      <h1>تعديل خيار دفع</h1>
                      <span className="close" onClick={ () => setOpenEdit(false) }>
                        <img src="../close.svg" alt="close" />
                      </span>
                      <form className="form-popup">
                        <div className='filter-inputs'>
                            <div className='input-container'>
                              <label>النص الاول</label>
                              <input type='text' placeholder='ادخل النص الاول' required />
                            </div>
                            <div className='input-container'>
                              <label>النص الثانى</label>
                              <input type='text' placeholder='ادخل النص الثانى' required />
                            </div>
                            <div className='input-container'>
                              <label>النسبة المطلوب دفعها عبر الفيزا</label>
                              <input type='number' placeholder='ادخل النسبة' required />
                            </div>
                        </div>
                        <button>حفظ</button>
                      </form>
                    </div>
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className='addImg-container'>
        <h2 className='title'>شركاء المدفوعات</h2>
        <div className='imgs'>
          { images.map((image, index) => (
            <div key={ index } className='img'>
              <img src={ image } alt={ `image-${index}` } />
              <img className="close-btn" src="../close.svg" alt="delete" onClick={ () => removeImage(index) } />
            </div>
          )) }
        </div>
        <button className='show-btn' onClick={ () => setOpenImg(true) }>اضافة شريك</button>

        { openImg &&
          <div className="modal popup-addImg">
            <h1>اضافة شعار جديد</h1>
            <span className="close" onClick={ () => setOpenImg(false) }>
              <img src='../close.svg' alt='close' />
            </span>
            <form className="content" onSubmit={ handleSubmit }>
              <div className='filter-inputs'>
                <div className='img'>
                  <div className='upload_file' onClick={ () => document.getElementById('fileInput').click() }>
                    <input
                      key={ inputKey } // To reset the input when images are added
                      type='file'
                      onChange={ handleImageChange }
                      multiple
                      id="fileInput"
                      style={ { display: "none" } }
                      ref={ fileInput => fileInput && fileInput.setAttribute('accept', 'image/*') } // Allow only image files
                    />
                    <img src='/upload.svg' alt='upload file' />
                    <h2>Upload Files</h2>
                    <p>PNG, JPG and GIF files are allowed</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        }
      </div>

      <div className='addCard'>
        <h2>محفظتي</h2>
        {
          !card &&
          <div className='addCard-btn' onClick={ () => setOpenNewCard(true) }>
            اضافة بطاقه
          </div>
        }
        {
          card &&
          <div className='card-edit'>
            <img src="Mastercard.svg" alt="card" />
            <input type="text" placeholder="7812 2139 0823 XXXX" />
            <img className="edit-pen" src="edit-pen.svg" alt="edit" onClick={ () => setOpenEditCard(true) } />
          </div>
        }
      </div>
      <div className='payment-table' >
        <div className='head'>
          <div className='title'>تاريخ المعاملات</div>
          <div className='actions'>
            <div className='filter' onClick={ () => setOpen(true) }><img src='../filter.svg' alt='filter' /></div>
            { open &&
              <div className="modal">
                <h1>تصفية</h1>
                <span className="close" onClick={ () => setOpen(false) }>
                  <img src="../close.svg" alt="close" />
                </span>
                <form onSubmit={ handleSubmit }>
                  {/* inputs */ }
                  <div className='filter-inputs'>
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
                  </div>
                  <button>تصفية</button>
                </form>
              </div>
            }
          </div>
        </div>
        <TableData columns={ columns } rows={ rows } numbers={ 8 } />
      </div>

      {
        openNewCard &&
        <div className="addNew-card popup-card">
          <div className="head">
            <h2>اضافة بطاقه جديده</h2>
            <img src="close.svg" alt="close" onClick={ () => setOpenNewCard(false) } />
          </div>
          <div className="body">
            <div className="input-container">
              <label htmlFor="card-number">رقم بطاقة الائتمان</label>
              <input id="card-number" type="text" placeholder="اكتب رقم بطاقة الائتمان" />
            </div>
            <div className="input-container">
              <label htmlFor="date">تاريخ الصلاحية</label>
              <input id="date" type="text" placeholder="23/01/2024" />
            </div>
            <div className="input-container">
              <label htmlFor="cvv">CVV</label>
              <input id="cvv" type="text" placeholder="223" />
            </div>
            <div className="add-btn" onClick={ handleAddCard }>اضافة</div>
          </div>
        </div>
      }
      {
        openEditCard &&
        <div className="edit-card popup-card">
          <div className="head">
            <h2>تعديل  بطاقة الائتمان</h2>
            <img src="close.svg" alt="close" onClick={ () => setOpenEditCard(false) } />
          </div>
          <div className="body">
            <div className="input-container">
              <label htmlFor="name">اسم صاحب البطاقه</label>
              <input id="name" type="text" placeholder="اسم صاحب البطاقه" />
            </div>
            <div className="input-container">
              <label htmlFor="card-number">رقم بطاقة الائتمان</label>
              <input id="card-number" type="text" placeholder="اكتب رقم بطاقة الائتمان" />
            </div>
            <div className="input-container">
              <label htmlFor="date">تاريخ الصلاحية</label>
              <input id="date" type="text" placeholder="23/01/2024" />
            </div>
            <div className="input-container">
              <label htmlFor="cvv">CVV</label>
              <input id="cvv" type="text" placeholder="223" />
            </div>
            <div className="add-btn">تعديل</div>
          </div>
        </div>
      }
    </div>
  )
};

export default Payment