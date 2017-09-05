import Wrapper from '../components/Wrapper'
import { store } from '../store'
import { setMonth, setYear } from '../reduxModules/date'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import PortSummary from '../components/Portfolio/PortSummary'
import PortSummaryBar from '../components/Portfolio/PortSummaryBar'

const Index = (props) =>(
  <Wrapper 
    Content={PortSummary} 
    SideContent={PortSummaryBar} 
    title='Portfolio : Summary Page'
    pathname={props.url.pathname}
  />
)

const mapDispatchToProps = (dispatch) => {
  return {
    setMonth: bindActionCreators(setMonth, dispatch),
    setYear: bindActionCreators(setYear, dispatch)
  }
}

export default withRedux(store, null, mapDispatchToProps)(Index)