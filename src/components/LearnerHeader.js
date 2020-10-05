import React from 'react'
import moment from 'moment'

const LearnerHeader = (props) => {
  return (
    <div className='header-container'>
      <p className='name'>Learning Record-{props.name}</p>
      <p className='date'>December 2015 -December 2021</p>
    </div>
  )
}
export default LearnerHeader
