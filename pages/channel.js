import { Component } from 'react'
import Wrapper from '../components/Wrapper'
import { configureStore } from '../store'
import { bindActionCreators } from 'redux'
import { setMonth, setYear } from '../reduxModules/date'
import { fetchChannel, fetchUpdateChannel } from '../reduxModules/channel'
import { switchLoadingStatus } from '../reduxModules/loading'
import { fetchWayCode, switchWayCodeStatus } from '../reduxModules/wayCode'
import withRedux from 'next-redux-wrapper'
import ChannelChart from '../components/Channel/ChannelChart'
import ChannelTable from '../components/Channel/ChannelTable'
import ChannelBar from '../components/Channel/ChannelBar'
import Spinner from '../components/Spinner'
import { isEqual } from 'lodash'
import requireAuth from '../hoc/requireAuth'

class Channel extends Component {
  constructor(props) {
    super(props)
  }

  changePage = query => {
    query.display = query.display === undefined ? '/table' : query.display
    if(query.display === '/table') {
      return ChannelTable
    } else {
      return ChannelChart
    }
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
    const content = this.changePage(this.props.url.query)
    return(
      <Wrapper 
        Content={this.props.loading === false? content : Spinner} 
        SideContent={ChannelBar} 
        title='Channel'
        pathname={this.props.url.pathname}
        query={this.props.url.query}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading.status, 
  date: state.date
})

const mapDispatchToProps = (dispatch) => {
  return {
    setMonth: bindActionCreators(setMonth, dispatch),
    setYear: bindActionCreators(setYear, dispatch),
    fetchChannel: bindActionCreators(fetchChannel, dispatch),
    fetchUpdateChannel: bindActionCreators(fetchUpdateChannel, dispatch),
    fetchWayCode: bindActionCreators(fetchWayCode, dispatch),
    switchLoadingStatus: bindActionCreators(switchLoadingStatus, dispatch)
  }
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(requireAuth(Channel))