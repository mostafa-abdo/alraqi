import { Link } from "react-router-dom";
import './ConfirmCode.scss';

const ConfirmCode = () => {

  return (
    <div className="confirm-code">
      <div className="container">
        <h1>تأكيد البريد الإلكتروني!</h1>
        <p>ادخل الكود المرسل على بريدك الإلكتروني</p>
        <form className="fields">
          <div className='inputs-container'>
            <input type='text' maxLength={1} />
            <input type='text' maxLength={1} />
            <input type='text' maxLength={1} />
            <input type='text' maxLength={1} />
          </div>
          <Link to='/create-new-password' className="btn">ارسال</Link>
        </form>
      </div>
    </div>
  );
};

export default ConfirmCode;
