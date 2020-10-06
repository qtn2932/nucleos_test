import React, { Component } from 'react'
import '../styles/LearnerRecord.css'
import Axios from 'axios'
import LearnerHeader from './LearnerHeader'
import StudentInfoField from './StudentInfoField'
import CourseField from './CourseField'

class LearnRecord extends Component {
  constructor (props) {
    super(props)
    this.state = {
      studentInfo: {},
      classRecord: [],
      isLoading: true
    }
  }

  async componentDidMount () {
    Axios.get('https://swapi.dev/api/people/1')
      .then(res => {
        this.setState({ studentInfo: res.data, classRecord: res.data.films, isLoading: false })
      })
  }

  render () {
    if (this.state.isLoading) {
      return (
        <di>Loading</di>
      )
    }
    return (
      <div className='record-container'>
        <LearnerHeader
          name={this.state.studentInfo.name}
        />
        <StudentInfoField
          name={this.state.studentInfo.name}
          created={this.state.studentInfo.created}
        />
        <CourseField
          courses={this.state.classRecord}
        />
      </div>
    )
  }
}
export default LearnRecord
