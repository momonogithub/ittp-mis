import Head from 'next/head'
import { connect } from 'react-redux'
import { Component } from 'react'

class ProductCheckbox extends Component {
  buildCheckbox = (product) => {
    const result = []
    let count = 0
    while(count < product.length) {
      result.push(
        <div key={`${product[count].name}Div`}>
          <input 
            type="checkbox" key={`${product[count].name}Box`} 
            name={product[count].name} 
            value={product[count].name}
          />
          {product[count].name}
        </div>
      )
      count+=1
    }
    return result
  }
  
  render() {
    return (
      <form>
        <div className='inform'>
          {this.buildCheckbox(this.props.product)}
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({ 
  product: state.product
})

export default connect(mapStateToProps, null)(ProductCheckbox)