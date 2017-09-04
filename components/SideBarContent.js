import Head from 'next/head'

const SideBarContent = ({SideContent}) => (
  <div className='sideBarContent'>
  <Head><link href='/static/style.css' rel='stylesheet'/></Head>
  <SideContent/>
  </div>
)

export default SideBarContent