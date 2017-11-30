import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import HeaderBar from '../components/HeaderBar'
import MainContent from '../components/MainContent'

const Wrapper = ({Content, SideContent, title, pathname, query}) => (
  <div className='wrapper'>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <HeaderBar title={title}/>
    <Sidebar pathname={pathname}/>
    <MainContent Content={Content} SideContent={SideContent} query={query} pathname={pathname}/>
  </div>
)

export default Wrapper