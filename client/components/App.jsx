import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    console.log(this)
    this.state = {
      issueDate: this.todaysDate(),
      licenceNumber: '00000001'
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
      <div className='licenceWrapper'>
        <form>
          <div className='inputName'>
            <label htmlFor='name'>Full Name:</label>
            <input
              id='name'
              type='text'
              name='name'
              placeholder='enter name' />
          </div>
          <div className='inputBirthDate'>
            <label htmlFor='birthdate'>Date of Birth:</label>
            <input
              id='birthdate'
              type='date'
              name='birthdate' />
          </div>
          <div className='inputAddress'>
            <div>
              <label htmlFor='addressLineOne'>Address Line 1:</label>
              <input
                id='addressLineOne'
                type='text'
                name='addressLineOne' />
            </div>
            <div>
              <label htmlFor='addressLineTwo'>Address Line 2:</label>
              <input
                id='addressLineTwo'
                type='text'
                name='addressLineTwo' />
            </div>
            <div>
              <label htmlFor='cityTown'>City/Town:</label>
              <input
                id='cityTown'
                type='text'
                name='cityTown' />
            </div>
            <div>
              <label htmlFor='region'>Region:</label>
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
            <label htmlFor='issueDate'>Date of Issue:</label>
            <input
              id='issueDate'
              type='text'
              name='issueDate'
              disabled='disabled'
              value={state.issueDate}
              placeholder={state.issueDate} />
          </div>
          <div className='inputLicenceNumber'>
            <label htmlFor='licenceNumber'>Your unique licence code:</label>
            <input
              id='licenceNumber'
              type='text'
              name='licenceNumber'
              disabled='disabled'
              value={state.licenceNumber}
              placeholder={state.licenceNumber} />
          </div>
        </form>
      </div>
    )
  }
}

export default App
