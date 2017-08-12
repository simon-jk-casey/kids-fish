import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    console.log(this)
    this.state = {
      issueDate: this.todaysDate(),
      licenseNumber: '00000001'
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
    const { state, regions } = this
    return (
      <div className='licenseWrapper'>
        <form>
          <div className='inputName'>
            <input
              id='name'
              type='text'
              name='name'
              placeholder='enter name' />
          </div>
          <div className='inputBirthDate'>
            <input
              id='birthdate'
              type='date'
              name='birthdate' />
          </div>
          <div className='inputAddress'>
            <div>
              <input
                id='addressLineOne'
                type='text'
                name='addressLineOne' />
            </div>
            <div>
              <input
                id='addressLineTwo'
                type='text'
                name='addressLineTwo' />
            </div>
            <div>
              <input
                id='cityTown'
                type='text'
                name='cityTown' />
            </div>
            <div>
              <select
                id='region'
                defaultValue='null'
                name='region'>
                {
                  regions.map((region, index) =>
                    <option key={index} value={region}>{region}</option>
                  )
                }
              </select>
            </div>
          </div>
          <div className='inputIssueDate'>
            <input
              id='issueDate'
              type='text'
              disabled='disabled'
              value={state.issueDate}
              placeholder={state.issueDate} />
          </div>
          <div className='inputLicenseNumber'>
            <input
              id='licenseNumber'
              type='text'
              disabled='disabled'
              value={state.licenseNumber}
              placeholder={state.licenseNumber} />
          </div>
        </form>
      </div>
    )
  }
}

export default App
