import { Component } from 'react'
import Wrapper from '../components/Wrapper'
import { configureStore } from '../store'
import { bindActionCreators } from 'redux'
import { setMonth, setYear } from '../reduxModules/date'
import { fetchDemographic, fetchDemoList, switchDemoStatus } from '../reduxModules/demographic'
import { switchLoadingStatus } from '../reduxModules/loading'
import withRedux from 'next-redux-wrapper'
import DemoChart from '../components/Demographic/DemoChart'
import DemoTable from '../components/Demographic/DemoTable'
import DemoBar from '../components/Demographic/DemoBar'
import Spinner from '../components/Spinner'
import { isEqual } from 'lodash'
import requireAuth from '../hoc/requireAuth'

class Demographic extends Component {
  constructor(props) {
    super(props)
  }

  changePage = query => {
    query.display = query.display === undefined ? '/table' : query.display
    if(query.display === '/table') {
      return DemoTable
    } else {
      return DemoChart
    }
  }
  
  componentDidMount() {
    this.props.fetchDemographic(this.props.date)
    this.props.fetchDemoList()
  }

  componentWillReceiveProps(nextProps) {
    if(!isEqual(this.props.date, nextProps.date)) {
      this.props.fetchDemographic(nextProps.date)
    }
  }
  
  render() {
    const content = this.changePage(this.props.url.query)
    return (
      <Wrapper 
        Content={this.props.loading === false? content: Spinner} 
        SideContent={DemoBar} 
        title='Demographic : Total Account Profile'
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
    fetchDemographic: bindActionCreators(fetchDemographic, dispatch),
    fetchDemoList: bindActionCreators(fetchDemoList, dispatch),
    switchDemoStatus: bindActionCreators(switchDemoStatus, dispatch),
    switchLoadingStatus: bindActionCreators(switchLoadingStatus, dispatch)
  }
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(requireAuth(Demographic))