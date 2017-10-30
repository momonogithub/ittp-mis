import { Component } from 'react'
import Wrapper from '../components/Wrapper'
import { configureStore } from '../store'
import { bindActionCreators } from 'redux'
import { setMonth, setYear } from '../reduxModules/date'
import withRedux from 'next-redux-wrapper'
import ChannelContent from '../components/Channel/ChannelContent'
import ChannelBar from '../components/Channel/ChannelBar'

class Channel extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <Wrapper 
        Content={ChannelContent} 
        SideContent={ChannelBar} 
        title='Channel'
        pathname={this.props.url.pathname}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMonth: bindActionCreators(setMonth, dispatch),
    setYear: bindActionCreators(setYear, dispatch)
  }
}

export default withRedux(configureStore, null, mapDispatchToProps)(Channel)