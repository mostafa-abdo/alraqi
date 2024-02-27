import PropTypes from 'prop-types';
import './featureItem.scss'

const FeatureItem = ({icon, iconName, title, description, width, color}) => {
  return (
    <div className="featureItem" style={ {width: width} }>
      <img src={`/${icon}`} alt={iconName} />
      <h2>{ title }</h2>
      <p style={ { color: color}}>{ description }</p>
    </div>
  )
}
FeatureItem.propTypes = {
  icon: PropTypes.string, // icon should be a string
  iconName: PropTypes.string, // iconName should be a string
  title: PropTypes.string, // title should be a string
  description: PropTypes.string, // description should be a string
  width: PropTypes.string, // width should be a string
  color: PropTypes.string, // color should be a string
}

export default FeatureItem;