import { Link } from 'react-router-dom';
import { useState } from 'react';
import './religiousLandmarks.scss';
import { religiousData } from '../../data';

const ReligiousLandmarks = () => {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(religiousData.places[0].place);

  return (
    <div className="packages">
      <div className='container'>
        <h1>زيارة المعالم الدينية</h1>
        <div className="filter_btns">
          { religiousData.places.map((item) => (
            <div className={ `place_btn ${active === item.place && "active_btn"}` }
              key={ item.id }
              onClick={ () => setActive(item.place) }>
              { item.place }
            </div>
          )) }
        </div>
        <p>آلام طاردة للوقت بسبب ضغوط العمل في رابطة الدول المستقلة .</p>
        <div className='items'>
          {
            religiousData.packages.map((item, index) => (
              active === item.place &&
              <div className={ `item ${selected === index ? "selected" : ""}` } key={ index } onClick={ () => setSelected(index) }>
                <img src={ `/${item.image}` } alt={ item.category } />
                <div className='details'>
                  <p>{ item.category }</p>
                  <p>{ item.price } ريال</p>
                </div>
              </div>
            ))
          }
        </div>
        <Link to="/book-package-religious-landmarks" className='link_next btn'>التالي</Link>
      </div>
    </div>
  )
};

export default ReligiousLandmarks;