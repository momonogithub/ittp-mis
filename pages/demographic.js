import Wrapper from '../components/Wrapper'
import { store } from '../store'
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

export default Demographic