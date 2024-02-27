import './contactUs.scss';
import { useRef, useState, useEffect } from 'react';
import axiosClient from '../../../axios-client';

const ContactUs = () => {
    const websiteRef = useRef("");
    const phoneRef = useRef("");
    const emailRef = useRef("");
    const whatsappRef = useRef("");
    const facebookRef = useRef("");
    const twitterRef = useRef("");
    const instagramRef = useRef("");
    const [contact, setContact] = useState({
        id: '1',
        name: '',
        phone: '',
        email: '',
        whatsapp: '',
        facebook: '',
        twitter: '',
        instagram: '',
    });
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        getContact();
    }, []);


    const getContact = () => {
        setLoading(true)
        axiosClient.get(`/contacts/${contact.id}`)
            .then(({ data }) => {
                setContact(data.data);
                setLoading(false)
            })
            .catch((error) => { 
                setLoading(false)
            })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const payload = {
            name: websiteRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            whatsapp: whatsappRef.current.value,
            facebook: facebookRef.current.value,
            twitter: twitterRef.current.value,
            instagram: instagramRef.current.value,
        }
        axiosClient.put(`/contacts/${contact.id}`, payload)
            .then((data) => {
                getContact();
            })
            .catch((error) => {
                setLoading(false)
            })

    }
    return (
        <div className='contactUs'>
            <form onSubmit={ e => handleSubmit(e)}>
                <div className='body'>
                    <div className='input-container'>
                        <label htmlFor='website'>موقعنا</label>
                        <input id='website' type='text' placeholder='ادخل اسم الموقع' ref={websiteRef} defaultValue={contact.name}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='phone'>رقم الهاتف</label>
                        <input id='phone' type='tel' placeholder='ادخل رقم الهاتف'  ref={phoneRef} defaultValue={contact.phone} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='email'>عنوان البريد الالكتروني</label>
                        <input id='email' type='email' placeholder='ادخل البريد الالكترونى' ref={emailRef} defaultValue={contact.email} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='whats'>رقم الواتساب</label>
                        <input id='whats' type='tel' placeholder='ادخل رقم الواتساب' ref={whatsappRef} defaultValue={contact.whatsapp} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='facebook'>الفيس بوك</label>
                        <input id='facebook' type='text' placeholder='ادخل الفيس بوك' ref={facebookRef} defaultValue={contact.facebook} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='instagram'>الانستجرام</label>
                        <input id='instagram' type='text' placeholder='ادخل الانستجرام' ref={instagramRef} defaultValue={contact.instagram} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor='twitter'>تويتر</label>
                        <input id='twitter' type='text' placeholder='ادخل تويتر' ref={twitterRef} defaultValue={contact.twitter} />
                    </div>
                    <div className="input-container">
                        <button type='submit' className='save-btn'>حفظ</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default ContactUs;