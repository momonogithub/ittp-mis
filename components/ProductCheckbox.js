import Head from 'next/head'
import { connect } from 'react-redux'
import { Component } from 'react'
import { switchProductStatus } from '../reduxModules/product' 

class ProductCheckbox extends Component {
  constructor(props) {
    super(props)
  }

  buildCheckbox = products => {
    const result = []
    let count = 0
    for (let item in products) {
      result.push(
        <div key={`Product${count} CheckBox`}>
          <input 
            type="checkbox" key={`${products[item].name} input`} 
            name={products[item].name} 
            value={item}
            onChange={this.props.switchProductStatus}
            checked={products[item].status}
          />
          <label key={`${products[item].name} Label`}>{products[item].name}</label>
        </div>
      )
      count += 1
    }
    return result
  }

  render() {
    return (
      <form>
        <label>ByProduct:</label>
        <div className='inform'>
          {this.buildCheckbox(this.props.products)}
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({ 
  products: state.product
})

export default connect(mapStateToProps, { switchProductStatus })(ProductCheckbox)