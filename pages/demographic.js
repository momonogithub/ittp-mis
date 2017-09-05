import Wrapper from '../components/Wrapper'
import { store } from '../store'
import { bindActionCreators } from 'redux'
import { setMonth, setYear } from '../reduxModules/date'
import withRedux from 'next-redux-wrapper'
import DemoContent from '../components/Demographic/DemoContent'
import DemoBar from '../components/Demographic/DemoBar'

const Demographic = (props) => (
  <Wrapper 
    Content={DemoContent} 
    SideContent={DemoBar} 
    title='Demographic : Total Account Profile'
    pathname={props.url.pathname}
  />
)

const mapDispatchToProps = (dispatch) => {
  return {
    setMonth: bindActionCreators(setMonth, dispatch),
    setYear: bindActionCreators(setYear, dispatch)
  }
}

export default withRedux(store, null, mapDispatchToProps)(Demographic)