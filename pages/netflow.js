import { Component } from 'react'
import Wrapper from '../components/Wrapper'
import { configureStore } from '../store'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { setMonth, setYear } from '../reduxModules/date'
import { fetchNetflow, fetchUpdateNetflow } from '../reduxModules/netflow'
import NetflowContent from '../components/Netflow/NetflowContent'
import NetflowBar from '../components/Netflow/NetflowBar'
import { isEqual } from 'lodash'

class Netflow extends Component {
  constructor(props) {
    super(props)
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
    return (
      <Wrapper 
        Content={NetflowContent} 
        SideContent={NetflowBar} 
        title='Risk : Netflow'
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
    fetchNetflow: bindActionCreators(fetchNetflow, dispatch),
    fetchUpdateNetflow: bindActionCreators(fetchUpdateNetflow, dispatch)
  }
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(Netflow)