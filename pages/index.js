import Wrapper from '../components/Wrapper'
import { store } from '../store'
import withRedux from 'next-redux-wrapper'
import PortSummary from '../components/PortSummary'
import PortSummaryBar from '../components/PortSummaryBar'

const Index = (props) =>(
  <Wrapper 
    Content={PortSummary} 
    SideContent={PortSummaryBar} 
    title='Portfolio : Summary Page'
    pathname={props.url.pathname}
  />
)


export default Index