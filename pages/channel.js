import { Component } from 'react'
import Wrapper from '../components/Wrapper'
import { configureStore } from '../store'
import { bindActionCreators } from 'redux'
import { setMonth, setYear } from '../reduxModules/date'
import { fetchChannel, fetchUpdateChannel } from '../reduxModules/channel'
import { fetchWayCode, switchWayCodeStatus } from '../reduxModules/wayCode'
import withRedux from 'next-redux-wrapper'
import ChannelContent from '../components/Channel/ChannelContent'
import ChannelBar from '../components/Channel/ChannelBar'
import { isEqual } from 'lodash'

class Channel extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchWayCode()
    this.props.fetchChannel(this.props.date)
  }

  componentWillReceiveProps(nextProps) {
    if(!isEqual(this.props.date, nextProps.date)) {
      this.props.fetchChannel(nextProps.date)
    }
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

const mapStateToProps = (state) => ({ 
  date: state.date
})

const mapDispatchToProps = (dispatch) => {
  return {
    setMonth: bindActionCreators(setMonth, dispatch),
    setYear: bindActionCreators(setYear, dispatch),
    fetchChannel: bindActionCreators(fetchChannel, dispatch),
    fetchUpdateChannel: bindActionCreators(fetchUpdateChannel, dispatch),
    fetchWayCode: bindActionCreators(fetchWayCode, dispatch)
  }
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(Channel)