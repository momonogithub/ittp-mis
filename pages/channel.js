import Wrapper from '../components/Wrapper'
import { store } from '../store'
import ChannelContent from '../components/ChannelContent'
import ChannelBar from '../components/ChannelBar'

const Channel = (props) => (
  <Wrapper 
    Content={ChannelContent} 
    SideContent={ChannelBar} 
    title='Channel'
    pathname={props.url.pathname}
  />
)

export default Channel