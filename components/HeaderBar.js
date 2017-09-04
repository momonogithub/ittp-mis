import Icon from '../components/Icon'
import Title from '../components/Title'
import Head from 'next/head'

const HeaderBar = ({title}) => (
  <div className='headerBar'>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <Icon/>
    <Title title={title}/>
  </div>
)

export default HeaderBar