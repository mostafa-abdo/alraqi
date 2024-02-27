import { Link } from "react-router-dom";
import './passRecovery.scss';

const PassRecovery = () => {

  return (
    <div className="pass-recovery">
      <div className="container">
        <h1>استرجاع كلمة المرور!</h1>
        <p>ادخل بريدك الالكترونى لاسترجاع كلمة المرور</p>
        <form className="fields">
          <div className="form-group">
            <label htmlFor="email">
              <img src="/email.svg" alt="email" />
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="البريد الإلكتروني"
              required
            />
          </div>
          <Link to='/confirm-code' className="btn">ارسال</Link>
        </form>
      </div>
    </div>
  );
};

export default PassRecovery;
