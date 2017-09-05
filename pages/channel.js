import Wrapper from '../components/Wrapper'
import { store } from '../store'
import { bindActionCreators } from 'redux'
import { setMonth, setYear } from '../reduxModules/date'
import withRedux from 'next-redux-wrapper'
import ChannelContent from '../components/Channel/ChannelContent'
import ChannelBar from '../components/Channel/ChannelBar'

const Channel = (props) => (
  <Wrapper 
    Content={ChannelContent} 
    SideContent={ChannelBar} 
    title='Channel'
    pathname={props.url.pathname}
  />
)

const mapDispatchToProps = (dispatch) => {
  return {
    setMonth: bindActionCreators(setMonth, dispatch),
    setYear: bindActionCreators(setYear, dispatch)
  }
}

export default withRedux(store, null, mapDispatchToProps)(Channel)