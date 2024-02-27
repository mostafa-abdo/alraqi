import { Link } from "react-router-dom";
import './login.scss';
import { useRef, useState } from "react";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../../contexts/ContextProvider";

const Login = () => {


    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);
    const { setUser, setToken } = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault()

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        setErrors(null);

        axiosClient.post('/login', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                const response = err.response
                if (response && response.status == 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors);
                    }else{
                        setErrors({
                            email:['البريد الإلكتروني أو كلمة المرور خاطئة']
                        })
                    }
                }
            })
    }


    return (
        <div className="login_form">
            <div className="container">
                <h1>مرحبًا بعودتك!</h1>
                <p>تسجيل الدخول إلى حسابك</p>
                {errors && <div className="alert alert-danger" role="alert">
                    {Object.keys(errors).map(key => (
                        <div key={key}>{errors[key][0]}</div>
                    ))}
                </div>
                }
                <form className="fields" onSubmit={onSubmit}>
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
                    <Link to="/confirm-email" className="password_recovery">استعادة كلمة المرور</Link>
                    <button type="submit" className="btn">تسجيل الدخول</button>
                </form>
                <div className="back_link">
                    <p>لديك حساب بالفعل؟</p>
                    <Link to="/register" className="link">انشاء حساب</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
