import Head from 'next/head'
import { connect } from 'react-redux'
import { Component } from 'react'
import { switchWayCodeStatus } from '../reduxModules/wayCode' 

class WayCodeCheckbox extends Component {
  constructor(props) {
    super(props)
  }

  buildCheckbox = wayCodes => {
    const result = []
    for (let item in wayCodes) {
      result.push(
        <div key={`${item}Div`}>
          <input 
            type="checkbox" key={`${item}Box`} 
            name={item} 
            value={item}
            onChange={this.props.switchWayCodeStatus}
            checked={wayCodes[item].status}
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
          {this.buildCheckbox(this.props.wayCodes)}
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({ 
  wayCodes: state.wayCode
})

export default connect(mapStateToProps, { switchWayCodeStatus })(WayCodeCheckbox)