import Wrapper from '../components/Wrapper'
import { configureStore } from '../store'
import { setMonth, setYear } from '../reduxModules/date'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import PortSummary from '../components/Portfolio/PortSummary'
import PortSummaryBar from '../components/Portfolio/PortSummaryBar'
import PortTotal from '../components/Portfolio/PortTotal'
import PortTotalBar from '../components/Portfolio/PortTotalBar'

const changePage = (page) => {
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

const Index = (props) => {
  const Portfolio = changePage(props.url.query.page)
  return (
    <Wrapper 
      Content={Portfolio.Content} 
      SideContent={Portfolio.SideContent} 
      title={Portfolio.title}
      pathname={props.url.pathname}
    />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMonth: bindActionCreators(setMonth, dispatch),
    setYear: bindActionCreators(setYear, dispatch)
  }
}

export default withRedux(configureStore, null, mapDispatchToProps)(Index)