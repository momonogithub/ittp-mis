import Head from 'next/head'
import { Component } from 'react'
import { monthToMonth, createColHead, fullMonth, commaNumber } from '../../utilize/utils'
import { values } from 'lodash'
import { connect } from 'react-redux'

export const combineData = (channel, wayCodes, date) => {
  const result = []
  const month = values(channel)
  const branch = {}
  const sale = {}
  const branchArr = ['Branch']
  const saleArr = ['Sale']
  let header =  ['']
  result.push(header.concat(date))
  for(let count = month.length - 1 ; count >=0 ; count -=1) {
    const totalBranch = month[count]['Branch']
    const totalSale = month[count]['Sale']
    branchArr.push(
      `${totalBranch.Approved} : ${totalBranch.Application} ${totalBranch.Percent}`
    )
    saleArr.push(
      `${totalSale.Approved} : ${totalSale.Application} ${totalSale.Percent}`
    )
    for(let code in wayCodes) {
      const subChannel = month[count][code]
      const value = subChannel === undefined? 
      'N/A' : `${subChannel.Approved} : ${subChannel.Application} ${subChannel.Percent}`
      if(code[0] === 'B' || code === 'HQ') {  // By Branch
        if(branch[code] === undefined) {
          branch[code] = [code]
        }
        const arr = branch[code]
        arr.push(value)
        branch[code] = arr
      }else { // By Sale
        if(sale[code] === undefined) {
          sale[code] = [code]
        }
        const arr = sale[code]
        arr.push(value)
        sale[code] = arr
      }
    }
  }

  result.push(branchArr)
  for(let item in branch) {
    result.push(branch[item])
  }
  result.push(saleArr)
  for(let item in sale) {
    result.push(sale[item])
  }
  return result
}

class ChannelContent extends Component {
  constructor(props) {
    super(props)
  }

  createRow = (data) => {
    const result = []
    for(let row = 1 ; row < data.length ; row += 1) {
      const name = this.props.wayCodes[data[row][0]] === undefined?
      '' : this.props.wayCodes[data[row][0]].name
      const status = name === '' ? true : this.props.wayCodes[data[row][0]].status
      if(status) {
        result.push(
          <tbody key={`${data[row]}body`}>
            <tr key={`${data[row][0]}row`} className='spanRow'>
              <td key={`${data[row][0]}span`} colSpan='14'>{`${data[row][0]} ${name}`}</td>
            </tr>
            <tr key={`ChannelRow ${row}`}>{this.createCol(`${data[row][0]}`, data[row])}</tr>
          </tbody>
        )
      }
    }
    return result
  }

  createCol = (key, dataRow) => {
    const result = []
    for(let col = 0 ; col < dataRow.length ; col += 1) {
      if(col === 0) {
        result.push(<td key={`${key}${col}`} >{'App : Approved'}</td>)
      } else {
        result.push(
          <td key={`${key}${col}`} className={'cellNumber'}>{commaNumber(dataRow[col])}</td>
        )
      }
    }
    return result
  }

  render() {
    const monthArr = monthToMonth(this.props.year,this.props.month)
    return(
      <table>
        <Head><link href='/static/style.css' rel='stylesheet'/></Head>
        <tbody>
          <tr className='spanRow'>
            <td className='headTable' colSpan='14'>
              Acquistion as {fullMonth[this.props.month - 1]} {this.props.year}
            </td>
          </tr>
          <tr>
            <th></th>
            {createColHead(monthArr)}
          </tr>
        </tbody>
        {this.createRow(combineData(this.props.channel, this.props.wayCodes, monthArr))} 
      </table>
    )
  }
}

const mapStateToProps = (state) => ({ 
  month: state.date.month,
  year: state.date.year,
  channel: state.channel,
  wayCodes: state.wayCode,
  date: state.date
})

export default connect(mapStateToProps, null)(ChannelContent)