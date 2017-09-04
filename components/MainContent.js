import SideBarContent from './SideBarContent'
import ContentWrapper from './ContentWrapper'
import Head from 'next/head'

const MainContent = ({Content, SideContent}) => (
  <div className="content">
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <SideBarContent SideContent={SideContent}/>
    <ContentWrapper Content={Content}/>
  </div>
)

export default MainContent