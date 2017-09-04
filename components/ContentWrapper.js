import Head from 'next/head'

const ContentWrapper = ({Content}) => (
  <div className='contentWrapper'>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <Content/>
  </div>
)

export default ContentWrapper