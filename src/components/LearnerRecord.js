import React, { Component } from 'react'
import '../styles/LearnerRecord.css'
import Axios from 'axios'
import LearnerHeader from './LearnerHeader'

class LearnRecord extends Component {
  constructor (props) {
    super(props)
    this.state = {
      studentInfo: {},
      classRecord: []
    }
  }

  componentDidMount () {
    Axios.get('https://swapi.dev/api/people/1')
      .then(res => {
        this.setState({ studentInfo: res.data, classRecord: res.data.films })
      })
  }

  render () {
    return (
      <div className='record-container'>
        <LearnerHeader
          name={this.state.studentInfo.name}
        />
      </div>
    )
  }
}
export default LearnRecord
