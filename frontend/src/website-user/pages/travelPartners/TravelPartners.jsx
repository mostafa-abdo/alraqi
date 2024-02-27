import { Link } from 'react-router-dom';
import { travelPartnersData } from '../../data';
import JoinUs from '../../components/joinUs/JoinUs';
import './travelPartners.scss';

const TravelPartners = () => {
  return (
    <div className='travel_partners'>
      <div className="partner_hero">
        <div className="hero_content">
          <div className="right_div">
            <h1>البرنامج التابع الي شركاء السفر</h1>
            <p>كن شريكا لنا فى مدينتك و ابدا اليوم فى تحقيق مكاسب لك معنا</p>
            <Link to="/registration" className="btn">انضم الينا</Link>
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
      <JoinUs joinUsData={travelPartnersData} />
      <section className='work_features'>
        <h2 className='title'>العمل معنا سهلا جدا</h2>
        <div className='feature'>
          <div className='text'>
            <h2>01</h2>
            <h3>من السهل ان تبدأ</h3>
            <p>
              قم بالتسجيل في برنامج &quot;ستي جايد&quot; التابع الى شركاء
              السفر لإجراء أول عملية حجز لك. و قم بإضافة عُمولتك إلى
              اسعارنا وتحميل الرسوم على عملائك دون مغادرة المكتب.
              إن العمل معنا يتسم بالموثوقية والسهولة. كن شريكا
              معنا، ويمكننا أن نبدأ في الكسب اليوم!
            </p>
          </div>
          <div className='image'>
            <img src="/start.webp" alt="من السهل ان تبدأ" />
          </div>
        </div>
        <div className='feature'>
          <div className='image'>
            <img src="/dashboard.webp" alt="اللوحة الشخصية" />
          </div>
          <div className='text'>
            <h2>02</h2>
            <h3>لوحه البيانات الشخصيه</h3>
            <p>
              بمجرد انك قد قمت بتسجيل دخولك، سيتم إرسال تفاصيل
              تسجيل الدخول الخاصة بك إلى بريدك الإلكتروني من اجل
              الدخول إلى لوحة البيانات الخاصة بك. إن لوحة البيانات
              سهلة الاستخدام وتحتوي على كل تفاصيل الرحلة السابقة،
              وبامكانك القيام بجميع إلاجراءات الضرورية اللازمة
              للحجز الحالي وكذلك عملية إلغاء الحجز.
            </p>
          </div>
        </div>
        <div className='feature'>
          <div className='text'>
            <h2>03</h2>
            <h3>المدفوعات لرحلات النقل والتوصيل </h3>
            <p>
              قم بالتسجيل في برنامج &quot;ستي جايد&quot; التابع الى شركاء
              السفر لإجراء أول عملية حجز لك. و قم بإضافة عُمولتك إلى
              اسعارنا وتحميل الرسوم على عملائك دون مغادرة المكتب.
              إن العمل معنا يتسم بالموثوقية والسهولة. كن شريكا
              معنا، ويمكننا أن نبدأ في الكسب اليوم!
            </p>
          </div>
          <div className='image'>
            <img src="/team-spirit.webp" alt="المدفوعات" />
          </div>
        </div>
        <div className='feature'>
          <div className='image'>
            <img src="/wallet.webp" alt="العمل الجماعي" />
          </div>
          <div className='text'>
            <h2>04</h2>
            <h3>العمل الجماعي الفعال</h3>
            <p>
              البيع هو فن بحد ذاته. ولكن على عكس العديد من الفنون
              الأخرى، فاِن فن المبيعات هو الشيء الأكثر الذي بالأمكان
              تعلمه. إننا نعمل مع كل وكالة سفر على حدة للمساعدة. سوف نقوم بتعليمك عن كيفية زيادة
              مبيعاتك باستخدام تقنيات معتمدة وأساليب أثبتت كفاءتها
            </p>
          </div>
        </div>
      </section>
    </div>
  )
};

export default TravelPartners;