import { useEffect, useRef, useState } from 'react';
import { blogsRows, blogsStats, } from '../../data';
import TableData from '../../components/tableData/TableData';
import Stats from '../../components/stats/Stats';
import './blogs.scss';
import axiosClient from '../../../axios-client';

const Blogs = () => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);

    const columns = [
        {
            id: "id",
            label: "ID",
            minWidth: 60,
            align: 'center',
        },
        {
            id: "name",
            label: "اسم المدونة",
            minWidth: 200,
            align: 'center',
        },
        {
            id: "state",
            label: "المدينة",
            minWidth: 200,
            align: 'center',
        },
        {
            id: "date",
            label: "تاريخ الاضافة",
            minWidth: 178,
            align: 'center',
        },
        {
            id: "counts",
            label: "الزيارات",
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

    function createBlogData(id, name, state, date, counts, actions) {
        return { id, name, state,date, counts, actions };
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // filter inputs
    const [activeMonth, setActiveMonth] = useState(false);
    const [selectMonth, setSelectMonth] = useState("الكل");
    const months = ["الكل", "مارس"];

    const [activePlace, setActivePlace] = useState(false);
    const [selectPlace, setSelectPlace] = useState("المدينة المنورة");
    const Places = ["مكة", "المدينة", " الرياض"];
    // end

    // handle upload files
    const fileInputRef = useRef(null);
    const handleFileInput = () => {
        fileInputRef.current.click();
    }


    const onImageChoose = (ev) => {
        const file = ev.target.files[0];

        const reader = new FileReader();

        reader.onload = () => {

            setBlog({
                ...blog,
                image: file,
                image_url: reader.result
            });


            console.log(blog);
            ev.target.value = '';
        }

        reader.readAsDataURL(file);
    }


    const [blogs, setBlogs] = useState([]);
    const [editloading, setEditLoading] = useState(false);

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState(null);

    const [currentBlog, setCurrentBlog] = useState({
        id: 1,
        name: 'اسم المدونة',
        state: 'اسم المدينة',
        description: 'وصف المدونة',
        image_url: 'https://via.placeholder.com/300',
    });

    const [blog, setBlog] = useState(
        {
            id: 1,
            name: 'اسم المدونة',
            date: '2022-12-12',
            state: 'اسم المدينة',
            counts: 1000,
            image: null,
            image_url: null
        }
    );

    const nameRef = useRef();
    const stateRef = useRef();
    const descRef = useRef();

    const handleAddBlog = (e) => {
        e.preventDefault();
        setLoading(true)
        setOpenAdd(false)



        const payload = {
            title: nameRef.current.value,
            description: descRef.current.value,
            state: stateRef.current.value,
            image: blog.image
        }

        if (payload.image) {
            payload.image = blog.image_url;
        }

        setBlog({
            id: null,
            name: '',
            description: '',
            image: null,
            image_url: null
        })

        setErrors(null);

        console.log(payload);


        axiosClient.post('/blogs', payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(({ data }) => {
                getBlogs()
                setLoading(false)
                setOpenAdd(false)

            })
            .catch(err => {
                setLoading(false)
                if (err.response.status === 422) {
                    setErrors(err.response.data.errors);
                }

                setOpenAdd(false)
            })

    }

    useEffect(() => {
        getBlogs()
    }, [])

    const getBlogs = () => {
        setLoading(true)
        axiosClient.get('/blogs')
            .then(({ data }) => {
                setBlogs(data.blogs)
                console.log(data);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
            })
    }

    const getBlog = (id) => {
        setEditLoading(true)
        axiosClient.get(`/blogs/${id}`)
            .then(({ data }) => {
                setCurrentBlog(
                    {
                        id : data.data.id,
                        name: data.data.title,
                        state: data.data.state,
                        description: data.data.description,
                        image_url: data.data.image
                    }
                )
                setOpenEdit(true)
                setEditLoading(false)
                console.log(data);
            })
            .catch(err => {

            })
    }

    const deleteBlog = (ev, id) => {
        ev.preventDefault()
        if (window.confirm('هل تريد حذف هذا المدونة؟')) {
            axiosClient.delete(`/blogs/${id}`)
                .then(() => {
                    getBlogs()
                })
                .catch(err => {
                    setLoading(false)
                })
        }
    }


    const handleOpenEdit = (ev, id) => {
        ev.preventDefault()
        getBlog(id)
        
    }

    const nameEditRef = useRef();
    const stateEditRef = useRef();
    const descEditRef = useRef();

    const handleEditBlog = (e) => {
        e.preventDefault();
        

        const payload = {
            title: nameEditRef.current.value,
            state: stateEditRef.current.value,
            description: descEditRef.current.value,
        }


        axiosClient.put(`/blogs/${currentBlog.id}`, payload)
            .then(() => {
                getBlogs()
                setOpenEdit(false)
            })
            .catch(err => {
                setLoading(false)
                if (err.response.status === 422) {
                    setErrors(err.response.data.errors);
                }
            })
    }



    const rows = blogs.map((item) => (
        createBlogData(item.id, item.title, item.state,item.updated_at, item.views,
            <div key={item.id}>
                <img src={"../edit.svg"} alt='edit' style={{ cursor: "pointer" }} onClick={(ev) => handleOpenEdit(ev, item.id)} />
                <img src={"../delete.svg"} alt='delete' style={{ cursor: "pointer", marginRight: "15px" }} onClick={(e) => deleteBlog(e, item.id)} />
            </div>
        )
    ))

    return (
        <div className='blogs'>
            <div className='nav-header'>مدونتنا</div>
            <div className='content'>
                <div className='header'>
                    <Stats data={blogsStats} />
                    <div className='add-blog'>
                        <div className='title'>
                            <img src='../users-stats.svg' alt='users' />
                            <span>اضافة مدونة جديدة</span>
                        </div>
                        <button onClick={() => setOpenAdd(true)}>اضافة مدونة</button>
                        {
                            openAdd &&
                            <div className='add-form form'>

                                <div className='head'>
                                    <span>اضافة مدونة</span>
                                    <img src='../close.svg' alt='close' onClick={() => setOpenAdd(false)} />
                                </div>
                                <div>
                                    {errors && errors.image && <p className='error'>{errors.image[0]}</p>}
                                    {errors && errors.title && <p className='error'>{errors.title[0]}</p>}
                                    {errors && errors.description && <p className='error'>{errors.description[0]}</p>}
                                </div>
                                <div className='img'>
                                    <div className='upload_file' onClick={handleFileInput}>
                                        <input ref={fileInputRef} type='file' style={{ display: "none" }} accept="image/*" onChange={(e) => onImageChoose(e)} />
                                        <img src='/upload.svg' alt='upload file' />
                                        <h2>Upload Files</h2>
                                        <p>PNG, JPG and GIF files are allowed</p>
                                    </div>
                                </div>
                                <form className='info' onSubmit={e => handleAddBlog(e)}>
                                <div className='name'>
                                        <label>اسم المدينة</label>
                                        <input type='text' placeholder='ادخل اسم المدينة' ref={stateRef} />
                                    </div>
                                    <div className='name'>
                                        <label>اسم المدونة</label>
                                        <input type='text' placeholder='ادخل اسم المدونة' ref={nameRef} />
                                    </div>
                                    <div className='description'>
                                        <label>الوصف</label>
                                        <textarea rows={7} placeholder='ادخل وصف المدونة' ref={descRef} />
                                    </div>
                                    <button type='submit' className='add-btn'>اضافة</button>
                                </form>
                            </div>
                        }
                        {
                            openEdit &&
                            <div className='edit-form form'>
                                <div className='head'>
                                    <span>تعديل مدونة</span>
                                    <img src='../close.svg' alt='close' onClick={() => setOpenEdit(false)} />
                                </div>
                                <div className='img'>
                                    <img src={currentBlog.image_url} alt='edit blog img' />
                                </div>
                                <form className='info' onSubmit={e => handleEditBlog(e)}>
                                    <div className='name'>
                                        <label>اسم المدينة</label>
                                        <input type='text' placeholder='ادخل اسم المدينة' ref={stateEditRef} defaultValue={currentBlog.state} />
                                    </div>
                                    <div className='name'>
                                        <label>اسم المدونة</label>
                                        <input type='text' placeholder='ادخل اسم المدونة' ref={nameEditRef} defaultValue={currentBlog.name} />
                                    </div>
                                    <div className='description'>
                                        <label>الوصف</label>
                                        <textarea rows={7} placeholder='ادخل وصف المدونة' ref={descEditRef} defaultValue={currentBlog.description} />
                                    </div>
                                    <button type='submit' className='add-btn'>اضافة</button>
                                </form>
                            </div>
                        }
                    </div>
                </div>
                <div className='table' >
                    <div className='head'>
                        <div className='title'>بيانات المدونات</div>
                        <div className='actions'>
                            <div className='filter' onClick={() => setOpen(true)}>
                                <img src='../filter.svg' alt='filter' />
                            </div>
                            {open &&
                                <div className="modal">
                                    <h1>تصفية</h1>
                                    <span className="close" onClick={() => setOpen(false)}>
                                        <img src='../close.svg' alt='close' />
                                    </span>
                                    <form onSubmit={handleSubmit}>
                                        {/* inputs */}
                                        <div className='filter-inputs'>
                                            <div className="input">
                                                <label onClick={(e) => { setActiveMonth(!activeMonth); e.preventDefault(); }}>الشهر</label>
                                                <div className="step-dropdown">
                                                    <div className="dropdown-btn" onClick={(e) => { setActiveMonth(!activeMonth); e.preventDefault(); }}>
                                                        <span>{selectMonth}</span>
                                                        <img src="/arrow-down.svg" alt="arrow down" />
                                                    </div>
                                                    {
                                                        activeMonth &&
                                                        <div className="dropdown-content">
                                                            {
                                                                months.map((item, index) => (
                                                                    <div className="dropdown-item"
                                                                        key={index}
                                                                        onClick={(e) => {
                                                                            setSelectMonth(item);
                                                                            setActiveMonth(false);
                                                                            e.preventDefault();
                                                                        }}
                                                                    >
                                                                        {item}
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="input">
                                                <label onClick={(e) => { setActivePlace(!activePlace); e.preventDefault(); }}>طريقة الذهاب</label>
                                                <div className="step-dropdown">
                                                    <div className="dropdown-btn" onClick={(e) => { setActivePlace(!activePlace); e.preventDefault(); }}>
                                                        <span>{selectPlace}</span>
                                                        <img src="/arrow-down.svg" alt="arrow down" />
                                                    </div>
                                                    {
                                                        activePlace &&
                                                        <div className="dropdown-content">
                                                            {
                                                                Places.map((item, index) => (
                                                                    <div className="dropdown-item"
                                                                        key={index}
                                                                        onClick={(e) => {
                                                                            setSelectPlace(item);
                                                                            setActivePlace(false);
                                                                            e.preventDefault();
                                                                        }}
                                                                    >
                                                                        {item}
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
                    <TableData columns={columns} rows={rows} numbers={8} loading={loading} />
                </div>
            </div>
        </div>
    )
};

export default Blogs;