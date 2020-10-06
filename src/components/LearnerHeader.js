import React from 'react'
import moment from 'moment'
import '../styles/LearnerHeader.css'
const LearnerHeader = (props) => {
  var date = moment()

  return (
    <div className='header-container'>
      <p className='name'>Learning Record- {props.name}</p>
      <p className='date'>Generated {date.format('MMMM D, YYYY')}</p>
    </div>
  )
}
export default LearnerHeader
