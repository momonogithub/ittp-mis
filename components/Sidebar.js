import Link from 'next/link'
import Head from 'next/head'

const Sidebar = ({ pathname }) => (
  <div className='sidebar'>
    <Head><link href='/static/style.css' rel='stylesheet'/></Head>
    <Link as='/' href="/?page=summary">
      <div className={pathname==='/' || '/index'? 'sideItem is-active': 'sideItem' }>Portfolio</div>
    </Link>
    <Link href="/channel">
      <div className={pathname==='/channel'? 'sideItem is-active': 'sideItem' }>Channel</div>
    </Link>
    <Link href="/demographic">
    <div className={pathname==='/demographic'? 'sideItem is-active': 'sideItem' }>Demographic</div>
    </Link>
    <Link href="/netflow">
    <div className={pathname==='/netflow'? 'sideItem is-active': 'sideItem' }>Netflow</div>
    </Link>
  </div>
)

export default Sidebar