import FeatureItem from "../../components/featureItem/FeatureItem"
import { HashLink } from 'react-router-hash-link';
import { ourServicesData } from "../../data"
import './ourServices.scss';

const OurServices = () => {
  return (
    <section className="our-services" id="our-services">
      <h2 className="title">خدماتنا</h2>
      <div className="items">
        { ourServicesData.map((item, index) => (
          <div className="item" key={ index }>
            <FeatureItem
              icon={ item.icon }
              iconName={ item.iconName }
              title={ item.title }
              description={ item.description }
              width={ "280px" }
              color="#8D9094"
            />
            <HashLink className="show-details" smooth="true" to={ `/${item.to}#` }>
              عرض التفاصيل<img src="double-arrow.svg" alt='more' />
            </HashLink>
          </div>
        )) }
      </div>
    </section>
  )
};

export default OurServices