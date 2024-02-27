import { useEffect, useRef, useState } from "react";
import { ArrowBack, ArrowForward, Star } from "@mui/icons-material";
import FeatureItem from "../../components/featureItem/FeatureItem";
import Header from "../../components/heroSection/HeroSection";
import { accordionsData, choosingData, reviews } from "../../data";
import { carTypes } from "../../data";
import Filter from "../../components/filter/Filter";
import Accordion from "../../components/accordion/Accordion";
import { Link } from "react-router-dom";
import './home.scss';

const Home = () => {
  const [active, setActive] = useState(carTypes.categories[0].category);
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);

  const handleScroll = (direction) => {
    const { current } = carouselRef;
    if (direction === "left") {
      current.scrollLeft -= 302;
    } else {
      current.scrollLeft += 302;
    }
  };

  const handleScrollReviews = (direction) => {
    const { current } = carouselRef2;
    if (direction === "left") {
      current.scrollLeft -= 302;
    } else {
      current.scrollLeft += 302;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const { current } = carouselRef2;
      const maxScrollWidth = (current.scrollWidth - current.clientWidth);

      handleScrollReviews("left");
      if (current.scrollLeft <= -(maxScrollWidth - 1)) {
        current.scrollLeft = 0
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const { current } = carouselRef;
      const maxScrollWidth = (current.scrollWidth - current.clientWidth);

      handleScroll("left");
      if (current.scrollLeft <= -(maxScrollWidth - 1)) {
        current.scrollLeft = 0
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home" id="home">
      <Header />

      <section className="features" id="choose-us">
        <h2 className="title">لماذا تختارنا</h2>
        <div className="items">
          { choosingData.map((item, index) => (
            <FeatureItem className="item" key={ index }
              icon={ item.icon }
              iconName={ item.iconName }
              title={ item.title }
              description={ item.description }
              width={ "279px" }
              color="#8D9094"
            />
          )) }
        </div>
      </section>

      <section className="typeOfCars carousel_section" id="car-types">
        <div style={ { display: "flex", justifyContent: "center", alignItems: "start" } }>
          <Filter
            categories={ carTypes.categories }
            active={ active }
            setActive={ setActive }
            title="انواع سيارتنا"
            paragraph="تختارنا السيارات الأفضل لكل مشروعك"
            show={ true }
          />
          
          <Link
            className="link"
            to="/prices"
            onClick={ () => window.scrollTo(0,0) }
            style={ { margin: "12px 0 0 5px", background: "#BBA664", color: "#fff", padding: "10px", textDecoration: "none", borderRadius: "7px" } }
          >اسعارنا</Link>
        </div>
        <div>
          <div className='carousel' ref={ carouselRef } style={ { width: "89%" } }>
            <div className='inner-carousel' >
              { carTypes.cars.map((car) => (
                active === car.category &&
                <div className="item" key={ car.id }>
                  <img src={ car.image } alt={ car.name } />
                  <p>{ car.name }</p>
                </div>
              )) }
            </div>
          </div>
          <div className="icons">
            <ArrowForward className="next icon"
              onClick={ () => handleScroll("left") }
              sx={ { color: "#111928", fontSize: "52px" } }
            />
            <ArrowBack className="prev icon"
              onClick={ () => handleScroll("right") }
              sx={ { color: "#111928", fontSize: "52px" } }
            />
          </div>
        </div>
      </section>

      <section className="reviews carousel_section" id="reviews">
        <Filter
          categories={ carTypes.categories }
          active={ active }
          setActive={ setActive }
          title="تقييمات العملاء"
          paragraph="تقييمات العملاء عن السيارات التي قدمناه"
          show={ false }
        />
        <div>
          <div className='carousel' ref={ carouselRef2 } style={ { width: "79%" } }>
            <div style={ { padding: "30px 10px " } } className='inner-carousel'>
              { reviews.map((review) => (
                <div className="item" key={ review.id }>
                  <img className="quotes" src="/quotes_icon.svg" alt="quotes_icon" />
                  <div className="avatar">
                    <img src={ review.avatar } alt={ review.name } />
                    <h2>{ review.name }</h2>
                  </div>
                  <p className="comment">{ review.description }</p>
                  <div className="star_icons">
                    <Star className="icon" sx={ { color: "#FFD231", fontSize: "20px" } } />
                    <Star className="icon" sx={ { color: "#FFD231", fontSize: "20px" } } />
                    <Star className="icon" sx={ { color: "#FFD231", fontSize: "20px" } } />
                    <Star className="icon" sx={ { color: "#FFD231", fontSize: "20px" } } />
                    <Star className="icon" sx={ { color: "#FFD231", fontSize: "20px" } } />
                  </div>
                </div>
              )) }
            </div>
          </div>
          <div className="icons">
            <ArrowForward className="next icon"
              onClick={ () => handleScrollReviews("left") }
              sx={ { color: "#111928", fontSize: "52px" } }
            />
            <ArrowBack className="prev icon"
              onClick={ () => handleScrollReviews("right") }
              sx={ { color: "#111928", fontSize: "52px" } }
            />
          </div>
        </div>
      </section>

      <section className="accordions_section" id="faq">
        <div className="triangle" />
        <div className="info">
          <h2>للأسئلة الشائعة</h2>
        </div>
        <Accordion data={ accordionsData } />
      </section>

      <section className="contact_section" id="contact-us">
        <div className="container">
          <div className="info">
            <h3>اتصل بنا</h3>
            <h2> تواصل معنا</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor
              ,quis nostrud exervation ullamco,Ut enim adiqua minim Veniam
              ,quis nostrud exervation ullamco
            </p>
            <div className="contact_details">
              <div className="contact_item">
                <img src="/home-icon.svg" alt="ourLocation" />
                <div>
                  <h3>موقعنا</h3>
                  <p>99 شارع جومبلو بارك بيكانبارو,28292. اندونيسيا</p>
                </div>
              </div>
              <div className="contact_item">
                <img src="/phone-icon.svg" alt="phone-number" />
                <div>
                  <h3>رقم الهاتف</h3>
                  <p>(+62)81 414 257 9980</p>
                </div>
              </div>
              <div className="contact_item">
                <img src="/email-icon.svg" alt="email-address" />
                <div>
                  <h3>عنوان البريد الإلكتروني</h3>
                  <p>info@yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="form_container">
            <img src="/circle.svg" alt="circle-shape" className="circle_shape" />
            <img src="/dotted-shape.svg" alt="dotted-shape" className="dotted-shape1" />
            <img src="/dotted-shape.svg" alt="dotted-shape" className="dotted-shape2" />
            <form action="" className="contact_form">
              <input type="text" placeholder="اسمك" />
              <input type="email" name="email" placeholder="بريدك الالكترونى" />
              <input type="tel" placeholder="رقم الواتس اب" />
              <textarea type="text" placeholder="أكتب رسالتك مع ذكر نوع الخدمة و التواريخ المراد حجزها" className="comment" ></textarea>
              <input type="submit" value="ارسال" className="btn" />
            </form>
          </div>
        </div>
      </section>

    </div>
  )
};

export default Home;