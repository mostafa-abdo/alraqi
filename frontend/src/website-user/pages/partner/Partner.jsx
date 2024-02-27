import { Link } from "react-router-dom";
import JoinUs from "../../components/joinUs/JoinUs";
import { partnerData } from "../../data";

const Partner = () => {
  return (
    <div className="partner">
      <div className="partner_hero">
        <div className="hero_content">
          <div className="right_div">
            <h1>البرنامج التابع الي شركاء السفر</h1>
            <p>كن شريكا لنا فى مدينتك و ابدا اليوم فى تحقيق مكاسب لك معنا</p>
            <Link to="/partner-details" className="btn">انضم الينا</Link>
          </div>
          <div className="left_div">
            <div>
              <h2>50+ </h2>
              <p>شركاء السفر الذين هم من ضمن البرنامج</p>
            </div>
            <div>
              <h2>العموله </h2>
              <p>قم باضافه عمولتك الي اسعارنا واحصل علي دخل مرتفع </p>
            </div>
            <div>
              <h2>1500 +</h2>
              <p>نسبه الطلبات التي تم ادائها</p>
            </div>
          </div>
        </div>
      </div>
      <JoinUs joinUsData={partnerData} />
    </div>
  )
}

export default Partner;