import Wrapper from '../components/Wrapper'
import { store } from '../store'
import NetflowContent from '../components/Netflow/NetflowContent'
import NetflowBar from '../components/Netflow/NetflowBar'

const Netflow = (props) => (
  <Wrapper 
    Content={NetflowContent} 
    SideContent={NetflowBar} 
    title='Risk : Netflow'
    pathname={props.url.pathname}
  />
)

export default Netflow