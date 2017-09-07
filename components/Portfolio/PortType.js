import Head from 'next/head'
import Router from 'next/router'


const changePage = (event) => Router.push({
  pathname: '/',
  query: { page: event.target.value }
})

const PortType = (props) => {
  return (
    <div className='inform'>
      <label>Type</label>
      <div className='infield'>
        <select defaultValue={props.page} onChange={changePage}>
          <option value='summary'>Summary Page</option>
          <option value='total'>Total Product</option>
        </select>
      </div>
    </div>
  )
}
export default PortType