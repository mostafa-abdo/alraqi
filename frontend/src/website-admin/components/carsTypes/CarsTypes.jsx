import { useEffect, useRef, useState } from 'react';
import { carsTypesRows } from '../../data';
import TableData from '../../components/tableData/TableData';
import './carsTypes.scss';
import axiosClient from '../../../axios-client';

const CarsTypes = () => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [errors, setErrors] = useState(null);
    const [cars, setCars] = useState([]);
    const [currentCar, setCurrentCar] = useState(
        {
            name: '',
            category: '',
            persons: 0,
            bags: 0,
            image: null,
            image_url: null
        }
    )
    const [loading, setLoading] = useState(false);
    const [editLoading, setEditLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const [car, setCar] = useState(
        {
            name: '',
            type: '',
            image: null,
            image_url: null,
        }
    );
    const [categories, setCategories] = useState([]);
    const nameRef = useRef();
    const categoryRef = useRef();
    const personsRef = useRef();
    const bagsRef = useRef();

    const columns = [
        {
            id: "img",
            label: "الصوره",
            minWidth: 100,
            align: 'center',
        },
        {
            id: "name",
            label: "اسم السيارة",
            minWidth: 200,
            align: 'center',
        },
        {
            id: "persons",
            label: "عدد الركاب",
            minWidth: 50,
            align: 'center',
        },
        {
            id: "bags",
            label: "عدد الحقائب",
            minWidth: 50,
            align: 'center',
        },
        {
            id: "category",
            label: "الفئه",
            minWidth: 178,
            align: 'center',
        },
        {
            id: "actions",
            label: "تعديل/ حذف",
            minWidth: 128,
            align: 'center',
        }
    ];

    function createBookingData(img, name, persons, bags, category, actions) {
        
        return { img, name, persons, bags, category, actions };
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setOpen(false)

        const payload = {
            name: nameRef.current.value,
            category_id: categoryRef.current.value,
            image: car.image,
            persons: personsRef.current.value,
            bags: bagsRef.current.value,
        }


        if (payload.image) {
            payload.image = car.image_url;
        }

        setCar({
            name: '',
            category: '',
            persons: 0,
            bags: 0,
            image: null,
            image_url: null
        })

        setErrors(null);

        axiosClient.post('/cars', payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(({ data }) => {
                getCars();
                setLoading(false)
                setOpen(false)
            })
            .catch(err => {
                setLoading(false)
                if (err.response.status === 422) {
                    setErrors(err.response.data.errors);
                }
            })


    }

    useEffect(() => {
        getCars()
    }, [])
    const getCars = () => {
        setLoading(true)
        axiosClient.get('/cars')
            .then(({ data }) => {
                setCars(data.cars)
                setCategories(data.categories)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
            })
    }

    const getCar = (id) => {
        setEditLoading(true)
        axiosClient.get(`/cars/${id}`)
            .then(({ data }) => {
                setCurrentCar(
                    {
                        id : data.data.id,
                        name: data.data.name,
                        category: data.data.category,
                        persons: data.data.persons,
                        bags: data.data.bags,
                        image_url: data.data.image
                    }
                )
                setOpenEdit(true)
                console.log(currentCar);
                setEditLoading(false)
            })
            .catch(err => {

            })
        
    }

    const deleteCar = (ev, id) => {
        ev.preventDefault()
        if (window.confirm('هل تريد حذف هذا السياره؟')) {
            axiosClient.delete(`/cars/${id}`)
                .then(() => {
                    getCars()
                })
                .catch(err => {
                    setLoading(false)
                })
        }
    }

    const rows = cars.map((item, index) => (
        createBookingData(
            <img src={item.image} alt='car' style={{ width: "80px", height: "40px" }} />,
            item.name,
            item.persons,
            item.bags,
            item.category,
            <div>
                <img src="../edit.svg" alt='edit' style={{ cursor: "pointer" }} onClick={(e) => handleEditClick(e, item)} />
                <img src="../delete.svg" alt='delete' style={{ cursor: "pointer", marginRight: "15px" }} onClick={(e) => deleteCar(e, item.id)} />
            </div>
        )
    ))


    // filter inputs
    const [activeCat, setActiveCat] = useState(false);
    const [selectCat, setSelectCat] = useState("اقتصادية");
    const [selectCatId, setSelectCatId] = useState(1);
    // const categories = ["اقتصادية", "VIP", "عائلية", "فاخرة"];
    // end

    // handle upload files
    const fileInputRef = useRef(null);
    const handleFileInput = (ev) => {
        fileInputRef.current.click();
    }

    const onImageChoose = (ev) => {
        const file = ev.target.files[0];

        const reader = new FileReader();

        reader.onload = () => {

            setCar({
                ...car,
                image: file,
                image_url: reader.result
            });

            ev.target.value = '';
        }

        reader.readAsDataURL(file);
    }


    const nameEditRef = useRef(null);
    const categoryEditRef = useRef(null);
    const personsEditRef = useRef(null);
    const bagsEditRef = useRef(null);
    const fileInputEditRef = useRef(null);

    const handleEditClick = (e, car) => {
        e.preventDefault();
        getCar(car.id);
    }

    const onEditImageChoose = (ev) => {
        const file = ev.target.files[0];

        const reader = new FileReader();

        reader.onload = () => {

            setCurrentCar({
                ...currentCar,
                image: file,
                image_url: reader.result
            });

            ev.target.value = '';
        }

        reader.readAsDataURL(file);
    }

    const handleEditSubmit = (e , id) => {
        e.preventDefault();
        setEditLoading(true)

        const payload = {
            name: nameEditRef.current.value,
            category_id: categoryEditRef.current.value,
            image: currentCar.image,
            persons: personsEditRef.current.value,
            bags: bagsEditRef.current.value,
        }

        if (currentCar.image) {
            payload.image = currentCar.image_url;
        }

        console.log(payload.image);

        setCar({
            name: '',
            category: '',
            persons: 0,
            bags: 0,
            image: null,
            image_url: null
        })


        axiosClient.put(`/cars/${id}`, payload)
            .then(({ data }) => {
                getCars();
                setEditLoading(false)
                setOpenEdit(false)
            })
            .catch(err => {
                setEditLoading(false)
                if (err.response.status === 422) {
                    setErrors(err.response.data.errors);
                }
            })

    }

    const handleEditFileInput = (ev) => {
        fileInputEditRef.current.click();
    }

    return (
        <div className='cars-types'>
            <div className='table' >
                <div className='head'>
                    <div className='title'>انواع السيارات</div>
                    <div className='actions'>
                        <div className='add-btn' onClick={() => setOpen(true)}>
                            <button onClick={() => setOpen(true)}>اضافة</button>
                        </div>
                        {open &&
                            <div className="modal">
                                <h1>اضافة سياره </h1>
                                <span className="close" onClick={() => setOpen(false)}>
                                    <img src='../close.svg' alt='close' />
                                </span>
                                <form onSubmit={e => handleSubmit(e)} content='multipart/form-data'>
                                    {/* inputs */}
                                    <div className='filter-inputs'>
                                        <div className='type-input'>
                                            <label>اسم السيارة</label>
                                            <input ref={nameRef} type='text' placeholder='ادخل اسم السيارة' />
                                        </div>
                                        <div className='type-input'>
                                            <label>عدد الركاب</label>
                                            <input ref={personsRef} type='number' placeholder='ادخل عدد الركاب' />
                                        </div>
                                        <div className='type-input'>
                                            <label>عدد الحقائب</label>
                                            <input ref={bagsRef} type='number' placeholder='ادخل عدد الحقائب' />
                                        </div>
                                        <div className="type-input">
                                            <label>فئة السيارة</label>
                                            <select name="category" id="" ref={categoryRef}>
                                                
                                                {categories.map((item, index) => (
                                                    <option key={index} value={item.id}>{item.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        
                                        <div className='img'>

                                                <div className='upload_file' onClick={handleFileInput}>
                                                    <input ref={fileInputRef} type='file' style={{ display: "none" }} accept="image/*" onChange={(e) => onImageChoose(e)} />
                                                    {!car.image_url && (<>
                                                        <img src='/upload.svg' alt='upload file' />
                                                        <h2>Upload Files</h2>
                                                        <p>PNG, JPG and GIF files are allowed</p>
                                                    </>)}
                                                    {car.image_url && <img src={car.image_url} className='selected' alt='car' />}
                                                </div>
                                        </div>
                                    </div>
                                    <button type='submit'>اضافة</button>
                                </form>
                            </div>
                        }

                        {openEdit &&
                            <div className="modal">
                                <h1>تعديل السيارة </h1>
                                <span className="close" onClick={() => setOpenEdit(false)}>
                                    <img src='../close.svg' alt='close' />
                                </span>
                                <form onSubmit={e => handleEditSubmit(e, currentCar.id)} content='multipart/form-data'>
                                    {/* inputs */}
                                    <div className='filter-inputs'>
                                        <div className='type-input'>
                                            <label>اسم السيارة</label>
                                            <input ref={nameEditRef} type='text' placeholder='ادخل اسم السيارة' defaultValue={currentCar.name}/>
                                        </div>
                                        <div className='type-input'>
                                            <label>عدد الركاب</label>
                                            <input ref={personsEditRef} type='number' placeholder='ادخل عدد الركاب' defaultValue={currentCar.persons}/>
                                        </div>
                                        <div className='type-input'>
                                            <label>عدد الحقائب</label>
                                            <input ref={bagsEditRef} type='number' placeholder='ادخل عدد الحقائب' defaultValue={currentCar.bags} />
                                        </div>
                                        <div className="type-input">
                                            <label>فئة السيارة</label>
                                            <select name="category" id="" ref={categoryEditRef}>
                                                {categories.map((item, index) => (
                                                    <option key={index} value={item.id} selected={item.name === currentCar.category}>{item.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        
                                        <div className='img'>

                                            {car.image_url && <img src={car.image_url} alt='car' />}
                                            {!car.image_url && (
                                                <div className='upload_file' onClick={handleEditFileInput}>
                                                    <input ref={fileInputEditRef} type='file' style={{ display: "none" }} accept="image/*" onChange={(e) => onEditImageChoose(e)} />
                                                    {!currentCar.image_url &&
                                                    <>
                                                        <img src='/upload.svg' alt='upload file' />
                                                        <h2>Upload Files</h2>
                                                        <p>PNG, JPG and GIF files are allowed</p>
                                                    </>
                                                    }
                                                    {currentCar.image_url &&
                                                    <>
                                                        <img src={currentCar.image_url} alt="" className="selected" />
                                                    </>
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <button type='submit'>تعديل</button>
                                </form>
                            </div>
                        }



                    </div>
                </div>
                <TableData columns={columns} rows={rows} numbers={8} loading={loading} />
            </div>
        </div>
    )
};

export default CarsTypes;