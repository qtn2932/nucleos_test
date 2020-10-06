import React from 'react'
import Course from './Course'
import '../styles/CourseField.css'

const CourseField = (props) => {
  console.log(props.courses)
  return (
    <div className='course-field-container'>
      {props.courses.map((course) => {
        return (<Course key url={course} />)
      })}
    </div>
  )
}
export default CourseField
