import { Link } from "react-router-dom";
import './CreateNewPass.scss';

const CreateNewPass = () => {

  return (
    <div className="create-newPass">
      <div className="container">
        <h1>انشاء كلمة مرور جديدة</h1>
        <p>كلمة المرور الجديدة ينبغى ان تختلف عن السابقة</p>
        <form className="fields">
          <div className="form-group">
            <label htmlFor="password">
              <img src="/lock.svg" alt="lock" />
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="ادخل كلمة المرور الجديدة"
              required
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
              placeholder="تاكيد كلمة المرور"
              required
            />
          </div>
          <Link to='/' className="btn">اعادة ضبط</Link>
        </form>
      </div>
    </div>
  );
};

export default CreateNewPass;
