import PropTypes from 'prop-types';

export const Button = ({ color, text, onClick}) => { 

  return  <button onClick={onClick}
            style={{color}}  className='btn'>{text}</button>
}

Button.deafultProps = {
    color: 'steelBlue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}


export default Button

