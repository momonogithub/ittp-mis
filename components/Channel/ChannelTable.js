import Head from 'next/head'
import { Component } from 'react'
import { 
  monthToMonth,
  createColHead,
  fullMonth,
  commaNumber,
  fixedTwoDecimal } from '../../utilize/utils'
import { values } from 'lodash'
import { connect } from 'react-redux'

const groupName = ['Branch', 'Sale', 'StaffCash', 'Partner', 'Online', 'Other']

const checkGroup = code => {
  if(code[0] === 'B' || code === 'HQ') {
    return groupName[0]
  } else if (code === 'MT' || code === 'Staffcash') {
    return groupName[2]
  } else if (code[0] === 'S') {
    return groupName[1]
  } else if (code[0] === 'P') {
    return groupName[3]
  } else if (code === 'WWW' || code[0] === 'T') {
    return groupName[4]
  } else {
    return groupName[5]
  }
}

export const combineData = (channel, wayCodes, date) => {
  const result = []
  const month = values(channel)
  const group = {}
  for(let i = 0 ; i < groupName.length ; i += 1) {
    group[groupName[i]] = {
      Application: 0,
      Approved: 0,
      display: [groupName[i]],
      subGroup: {}
    }
  }
  let header =  ['']
  let percent
  result.push(header.concat(date))
  for(let count = month.length - 1 ; count >=0 ; count -=1) {
    for(let code in wayCodes) {
      const subChannel = month[count][code]
      const value = subChannel === undefined? 
      'N/A' : `${subChannel.Approved} : ${subChannel.Application} ${subChannel.Percent}%`
      const index = checkGroup(code)
      if(group[index]['subGroup'][code] === undefined) {
        group[index]['subGroup'][code] = [code]
      }
      group[index]['subGroup'][code].push(value)
      if(subChannel !== undefined) {
        group[index]['Application'] += subChannel.Application
        group[index]['Approved'] += subChannel.Approved
      }
      if(count === 11) {
        console.log(group)
      }
    }
    for(let item in group) {
      percent = group[item].Application === 0 ? 
      'N/A' : `${fixedTwoDecimal(group[item].Approved  / group[item].Application * 100)}%`
      group[item].display.push(`${group[item].Approved} : ${group[item].Application} ${percent}`)
      // reset value for next iterative
      group[item].Approved = 0
      group[item].Application = 0
    }
  }
  for(let item in group) {
    result.push(group[item].display)
    for(let sub in group[item].subGroup) {
      result.push(group[item].subGroup[sub])
    }
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
      const status = this.props.wayCodes[data[row][0]] === undefined? 
        true : this.props.wayCodes[data[row][0]].status
      const isSub = this.props.wayCodes[data[row][0]] === undefined?
        false : true
      if(status) {
        result.push(
          <tbody key={`${data[row]}body`}>
            <tr key={`${data[row][0]}row`} className={isSub === true? 'spanRow sub' : 'spanRow' }>
              <td key={`${data[row][0]}span`} colSpan='14'>
                <label key={`${data[row][0]}Label`}>{`${data[row][0]}`}</label>
              </td>
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
        result.push(<td className='cellText' key={`${key}${col}`} >{'App : Approved'}</td>)
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
      <div className='contentWrapper'>
        <table>
          <Head><link href='/static/style.css' rel='stylesheet'/></Head>
          <tbody>
            <tr className='spanRow'>
              <td className='headTable' colSpan='14'>
                <label>
                  Acquistion as {fullMonth[this.props.month - 1]} {this.props.year}
                </label>
              </td>
            </tr>
            <tr>
              <th></th>
              {createColHead(monthArr)}
            </tr>
          </tbody>
          {this.createRow(combineData(this.props.channel, this.props.wayCodes, monthArr))} 
        </table>
      </div>
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