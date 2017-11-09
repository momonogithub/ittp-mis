import Head from 'next/head'
import { connect } from 'react-redux'
import { Component } from 'react'
import { switchDemoStatus } from '../reduxModules/demographic' 

class DemoCheckbox extends Component {
  constructor(props) {
    super(props)
  }

  buildCheckbox = demoList => {
    const result = []
    for (let item in demoList) {
      result.push(
        <div key={`${item}Div`}>
          <input 
            type="checkbox" key={`${item}Box`} 
            name={item} 
            value={item}
            onChange={this.props.switchDemoStatus}
            checked={demoList[item].status}
          />
          {item}
        </div>
      )
    }
    return result
  }

  render() {
    return (
      <form>
        <div className='inform'>
          {this.buildCheckbox(this.props.demoList)}
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({ 
  demoList: state.demographic.demoList
})

export default connect(mapStateToProps, { switchDemoStatus })(DemoCheckbox)