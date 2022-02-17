import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Clicked')
    }

  return (
    <header className='header'>
        <h1> {props.title}</h1>
        <Button color='white' text='Add' onClick={onClick} />
    </header>
  ) 
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propsTypes = {
    title: 'PropsTypes.string.isRequired',
}

export default Header