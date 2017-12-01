import { Component } from 'react'
import Wrapper from '../components/Wrapper'
import { configureStore } from '../store'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { setMonth, setYear } from '../reduxModules/date'
import { switchLoadingStatus } from '../reduxModules/loading'
import { fetchNetflow, fetchUpdateNetflow } from '../reduxModules/netflow'
import NetflowChart from '../components/Netflow/NetflowChart'
import NetflowTable from '../components/Netflow/NetflowTable'
import NetflowBar from '../components/Netflow/NetflowBar'
import Spinner from '../components/Spinner'
import { isEqual } from 'lodash'
import requireAuth from '../hoc/requireAuth'

class Netflow extends Component {
  constructor(props) {
    super(props)
  }

  changePage = query => {
    query.display = query.display === undefined ? '/table' : query.display
    if(query.display === '/table') {
      return NetflowTable
    } else {
      return NetflowChart
    }
  }

  componentDidMount() {
    this.props.fetchNetflow(this.props.date)
  }

  componentWillReceiveProps(nextProps) {
    if(!isEqual(this.props.date, nextProps.date)) {
      this.props.fetchNetflow(nextProps.date)
    }
  }

  render() {
    const content = this.changePage(this.props.url.query)
    return (
      <Wrapper 
        Content={this.props.loading === false ? content : Spinner} 
        SideContent={NetflowBar} 
        title='Risk : Netflow'
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
    fetchNetflow: bindActionCreators(fetchNetflow, dispatch),
    fetchUpdateNetflow: bindActionCreators(fetchUpdateNetflow, dispatch),
    switchLoadingStatus: bindActionCreators(switchLoadingStatus, dispatch),
  }
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(requireAuth(Netflow))