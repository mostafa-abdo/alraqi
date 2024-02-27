
import { useEffect, useRef, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import './heroSection.scss';
const HeroSection = () => {
    const [place, setPlace] = useState({});
    const [come, setCome] = useState(false);
    const [fromPlace, setFromPlace] = useState('');
    const [toPlace, setToPlace] = useState('');
    const fromRef = useRef('');
    const toRef = useRef('');
    const dateRef = useRef('');
    const timeRef = useRef('');
    const personRef = useRef('');
    const carRef = useRef('');
    const returnRef = useRef('');
    const returnDateRef = useRef('');
    const returnTimeRef = useRef('');

    
    const [currentTab, setCurrentTab] = useState('journey');
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        date: '',
        time: '',
        person: '',
        car: '',
        return: '',
        returnDate: '',
        returnTime: ''
    });
    const [showCars, setShowCars] = useState(false);

    

    const handleCome = (e) => {
        setCome(!come)
        handleInputChange(e)
    }

    useEffect(() => {

        $('.timepicker').timepicker({
            change: function () {
                handleShowCars()
                setFormData(prevState => ({
                    ...prevState,
                    [this[0].name]: this[0].value
                }))
            },
            timeFormat: 'HH:mm',
            interval: 15,
            dynamic: false,
            dropdown: true,
            scrollbar: true,
            defaultTime: new Date()
        });

        $('.datepicker').datepicker({
            onSelect: function () {
                handleShowCars()
                setFormData(prevState => ({
                    ...prevState,
                    [this.name]: this.value
                }));
            },
            dateFormat: 'yy/mm/dd',
            minDate: new Date()
        });
    }, [come, currentTab])

    const handleInputChange = (e) => {
        handleShowCars()
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const encodedData = new URLSearchParams(formData);
        navigate(`/booking?${encodedData.toString()}`)
    }




    const handleShowCars = () => {
        if(currentTab === 'journey'){
            if(dateRef.current.value !== '' && timeRef.current.value !== '' && personRef.current.value !== '' && fromRef.current.value !== '' && toRef.current.value !== ''){
                setShowCars(true)
            }
        }
    }


    const cars = [
        { id: 1, name: 'كامري/سوناتا 2024', category: '', persons: 3, bags: 3, image: 'car.jpg', price: 100 },
        { id: 2, name: 'فورد تورس 2024', category: 'VIP', persons: 3, bags: 3, image: 'car.jpg', price: 200 },
        { id: 3, name: 'جمس يوكن اكس ال 2024', category: 'عائلية', persons: 7, bags: 7, image: 'car.jpg', price: 300 },
        { id: 4, name: 'اتش ون 2024', category: 'عائلية', persons: 11, bags: 11, image: 'car.jpg', price: 400 },
        { id: 5, name: 'لكزس es 2024', category: 'VIP', persons: 3, bags: 3, image: 'car.jpg', price: 500 },
        { id: 6, name: 'مرسيدس S560 2023', category: 'فاخرة', persons: 3, bags: 3, image: 'car.jpg', price: 600 },
    ];

    const [selectedCar, setSelectedCar] = useState(null);

    const handleCarClick = (car) => {
        setFormData(prevState => ({
            ...prevState,
            car: car
        }));

        setSelectedCar(car);
    }



    const [date, setDate] = useState(new Date());




    return (
        <div className='heroSection'>
            <div className="container">

                <div className="booking-container">
                    <div className="booking-tabs">
                        <a className={`tab ${currentTab === 'journey' ? 'active' : ''}`} onClick={() => setCurrentTab('journey')}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.50173 4.75C7.50173 4.5315 9.75973 3 12.0017 3C14.2437 3 16.5017 4.5315 16.5017 4.75C16.5017 5.53 16.4187 5.992 16.3487 6.2435C16.3022 6.4085 16.1477 6.5 15.9762 6.5H8.02723C7.85573 6.5 7.70123 6.4085 7.65473 6.2435C7.58473 5.992 7.50173 5.53 7.50173 4.75ZM11.2517 4.5C11.1191 4.5 10.9919 4.55268 10.8982 4.64645C10.8044 4.74021 10.7517 4.86739 10.7517 5C10.7517 5.13261 10.8044 5.25979 10.8982 5.35355C10.9919 5.44732 11.1191 5.5 11.2517 5.5H12.7517C12.8843 5.5 13.0115 5.44732 13.1053 5.35355C13.199 5.25979 13.2517 5.13261 13.2517 5C13.2517 4.86739 13.199 4.74021 13.1053 4.64645C13.0115 4.55268 12.8843 4.5 12.7517 4.5H11.2517ZM8.02073 9.609C6.35573 9.094 6.77573 8.174 7.41073 7.5H16.7317C17.2397 8.149 17.5122 9.0245 15.9767 9.5485C16.0395 10.1055 15.9845 10.6695 15.8153 11.2039C15.646 11.7383 15.3664 12.2311 14.9945 12.6505C14.6225 13.0698 14.1666 13.4064 13.6563 13.6382C13.1459 13.87 12.5926 13.992 12.032 13.9962C11.4715 14.0005 10.9164 13.8868 10.4026 13.6627C9.88881 13.4386 9.42787 13.109 9.04965 12.6953C8.67144 12.2816 8.38439 11.793 8.20714 11.2613C8.02989 10.7295 7.96638 10.1664 8.02073 9.6085M11.8657 9.9995C13.1867 9.9995 14.2107 9.9295 14.9957 9.8075C15.0215 10.2152 14.9638 10.6238 14.8261 11.0084C14.6884 11.3929 14.4736 11.7453 14.1949 12.0439C13.9162 12.3426 13.5795 12.5811 13.2053 12.745C12.8311 12.9089 12.4275 12.9946 12.019 12.997C11.6105 12.9993 11.2059 12.9182 10.8299 12.7587C10.4538 12.5991 10.1144 12.3645 9.83224 12.0691C9.55012 11.7737 9.33129 11.4238 9.18916 11.0408C9.04704 10.6579 8.98462 10.2499 9.00573 9.842C9.73723 9.943 10.6747 9.9995 11.8657 9.9995ZM16.2102 17.3C15.758 16.5944 15.1355 16.0139 14.4 15.612C13.6646 15.2101 12.8398 14.9996 12.0017 15C11.1633 14.9995 10.3382 15.2099 9.60244 15.6121C8.86671 16.0142 8.24401 16.595 7.79173 17.301C7.62387 17.0425 7.36607 16.8554 7.06823 16.776L6.10223 16.5175C5.78205 16.4317 5.44088 16.4765 5.15377 16.6422C4.86666 16.8079 4.65711 17.0808 4.57123 17.401L4.18323 18.85C4.14073 19.0086 4.12989 19.174 4.15132 19.3367C4.17275 19.4995 4.22603 19.6564 4.30812 19.7986C4.39021 19.9408 4.49949 20.0654 4.62974 20.1653C4.75999 20.2652 4.90865 20.3385 5.06723 20.381L6.03273 20.64C6.19513 20.6837 6.36471 20.6942 6.53124 20.6706C6.69777 20.6471 6.85782 20.5901 7.00173 20.503C7.00213 20.6356 7.05519 20.7626 7.14923 20.8561C7.24328 20.9496 7.37062 21.0019 7.50323 21.0015C7.63584 21.0011 7.76285 20.948 7.85634 20.854C7.94983 20.7599 8.00213 20.6326 8.00173 20.5V20C8.00173 19.8095 8.01523 19.622 8.04073 19.4385L10.6427 20.136C10.7635 20.3945 10.9555 20.6132 11.1962 20.7665C11.437 20.9197 11.7164 21.0011 12.0017 21.0011C12.2871 21.0011 12.5665 20.9197 12.8072 20.7665C13.0479 20.6132 13.2399 20.3945 13.3607 20.136L15.9627 19.4385C15.9882 19.622 16.0017 19.8095 16.0017 20V20.5C16.0011 20.6326 16.0531 20.76 16.1464 20.8543C16.2397 20.9485 16.3666 21.0018 16.4992 21.0025C16.6318 21.0032 16.7593 20.9511 16.8535 20.8578C16.9478 20.7645 17.0011 20.6376 17.0017 20.505C17.2817 20.673 17.6277 20.7315 17.9682 20.64L18.9342 20.3815C19.0928 20.339 19.2415 20.2657 19.3717 20.1658C19.502 20.0659 19.6112 19.9413 19.6933 19.7991C19.7754 19.6569 19.8287 19.5 19.8501 19.3372C19.8716 19.1745 19.8607 19.0091 19.8182 18.8505L19.4297 17.4015C19.3438 17.0813 19.1343 16.8084 18.8472 16.6427C18.5601 16.477 18.2189 16.4322 17.8987 16.518L16.9327 16.7765C16.6356 16.8556 16.3782 17.0424 16.2102 17.3ZM8.30323 18.473C8.57339 17.8199 9.01163 17.2499 9.57341 16.821C10.1352 16.3921 10.8005 16.1195 11.5017 16.031V18.0855C11.2777 18.165 11.0756 18.2965 10.9122 18.4692C10.7488 18.6419 10.6287 18.8509 10.5617 19.079L8.30323 18.473ZM15.7002 18.473C15.43 17.8199 14.9918 17.25 14.43 16.8211C13.8682 16.3921 13.2029 16.1196 12.5017 16.031V18.0855C12.9537 18.2455 13.3067 18.6155 13.4417 19.079L15.7002 18.473ZM12.0017 20C12.1343 20 12.2615 19.9473 12.3553 19.8536C12.449 19.7598 12.5017 19.6326 12.5017 19.5C12.5017 19.3674 12.449 19.2402 12.3553 19.1464C12.2615 19.0527 12.1343 19 12.0017 19C11.8691 19 11.7419 19.0527 11.6482 19.1464C11.5544 19.2402 11.5017 19.3674 11.5017 19.5C11.5017 19.6326 11.5544 19.7598 11.6482 19.8536C11.7419 19.9473 11.8691 20 12.0017 20Z" fill="white" />
                            </svg>
                            <span>رحلة</span>
                        </a>
                        <a className={`tab ${currentTab === 'hours' ? 'active' : ''}`} onClick={() => setCurrentTab('hours')}>
                            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1227 6.84581 16.266 4.78051 14.7427 3.25727C13.2195 1.73403 11.1542 0.877275 9 0.875ZM9 15.875C7.64026 15.875 6.31105 15.4718 5.18046 14.7164C4.04987 13.9609 3.16868 12.8872 2.64833 11.6309C2.12798 10.3747 1.99183 8.99237 2.2571 7.65875C2.52238 6.32513 3.17716 5.10013 4.13864 4.13864C5.10013 3.17716 6.32514 2.52237 7.65876 2.2571C8.99238 1.99183 10.3747 2.12798 11.631 2.64833C12.8872 3.16868 13.9609 4.04987 14.7164 5.18045C15.4718 6.31104 15.875 7.64025 15.875 9C15.8729 10.8227 15.1479 12.5702 13.8591 13.8591C12.5702 15.1479 10.8227 15.8729 9 15.875ZM14 9C14 9.16576 13.9342 9.32473 13.8169 9.44194C13.6997 9.55915 13.5408 9.625 13.375 9.625H9C8.83424 9.625 8.67527 9.55915 8.55806 9.44194C8.44085 9.32473 8.375 9.16576 8.375 9V4.625C8.375 4.45924 8.44085 4.30027 8.55806 4.18306C8.67527 4.06585 8.83424 4 9 4C9.16576 4 9.32474 4.06585 9.44195 4.18306C9.55916 4.30027 9.625 4.45924 9.625 4.625V8.375H13.375C13.5408 8.375 13.6997 8.44085 13.8169 8.55806C13.9342 8.67527 14 8.83424 14 9Z" fill="white" />
                            </svg>
                            <span>بالساعة</span>
                        </a>
                        <a className={`tab ${currentTab === 'package' && 'active'}`} onClick={() => setCurrentTab('package')}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6704 3.33398H8.32871C5.17871 3.33398 3.60371 3.33398 2.62454 4.31065C1.94954 4.98232 1.74037 5.93648 1.67454 7.49148C1.66204 7.79982 1.65537 7.95482 1.71287 8.05732C1.77121 8.15982 2.00037 8.28898 2.46037 8.54565C2.71949 8.6901 2.93532 8.90113 3.08558 9.15692C3.23583 9.41272 3.31505 9.70399 3.31505 10.0007C3.31505 10.2973 3.23583 10.5886 3.08558 10.8444C2.93532 11.1002 2.71949 11.3112 2.46037 11.4557C2.00037 11.7132 1.77037 11.8415 1.71287 11.944C1.65537 12.0465 1.66204 12.2007 1.67537 12.509C1.74037 14.0648 1.95037 15.019 2.62454 15.6907C3.60287 16.6673 5.17787 16.6673 8.32871 16.6673H11.6704C14.8204 16.6673 16.3954 16.6673 17.3745 15.6907C18.0495 15.019 18.2587 14.0648 18.3245 12.5098C18.337 12.2015 18.3437 12.0465 18.2862 11.944C18.2279 11.8415 17.9987 11.7132 17.5387 11.4557C17.2796 11.3112 17.0638 11.1002 16.9135 10.8444C16.7633 10.5886 16.684 10.2973 16.684 10.0007C16.684 9.70399 16.7633 9.41272 16.9135 9.15692C17.0638 8.90113 17.2796 8.6901 17.5387 8.54565C17.9987 8.28898 18.2287 8.15982 18.2862 8.05732C18.3437 7.95482 18.337 7.80065 18.3237 7.49148C18.2587 5.93648 18.0487 4.98315 17.3745 4.31065C16.3962 3.33398 14.8212 3.33398 11.6704 3.33398Z" stroke="white" strokeWidth="1.5" />
                                <path d="M7.5 12.5L12.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M12.9154 12.084C12.9154 12.305 12.8276 12.517 12.6713 12.6732C12.515 12.8295 12.303 12.9173 12.082 12.9173C11.861 12.9173 11.6491 12.8295 11.4928 12.6732C11.3365 12.517 11.2487 12.305 11.2487 12.084C11.2487 11.863 11.3365 11.651 11.4928 11.4947C11.6491 11.3384 11.861 11.2507 12.082 11.2507C12.303 11.2507 12.515 11.3384 12.6713 11.4947C12.8276 11.651 12.9154 11.863 12.9154 12.084ZM8.7487 7.91732C8.7487 8.13833 8.6609 8.35029 8.50462 8.50657C8.34834 8.66285 8.13638 8.75065 7.91536 8.75065C7.69435 8.75065 7.48239 8.66285 7.32611 8.50657C7.16983 8.35029 7.08203 8.13833 7.08203 7.91732C7.08203 7.6963 7.16983 7.48434 7.32611 7.32806C7.48239 7.17178 7.69435 7.08398 7.91536 7.08398C8.13638 7.08398 8.34834 7.17178 8.50462 7.32806C8.6609 7.48434 8.7487 7.6963 8.7487 7.91732Z" fill="white" />
                            </svg>
                            <span>الباقات</span>
                        </a>
                    </div>
                    <div className="booking-form">
                        {currentTab === 'journey' &&
                            <form action="/booking" method='get' onSubmit={(e) => handleSubmit(e)}>
                                <div className="inputs">
                                    <Autocomplete
                                        value={fromPlace}
                                        options={{
                                            types: ['administrative_area_level_2'],  
                                            componentRestrictions: { country: 'sa' }
                                        }}

                                        
                                        onLoad={(autocomplete) => {
                                            autocomplete.addListener("place_changed", () => {
                                                handleShowCars()
                                                const place = autocomplete.getPlace();
                                                setFromPlace(place.formatted_address);
                                                fromRef.current.value = place.formatted_address
                                                setFormData(prevState => ({
                                                    ...prevState,
                                                    from: place.formatted_address
                                                }))
                                            })
                                        }}
                                    >
                                        <div className="input">
                                            <i className="fa-solid fa-location-arrow"></i>
                                            <input type="text" name='from' placeholder="من: المطار، المدينة، الفندق، الاماكن الاخري" ref={fromRef} onChange={(e) => handleInputChange(e)} />
                                        </div>
                                    </Autocomplete>
                                    <Autocomplete
                                        value={toPlace}
                                        options={{
                                            types: ['administrative_area_level_2'],
                                            componentRestrictions: { country: 'sa' }
                                        }}
                                        onLoad={(autocomplete) => {
                                            autocomplete.addListener("place_changed", () => {
                                                handleShowCars()
                                                const place = autocomplete.getPlace();
                                                setToPlace(place.formatted_address);
                                                toRef.current.value = place.formatted_address
                                                setFormData(prevState => ({
                                                    ...prevState,
                                                    to: place.formatted_address
                                                }))
                                            })
                                        }}
                                    >
                                        <div className="input">
                                            <i className="fa-solid fa-location-arrow"></i>
                                            <input type="text" name='to' placeholder="الى: المطار، المدينة، الفندق، الاماكن الاخري" ref={toRef} onChange={(e) => handleInputChange(e)} />
                                        </div>
                                    </Autocomplete>
                                    <div className="inline-inputs">
                                        <div className="input">
                                            <i className="fa-solid fa-calendar-days"></i>
                                            <input type="text" placeholder="التاريخ" name='date' className='datepicker' ref={dateRef} onChange={e => handleInputChange(e)} autoCapitalize='off' />
                                        </div>
                                        <div className="input">
                                            <i className="fa-regular fa-clock"></i>
                                            <input type="text" className='timepicker' name='time' placeholder='الوقت' ref={timeRef} onChange={e => handleInputChange(e)} autoComplete='off' />
                                        </div>
                                    </div>

                                    <div className="inline-inputs">
                                        <div className="input">
                                            <i className="fa-solid fa-user-group"></i>
                                            <input type="number" placeholder="عدد الاشخاص" name='people' ref={personRef} onChange={e => handleInputChange(e)} />
                                        </div>
                                        <div className="check-input">
                                            <label className="checkbox-container">
                                                <div>
                                                    <input type="checkbox" className="single-checkbox cust-type" ref={returnRef} value="1" name='type' onChange={e => handleCome(e)} />
                                                    <span className="checkmark"></span>
                                                </div>
                                                <div>
                                                    الرحلة ذهاباً واياباً
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className={`inline-inputs expandable ${come ? 'expanded' : ''}`}>
                                        {come &&
                                            <>
                                                <div className="input">
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    <input type="text" placeholder="تاريخ الرجوع" name='return_date' ref={returnDateRef} className='datepicker' onChange={e => handleInputChange(e)} autoComplete='off' />
                                                </div>
                                                <div className="input">
                                                    <i className="fa-regular fa-clock"></i>
                                                    <input type="text" placeholder="وقت الرجوع" name='return_time' ref={returnTimeRef} className='timepicker' onChange={e => handleInputChange(e)} autoComplete='off' />
                                                </div>
                                            </>
                                        }
                                    </div>
                                    {/*for each car in cars*/}
                                    <div className={`items-container expandable ${showCars ? 'expanded' : ''}`}>
                                    {showCars &&
                                        cars.map((car, index) => (
                                            car.persons >= formData.people &&(
                                                <div className={`item ${selectedCar === index ? 'selected' : ''}`} key={index} onClick={() => handleCarClick(index)}>
                                                    <div className="title">
                                                        <div className="category">{car.category}</div>
                                                        <div className='name'>{car.name}</div>
                                                    </div>
                                                    <div className="info-container">
                                                        <div className="img">
                                                            <img src={`./${car.image}`} alt="car" />
                                                        </div>
                                                        <div className='info'>
                                                            <div className='price'>من {car.price} ر.س</div>
                                                            <div className='num'>
                                                                <span>{car.bags}</span>
                                                                <i className="fa-solid fa-xmark"></i>
                                                                <i className="fa-solid fa-briefcase"></i>
                                                                <span>{car.persons}</span>
                                                                <i className="fa-solid fa-xmark"></i>
                                                                <i className="fa-solid fa-person"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        ))
                                    }
                                    </div>
                                    <div className="submit-container">
                                        <button type="submit">قم بالحجز الأن</button>
                                    </div>
                                </div>

                            </form>
                        }
                        {currentTab === 'hours' &&
                            <form action="">
                                <div className="inputs">
                                    <Autocomplete
                                        value={fromPlace}
                                        
                                        options={{
                                            types: ['address'],
                                            componentRestrictions: { country: 'sa' }
                                        }}
                                    >
                                        <div className="input">
                                            <i className="fa-solid fa-location-arrow"></i>
                                            <input type="text" placeholder="من: المطار، المدينة، الفندق، الاماكن الاخري" ref={fromRef} />
                                        </div>
                                    </Autocomplete>
                                    <div className="input">
                                        <i className="fa-regular fa-clock"></i>
                                        <select name="hours" id="">
                                            <option value="1">1 ساعة</option>
                                            <option value="2">2 ساعات</option>
                                            <option value="3">3 ساعات</option>
                                            <option value="4">4 ساعات</option>
                                            <option value="5">5 ساعات</option>
                                            <option value="6">6 ساعات</option>
                                            <option value="7">7 ساعات</option>
                                            <option value="8">8 ساعات</option>
                                            <option value="9">9 ساعات</option>
                                            <option value="10">10 ساعات</option>
                                        </select>
                                    </div>
                                    <div className="inline-inputs">
                                        <div className="input">
                                            <i className="fa-solid fa-calendar-days"></i>
                                            <input type="text" placeholder="التاريخ" className='datepicker' />
                                        </div>
                                        <div className="input">
                                            <i className="fa-regular fa-clock"></i>
                                            <input type="text" className='timepicker' placeholder='الوقت' />
                                        </div>
                                    </div>

                                    <div className="inline-inputs">
                                        <div className="input">
                                            <i className="fa-solid fa-user-group"></i>
                                            <input type="number" placeholder="عدد الاشخاص" />
                                        </div>
                                        <div className="check-input">

                                        </div>
                                    </div>

                                    <div className={`inline-inputs expandable ${come ? 'expanded' : ''}`}>
                                        {come &&
                                            <>
                                                <div className="input">
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    <input type="text" placeholder="تاريخ الرجوع" className='datepicker' />
                                                </div>
                                                <div className="input">
                                                    <i className="fa-regular fa-clock"></i>
                                                    <input type="text" placeholder="وقت الرجوع" className='timepicker' />
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <div className="submit-container">
                                        <button type="submit">قم بالحجز الأن</button>
                                    </div>
                                </div>

                            </form>
                        }

                        {currentTab === 'package' &&
                            <form action="">
                                <div className="inputs">
                                    <Autocomplete
                                        value={fromPlace}
                                        
                                        options={{
                                            types: ['address'],
                                            componentRestrictions: { country: 'sa' }
                                        }}
                                    >
                                        <div className="input">
                                            <i className="fa-solid fa-location-arrow"></i>
                                            <input type="text" placeholder="من: المطار، المدينة، الفندق، الاماكن الاخري" ref={fromRef} />
                                        </div>
                                    </Autocomplete>
                                    <div className="input">
                                        <i className="fa-solid fa-kaaba"></i>
                                        <select name="package" id="">
                                            <option selected disabled>اختر الباقة</option>
                                            <option value="1">مكة المكرمة / المدينة المنورة</option>
                                        </select>
                                    </div>
                                    <div className="inline-inputs">
                                        <div className="input">
                                            <i className="fa-solid fa-calendar-days"></i>
                                            <input type="text" placeholder="التاريخ" className='datepicker' />
                                        </div>
                                        <div className="input">
                                            <i className="fa-regular fa-clock"></i>
                                            <input type="text" className='timepicker' placeholder='الوقت' />
                                        </div>
                                    </div>

                                    <div className="inline-inputs">
                                        <div className="input">
                                            <i className="fa-solid fa-user-group"></i>
                                            <input type="number" placeholder="عدد الاشخاص" />
                                        </div>
                                        <div className="check-input">

                                        </div>
                                    </div>

                                    <div className={`inline-inputs expandable ${come ? 'expanded' : ''}`}>
                                        {come &&
                                            <>
                                                <div className="input">
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    <input type="text" placeholder="تاريخ الرجوع" className='datepicker' />
                                                </div>
                                                <div className="input">
                                                    <i className="fa-regular fa-clock"></i>
                                                    <input type="text" placeholder="وقت الرجوع" className='timepicker' />
                                                </div>
                                            </>
                                        }
                                    </div>


                                    <div className="submit-container">
                                        <button type="submit">قم بالحجز الأن</button>
                                    </div>
                                </div>

                            </form>
                        }

                    </div>
                </div>
                <div className="desc">
                    احصل ع وسيله مواصلاتك بكبسه زر وبدقائق معدوده احجز الان وادفع عند وصولك او عبر البطاقه الائتمانيه .
                </div>
            </div>
        </div>
    )
};

export default HeroSection;




