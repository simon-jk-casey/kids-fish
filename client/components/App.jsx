import React from 'react'
import request from 'superagent'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.getInitialState()
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

  componentWillMount () {
    this.getUniqueLicenceCode()
  }

  getInitialState () {
    return {
      issueDate: this.todaysDate()
    }
  }

  getUniqueLicenceCode () {
    request
      // .get('https://childLicense.herokuapp.com/api/v1/licensing')
      .get('http://localhost:3000/api/v1/licensing')
      .end((err, res) => {
        if (err) {
          return 'Error - Reload Page'
        } else {
          const licenseCount = res.body[0].count + 1
          let countString = licenseCount.toString()
          let iterator = 8 - countString.length
          let zeroString = ''
          if (countString.length < 8) {
            for (var i = 0; i < iterator; i++) {
              zeroString += '0'
            }
            let currentLicenceNumber = zeroString + countString
            this.setState({ licenceNumber: currentLicenceNumber })
          }
        }
      })
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
    today = dd + '/' + mm + '/' + yyyy
    return today
  }

  handleChange (evt) {
    const { name, value } = evt.target
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleSubmit (evt) {
    console.log('triggers')
    const {
      name,
      birthdate,
      addressLineOne,
      addressLineTwo,
      cityTown,
      region,
      issueDate } = this.state
    const issueDateArr = issueDate.split('/')
    const licenceObject = {
      name: name,
      birthdate: birthdate,
      addressLineOne: addressLineOne,
      addressLineTwo: addressLineTwo,
      cityTown: cityTown,
      region: region,
      issueDate: issueDate,
      issueMonth: parseInt(issueDateArr[1]),
      issueYear: parseInt(issueDateArr[2])
    }
    evt.preventDefault()
    request
      // .post('https://childLicense.herokuapp.com/api/v1/licensing')
      .post('http://localhost:3000/api/v1/licensing')
      .send(licenceObject)
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          console.log('repsonse', res)
        }
      })
    document.getElementById('licence').reset()
    this.state = this.getInitialState()
    this.getUniqueLicenceCode()
    console.log(this.state)
  }

  handleCancel (evt) {
    evt.preventDefault()
    document.getElementById('licence').reset()
    this.state = this.getInitialState()
  }

  render () {
    console.log(this.state)
    const { state, regions } = this
    return (
      <div className='licenceWrapper'>
        <form
          id='licence'
          className='licenceForm'
          onSubmit={(evt) => this.handleSubmit(evt)}>
          <div className='inputName fieldBG'>
            <label htmlFor='name'>FULL NAME:</label>
            <input
              id='name'
              type='text'
              name='name'
              onChange={(evt) => this.handleChange(evt)} />
          </div>
          <div className='inputBirthDate fieldBG'>
            <label htmlFor='birthdate'>DATE OF BIRTH:</label>
            <input
              id='birthdate'
              type='date'
              name='birthdate'
              onChange={(evt) => this.handleChange(evt)} />
          </div>
          <div className='inputAddress fieldBG'>
            <div className='subAddress'>
              <label htmlFor='addressLineOne'>ADDRESS LINE 1:</label>
              <input
                id='addressLineOne'
                type='text'
                name='addressLineOne'
                onChange={(evt) => this.handleChange(evt)} />
            </div>
            <div className='subAddress'>
              <label htmlFor='addressLineTwo'>ADDRESS LINE 2:</label>
              <input
                id='addressLineTwo'
                type='text'
                name='addressLineTwo'
                onChange={(evt) => this.handleChange(evt)} />
            </div>
            <div className='subAddress'>
              <label htmlFor='cityTown'>CITY/TOWN:</label>
              <input
                id='cityTown'
                type='text'
                name='cityTown'
                onChange={(evt) => this.handleChange(evt)} />
            </div>
            <div>
              <label htmlFor='region'>REGION:</label>
              <select
                id='region'
                defaultValue='null'
                name='region'
                onChange={(evt) => this.handleChange(evt)}>
                <option value='null disabled'>Select Region</option>
                {
                  regions.map((region, index) =>
                    <option key={index} value={region}>{region}</option>
                  )
                }
              </select>
            </div>
          </div>
          <div className='inputIssueDate fieldBG'>
            <label htmlFor='issueDate'>DATE OF ISSUE:</label>
            <input
              id='issueDate'
              type='text'
              name='issueDate'
              disabled='disabled'
              value={state.issueDate}
              placeholder={state.issueDate} />
          </div>
          <div className='inputLicenceNumber fieldBG'>
            <label htmlFor='licenceNumber'>YOUR UNIQUE LICENCE CODE:</label>
            <input
              id='licenceNumber'
              type='text'
              name='licenceNumber'
              disabled='disabled'
              value={state.licenceNumber}
              placeholder={state.licenceNumber} />
          </div>
        </form>
        <div className='buttonDiv'>
          <button className='green' form='licence' type='submit'>SUBMIT</button>
          <button className='red' onClick={(evt) => this.handleCancel(evt)}>CANCEL</button>
        </div>
      </div>
    )
  }
}

export default App
