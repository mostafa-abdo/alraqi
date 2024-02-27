import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect, useRef, useState } from 'react';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';
import './prices.scss';
import { pricesRows } from '../../data';
import axiosClient from '../../../axios-client';

const Prices = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(7);
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const columns = [
        {
            id: "id",
            label: "ID",
            minWidth: 55,
            align: 'center',
        },
        {
            id: "trip",
            label: "الرحله",
            minWidth: 200,
            align: 'center',
        },
        {
            id: "car1",
            label: "سيارة سيدان سوناتا/كامرى",
            minWidth: 89,
            align: 'center',
        },
        {
            id: "car2",
            label: "سيارات عائلية جمس بوكن XL",
            minWidth: 89,
            align: 'center',
        },
        {
            id: "car3",
            label: "سيارات عائلية(فئة اتش وان)",
            minWidth: 89,
            align: 'center',
        },
        {
            id: "car4",
            label: "سيارة فورد توريس 2024 VIP",
            minWidth: 89,
            align: 'center',
        },
        {
            id: "car5",
            label: "سيارات VIP لكزس ES",
            minWidth: 89,
            align: 'center',
        },
        {
            id: "car6",
            label: "السيارات الفارهة(مرسيدس. بى ام)",
            minWidth: 89,
            align: 'center',
        },
        {
            id: "edit",
            label: "تعديل",
            minWidth: 55,
            align: 'center',
        },
    ];


    const {isloaded, loadError} = useLoadScript({
        region: "saudi arabia",
    })



    const [loading, setLoading] = useState(false);
    const [editLoading, setEditLoading] = useState(false);
    const [prices, setPrices] = useState([]);
    const [currentPrice, setCurrentPrice] = useState(
        {
            from: '',
            to: '',
            sonata: 0,
            gms: 0,
            h1: 0,
            ford: 0,
            lexus: 0,
            mercedes: 0
        }
    )

    const fromRef = useRef();
    const toRef = useRef();
    const sonataRef = useRef();
    const gmsRef = useRef();
    const h1Ref = useRef();
    const fordRef = useRef();
    const lexusRef = useRef();
    const mercedesRef = useRef();

    const [fromPlace, setFromPlace] = useState('');
    const [toPlace, setToPlace] = useState('');


    const handleToPlaceChange = (newPlace) => {
        setToPlace(newPlace.formattedAddress);
        toRef.current.value = newPlace.formattedAddress;
    };


    const getPrices = () => {
        axiosClient
            .get("/prices")
            .then((data) => {
                setPrices(data.data.prices);
                console.log(data.data.prices);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getPrices();
    }, []);


    const getPrice = (id) => {
        setEditLoading(true)
        axiosClient
            .get(`/prices/${id}`)
            .then((data) => {
                setCurrentPrice(
                    {
                        id : data.data.data.id,
                        from: data.data.data.from,
                        to: data.data.data.to,
                        sonata_price: data.data.data.sonata_price,
                        gms_price: data.data.data.gms_price,
                        h1_price: data.data.data.h1_price,
                        ford_price: data.data.data.ford_price,
                        lexus_price: data.data.data.lexus_price,
                        mercedes_price: data.data.data.mercedes_price
                        
                    }
                )
                setOpenEdit(true)
                setEditLoading(false)
            })
            .catch((err) => {
                console.log(err);
            });
    };



    const deletePrice = (e, id) => {
        e.preventDefault();
        if (window.confirm('هل تريد حذف هذا السعر؟')) {
            axiosClient
                .delete(`/prices/${id}`)
                .then(() => {
                    getPrices();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    

    function createBookingData(id, trip, car1, car2, car3, car4, car5, car6, edit) {
        return { id, trip, car1, car2, car3, car4, car5, car6, edit };
    }


    const rows = prices.map((item) => (
        createBookingData(
            item.id,
            `من ${item.from} إلي ${item.to}`,
            item.sonata_price,
            item.gms_price,
            item.h1_price,
            item.ford_price,
            item.lexus_price,
            item.mercedes_price,
            <>
            <img src="../edit.svg" alt="edit" style={{ cursor: "pointer" }} onClick={(e) => handleEditClick(e, item.id)} />
            <img src="../delete.svg" alt='delete' style={{ cursor: "pointer", marginRight: "15px" }} onClick={(e) => deletePrice(e, item.id)} />
            </>
        )
    ));


    const handleAddSubmit = (e) => {
        e.preventDefault();
        const from = fromRef.current.value;
        const to = toRef.current.value;
        const sonata = sonataRef.current.value;
        const gms = gmsRef.current.value;
        const h1 = h1Ref.current.value;
        const ford = fordRef.current.value;
        const lexus = lexusRef.current.value;
        const mercedes = mercedesRef.current.value;

        const payload = {
            from,
            to,
            sonata_price: sonata,
            gms_price: gms,
            h1_price: h1,
            ford_price: ford,
            lexus_price: lexus,
            mercedes_price: mercedes
        }
        axiosClient
            .post("/prices", payload)
            .then(() => {
                getPrices();
                setOpen(false);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    const fromEditRef = useRef();
    const toEditRef = useRef();
    const sonataEditRef = useRef();
    const gmsEditRef = useRef();
    const h1EditRef = useRef();
    const fordEditRef = useRef();
    const lexusEditRef = useRef();
    const mercedesEditRef = useRef();

    const handleEditClick = (e, price) => {
        e.preventDefault();
        getPrice(price);
    }


    const handleEditSubmit = (e, id) => {
        e.preventDefault();
        const from = fromEditRef.current.value;
        const to = toEditRef.current.value;
        const sonata = sonataEditRef.current.value;
        const gms = gmsEditRef.current.value;
        const h1 = h1EditRef.current.value;
        const ford = fordEditRef.current.value;
        const lexus = lexusEditRef.current.value;
        const mercedes = mercedesEditRef.current.value;

        const payload = {
            from,
            to,
            sonata_price: sonata,
            gms_price: gms,
            h1_price: h1,
            ford_price: ford,
            lexus_price: lexus,
            mercedes_price: mercedes
        }

        axiosClient
            .put(`/prices/${id}`, payload)
            .then(() => {
                getPrices();
                setOpenEdit(false);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className='prices'>
            <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: "16px", borderRadius: "10px" }}>
                <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead style={{ backgroundColor: "#BBA664" }}>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, border: "none", fontSize: "11px", fontWeight: "500", lineHeight: "20px", backgroundColor: "#BBA664", color: "#fff" }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        style={{ border: "none", fontSize: "14px", lineHeight: "16px" }}
                                                        key={column.id}
                                                        align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    style={{ backgroundColor: "#F4F6F9" }}
                    rowsPerPageOptions={[0]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            {/* add */}
            <div className='addNew-btn'>
                <div className='btn' onClick={() => setOpen(true)}>اضافة رحلة جديدة </div>
                {open &&
                    <div className="modal">
                        <h1>اضافة رحلة جديدة</h1>
                        <span className="close" onClick={() => setOpen(false)}>
                            <img src="../close.svg" alt="close" />
                        </span>
                        <form className="form-popup" onSubmit={(e)=>handleAddSubmit(e)}>

                            <div className='filter-inputs'>
                                <Autocomplete value={fromPlace} 
                                    options={{
                                        types: ['administrative_area_level_2'],
                                        componentRestrictions: { country: 'sa' }
                                    }}

                                    onLoad={(autocomplete) => {
                                        autocomplete.addListener('place_changed', () => {
                                            const place = autocomplete.getPlace();
                                            console.log(place)
                                            fromRef.current.value = (place.name).replace('امارة منطقة', '')
                                        })
                                    }}

                                    
                                    style = {{zIndex: '20000'}}
                                >
                                    <div className='input-container'>
                                        <label>من</label>
                                        <input type='text' placeholder='من' ref={fromRef} />
                                    </div>
                                </Autocomplete>
                                <Autocomplete value={fromPlace} onChange={handleToPlaceChange}
                                    options={{
                                        types: ['administrative_area_level_2'],
                                        componentRestrictions: { country: 'sa' }
                                    }} 

                                    onLoad={(autocomplete) => {
                                        autocomplete.addListener('place_changed', () => {
                                            const place = autocomplete.getPlace();
                                            console.log(place.name)
                                            toRef.current.value = (place.name).replace('امارة منطقة', '')
                                        })
                                    }}
    
                                    
                                    style = {{zIndex: '20000'}}
                                >
                                    <div className='input-container'>
                                        <label>إلي</label>
                                        <input type='text' placeholder='إلي' ref={toRef} />
                                    </div>
                                </Autocomplete>
                                <div className='input-container'>
                                    <label>سيارة سيدان
                                        سوناتا/كامرى</label>
                                    <input type='number' placeholder='ادخل المبلغ '  ref={sonataRef} />
                                </div>
                                <div className='input-container'>
                                    <label>سيارات عائلية جمس بوكن XL</label>
                                    <input type='number' placeholder='ادخل المبلغ' ref={gmsRef} />
                                </div>
                                <div className='input-container'>
                                    <label>سيارات عائلية (فئة اتش وان)</label>
                                    <input type='number' placeholder='ادخل المبلغ' ref={h1Ref} />
                                </div>
                                <div className='input-container'>
                                    <label>سيارة فورد توريس 2024 VIP</label>
                                    <input type='number' placeholder='ادخل المبلغ' ref={fordRef} />
                                </div>
                                <div className='input-container'>
                                    <label>سيارات VIP لكزس ES</label>
                                    <input type='number' placeholder='ادخل المبلغ'  ref={lexusRef} />
                                </div>
                                <div className='input-container'>
                                    <label>السيارات الفارهة
                                        (مرسيدس. بى ام)</label>
                                    <input type='number' placeholder='ادخل المبلغ' ref={mercedesRef} />
                                </div>
                            </div>
                            <button type='submit'>اضافة</button>
                        </form>
                    </div>
                }
                {openEdit &&
                    <div className="modal">
                        <h1>تعديل</h1>
                        <span className="close" onClick={() => setOpenEdit(false)}>
                            <img src="../close.svg" alt="close" />
                        </span>
                        <form className="form-popup" onSubmit={(e)=>handleEditSubmit(e, currentPrice.id)}>
                            <div className='filter-inputs'>
                            <Autocomplete value={fromPlace}
                                    options={{
                                        types: ['administrative_area_level_2'],
                                        componentRestrictions: { country: 'sa' }
                                    }} 
                                    
                                    
                                    style = {{zIndex: '20000'}}
                                >
                                    <div className='input-container'>
                                        <label>من</label>
                                        <input type='text' defaultValue={currentPrice.from} placeholder='من' ref={fromEditRef} />
                                    </div>
                                </Autocomplete>
                                <Autocomplete 
                                    options={{
                                        types: ['administrative_area_level_2'],
                                        componentRestrictions: { country: 'sa' }
                                    }} 
                                    
                                    style = {{zIndex: '20000'}}
                                >
                                    <div className='input-container'>
                                        <label>إلي</label>
                                        <input type='text' defaultValue={currentPrice.to} placeholder='إلي' ref={toEditRef} />
                                    </div>
                                </Autocomplete>
                                <div className='input-container'>
                                    <label>سيارة سيدان
                                        سوناتا/كامرى</label>
                                    <input type='number' defaultValue={currentPrice.sonata_price} placeholder='ادخل المبلغ '  ref={sonataEditRef} />
                                </div>
                                <div className='input-container'>
                                    <label>سيارات عائلية جمس بوكن XL</label>
                                    <input type='number' defaultValue={currentPrice.gms_price} placeholder='ادخل المبلغ' ref={gmsEditRef} />
                                </div>
                                <div className='input-container'>
                                    <label>سيارات عائلية (فئة اتش وان)</label>
                                    <input type='number' defaultValue={currentPrice.h1_price} placeholder='ادخل المبلغ' ref={h1EditRef} />
                                </div>
                                <div className='input-container'>
                                    <label>سيارة فورد توريس 2024 VIP</label>
                                    <input type='number' defaultValue={currentPrice.ford_price} placeholder='ادخل المبلغ' ref={fordEditRef} />
                                </div>
                                <div className='input-container'>
                                    <label>سيارات VIP لكزس ES</label>
                                    <input type='number' defaultValue={currentPrice.lexus_price} placeholder='ادخل المبلغ'  ref={lexusEditRef} />
                                </div>
                                <div className='input-container'>
                                    <label>السيارات الفارهة
                                        (مرسيدس. بى ام)</label>
                                    <input type='number' defaultValue={currentPrice.mercedes_price} placeholder='ادخل المبلغ' ref={mercedesEditRef} />
                                </div>
                            </div>
                            <button>تعديل</button>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
};

export default Prices;