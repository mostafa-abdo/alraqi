import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import './registration.scss'
import { useRef, useState } from "react";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../contexts/ContextProvider";

const Registration = () => {

    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);
    const {setUser, setToken} = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault()

        const payload = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        axiosClient.post('/register', payload)
            .then(({data}) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                const response = err.response
                if (response && response.status == 422) {
                    const errors = response.data.errors
                    setErrors(errors);
                }
            })
    }

    return (
        <div className="registration">
            <div className="container">
                <h1>ابدأ مع الراقى للتوصيل</h1>
                <p>إنشاء حساب</p>
                {errors && <div className="alert alert-danger" role="alert">
                    {Object.keys(errors).map(key => (
                        <div key={key}>{errors[key][0]}</div>
                    ))}
                </div>
                }
                <form className="fields" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            <img src="/profile.svg" alt="profile" />
                        </label>
                        <input type="text" id="name" className="form-control" placeholder="الاسم الكامل"  ref={nameRef} />
                    </div>
                    <div style={{ marginBottom: "30px" }}>
                        <PhoneInput
                            id="phone"
                            country={"sa"}
                            placeholder="رقم الجوال"
                            inputProps={{  ref: phoneRef }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            <img src="/email.svg" alt="email" />
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="البريد الإلكتروني"
                            ref={emailRef}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            <img src="/lock.svg" alt="lock" />
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="كلمة المرور"
                            ref={passwordRef}
                        />
                    </div>
                    <button type="submit" className="btn">طلب انشاء حساب</button>
                </form>
                <div className="back_login">
                    <p>لديك حساب بالفعل؟</p>
                    <Link to="/login" className="log" >تسجيل الدخول</Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;
