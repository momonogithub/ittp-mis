import Wrapper from '../components/Wrapper'
import { store } from '../store'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { setMonth, setYear } from '../reduxModules/date'
import NetflowContent from '../components/Netflow/NetflowContent'
import NetflowBar from '../components/Netflow/NetflowBar'

const Netflow = (props) => (
  <Wrapper 
    Content={NetflowContent} 
    SideContent={NetflowBar} 
    title='Risk : Netflow'
    pathname={props.url.pathname}
  />
)

const mapDispatchToProps = (dispatch) => {
  return {
    setMonth: bindActionCreators(setMonth, dispatch),
    setYear: bindActionCreators(setYear, dispatch)
  }
}

export default withRedux(store, null, mapDispatchToProps)(Netflow)