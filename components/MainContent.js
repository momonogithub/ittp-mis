import Head from 'next/head'

const MainContent = ({Content, SideContent, query, pathname}) => (
  <div className="content">
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <SideContent query={query} pathname={pathname}/>
    <Content/>
  </div>
)

export default MainContent