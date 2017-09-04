import PropTypes from 'prop-types'
import Head from 'next/head'  

const Title = ({title}) => (
  <div className='headerTitle'>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <div className='titleStyle'>
        <div>{title}</div>
    </div>
  </div>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

Title.defaultProps = {
  title: 'Portfolio : Summary Page',
}

export default Title