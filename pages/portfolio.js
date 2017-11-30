import { Component } from 'react'
import Wrapper from '../components/Wrapper'
import Spinner from '../components/Spinner'
import { configureStore } from '../store'
import { setMonth, setYear } from '../reduxModules/date'
import { 
  fetchPortTotal, 
  fetchUpdatePortTotal, 
  fetchPortSummary, 
  fetchUpdatePortSummary } from '../reduxModules/portfolio'
import { switchLoadingStatus } from '../reduxModules/loading'
import { fetchProductList, switchProductStatus } from '../reduxModules/product'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import PortSummary from '../components/Portfolio/PortSummary'
import PortSummaryBar from '../components/Portfolio/PortSummaryBar'
import PortTotalChart from '../components/Portfolio/PortTotalChart'
import PortTotalTable from '../components/Portfolio/PortTotalTable'
import PortTotalBar from '../components/Portfolio/PortTotalBar'
import { isEqual } from 'lodash'
import requireAuth from '../hoc/requireAuth'

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchProductList()
    this.props.fetchPortTotal(this.props.date)
    this.props.fetchPortSummary(this.props.date)
  }

  componentWillReceiveProps(nextProps) {
    if(!isEqual(this.props.date, nextProps.date)) {
      this.props.fetchPortTotal(nextProps.date)
      this.props.fetchPortSummary(nextProps.date)
    }
  }

  changePage = (query) => {
    const arr = {}
    query.display = query.display === undefined ? '/table' : query.display
    if (query.page === '/portTotal') {
      arr.Content = query.display === '/table' ? PortTotalTable : PortTotalChart
      arr.SideContent = PortTotalBar
      arr.title = 'Portfolio : Total Product'
    }
    else {
      arr.Content = query.display === '/table' ? PortSummary : PortTotalChart
      arr.SideContent = PortSummaryBar
      arr.title = 'Portfolio : Summary Page'
    }
    return arr
  }

  render() {
    const Portfolio = this.changePage(this.props.url.query)
    return(
      <Wrapper 
      Content={this.props.loading === false? Portfolio.Content : Spinner} 
      SideContent={Portfolio.SideContent}
      title={Portfolio.title}
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
    fetchPortSummary: bindActionCreators(fetchPortSummary, dispatch),
    fetchUpdatePortSummary: bindActionCreators(fetchUpdatePortSummary, dispatch),
    fetchPortTotal: bindActionCreators(fetchPortTotal, dispatch),
    fetchUpdatePortTotal: bindActionCreators(fetchUpdatePortTotal, dispatch),
    fetchProductList: bindActionCreators(fetchProductList, dispatch),
    switchLoadingStatus: bindActionCreators(switchLoadingStatus, dispatch),
    switchProductStatus: bindActionCreators(switchProductStatus, dispatch)
  }
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(requireAuth(Portfolio))