import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      issueDate: this.todaysDate()
    }
    this.regions = [
      'Northland',
      'Auckland/Waikato',
      'Eastern',
      'Taranaki',
      'Hawkes Bay',
      'Wellington',
      'Nelson/Marlborough',
      'West Coast',
      'North Canterbury',
      'Central South Island',
      'Otago',
      'Southland'
    ]
  }

  todaysDate () {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yyyy = today.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    today = dd + ' / ' + mm + ' / ' + yyyy
    return today
  }

  render () {
    return (
      <div className='licenseWrapper'>
        <form>
          <div className='inputName'></div>
          <div className='inputBirthDate'></div>
          <div className='inputAddress'></div>
          <div className='inputIssueDate'></div>
          <div className='inputLicenseNumber'></div>
        </form>
      </div>
    )
  }
}

export default App
