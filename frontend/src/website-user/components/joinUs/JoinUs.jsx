import { specialData } from "../../data";
import FeatureItem from "../featureItem/FeatureItem";
import "./joinUs.scss";

const JoinUs = (prop) => {
  const { joinUsData } = prop;
  return (
    <div className="join_container">
      <section className="join_us">
        <h2 className="join_title">انضم الينا</h2>
        <div className="items">
          {
            joinUsData.map((item, index) => (
              <FeatureItem key={ index }
                className="item"
                icon={ item.icon }
                iconName={ item.iconName }
                title={ item.title }
                description={ item.description }
                width="333px"
                color="#000000"
              />
            ))
          }
        </div>
      </section>
      <section className="special">
        <h2 className="special_title">ما الذى يجعلنا متميزين</h2>
        <div className="items">
          {
            specialData.map((item, index) => (
              <div key={ index } className="item">
                <img src={ `/${item.icon}` } alt={ item.iconName } />
                <h2>{ item.title }</h2>
                <p>{ item.description }</p>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
};

export default JoinUs;