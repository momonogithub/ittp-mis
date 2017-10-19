import { Component } from 'react'
import Wrapper from '../components/Wrapper'
import { configureStore } from '../store'
import { setMonth, setYear } from '../reduxModules/date'
import { fetchPortTotal, fetchUpdatePortTotal, fetchPortSummary } from '../reduxModules/portfolio'
import { fetchProductList, switchStatus } from '../reduxModules/product'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import PortSummary from '../components/Portfolio/PortSummary'
import PortSummaryBar from '../components/Portfolio/PortSummaryBar'
import PortTotal from '../components/Portfolio/PortTotal'
import PortTotalBar from '../components/Portfolio/PortTotalBar'
import { isEqual } from 'lodash'

class Index extends Component {
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
      this.props.fetchPortSummary(this.props.date)
    }
  }

  changePage = (page) => {
    const arr = {}
    if (page === 'total') {
      arr.Content = PortTotal
      arr.SideContent = PortTotalBar
      arr.title = 'Portfolio : Total Product'
    }
    else {
      arr.Content = PortSummary
      arr.SideContent = PortSummaryBar
      arr.title = 'Portfolio : Summary Page'
    }
    return arr
  }

  render() {
    const Portfolio = this.changePage(this.props.url.query.page)
    return(
      <Wrapper 
      Content={Portfolio.Content} 
      SideContent={Portfolio.SideContent} 
      title={Portfolio.title}
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
    fetchPortSummary: bindActionCreators(fetchPortSummary, dispatch),
    fetchPortTotal: bindActionCreators(fetchPortTotal, dispatch),
    fetchUpdatePortTotal: bindActionCreators(fetchUpdatePortTotal, dispatch),
    fetchProductList: bindActionCreators(fetchProductList, dispatch),
    switchStatus: bindActionCreators(switchStatus, dispatch)
  }
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(Index)