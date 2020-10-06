import React from 'react'
import Axios from 'axios'
import logo from '../asset/logo.png'
import moment from 'moment'
import '../styles/course.css'

class Course extends React.Component {
  constructor (props) {
    super()
    this.state = {
      course: {},
      loading: true
    }
  }

  componentDidMount () {
    Axios.get(this.props.url).then((value) => {
      this.setState({ course: value.data, loading: false })
    })
  }

  render () {
    if (this.state.loading) {
      return (<div>Loading</div>)
    }
    return (
      <div className='course-container'>
        <div className='course-info'>
          <div className='title-tile'>
            <img src={logo} className='course-logo' />
            <div className='info-title'>{this.state.course.title}</div>
          </div>

          <div>{this.state.course.opening_crawl}</div>
          <a href={this.state.course.url}>Course Description</a>
        </div>
        <div className='course-date'>{moment(this.state.course.created).format('MMMM, yyyy')}</div>
      </div>
    )
  }
}
export default Course
