import Head from 'next/head'

const Icon = () => (
  <div className='headerIcon'>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <img className='imgDiv' src='/static/ittp-icon.jpg'/>
  </div>
)

export default Icon