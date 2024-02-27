import PropTypes from 'prop-types';
import './carCategory.scss'

const CarCategory = (prop) => {
  return (
    <div className={ `boxCategory ${prop.select}` } >
      <p>{ prop.category }</p>
      <div>
        <img className='car' src="/car.jpg" alt="car" />
        <div className="num">
          <div>د.إ 145</div>
          <div style={{display:"flex", gap:"3px"}}>
            <div><img src='person.svg' alt='' style={{width:"12px", height:"12px"}}/>4</div>
            <div><img src='bag.svg' alt='' style={{width:"11px", height:"11px"}}/>3</div>
          </div>
        </div>
      </div>
    </div>
  )
};
CarCategory.prototype = {
  prop: PropTypes.node
}

export default CarCategory