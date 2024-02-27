import { Link } from 'react-router-dom';
import './packages.scss';
import { packagesData } from '../../data';
import { useState } from 'react';

const Packages = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="packages">
      <div className='container'>
        <h1>الباقات</h1>
        <p>احجز معنا باقة كاملة</p>
        <div className='items'>
          {
            packagesData.map((item, index) => (
              <div className={ `item ${selected === index ? "selected" : ""}` } key={ index } onClick={ () => setSelected(index) }>
                <img src={ `/${item.image}` } alt={ item.category } />
                <div className='details'>
                  <p>{ item.category }</p>
                  <p>{ item.price } ريال</p>
                </div>
                <div className='places' key={ index }>
                  {
                    item.places.map((item, index) => (
                      <div className='place' key={ index }>
                        {item}
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
        <Link to="/religious-landmarks" className='link'>زيارة المعالم الدينية</Link>
        <Link to="/book-package" className='link_next btn'>التالي</Link>
      </div>
    </div>
  )
}

export default Packages;