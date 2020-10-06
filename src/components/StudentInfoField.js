import React, { useState, useEffect } from 'react'
import moment from 'moment'
import logo from '../asset/logo.png'
import '../styles/StudentInfoField.css'

const StudentInfoField = (props) => {
  return (
    <div className='info-field-container'>
      <div className='info-container'>
        <div className='name-field'>
          <p className='name'>{props.name}</p>
          <p>{moment(props.created).format('MMMM, YYYY')}-{moment().format('MMMM, YYYY')}</p>
        </div>
        <div className='institution-field'>
          <p className='title'>Institution(s)</p>
          <p>Coursera, Hartnell Community College, Monterey County Correctional Facillity</p>
        </div>
        <div className='about-field'>
          <p className='title'>About</p>
          <p>The Nuccleos Learning Record
                    provides a verifiable record that the learner listed above has completed
                     the following courses of study. For more information,
                     please see <a>record.nucleos.com/about</a>
          </p>
        </div>
      </div>
      <div className='logo-container'>
        <p className='verify'>Verified by</p>
        <img src={logo} alt='logo' />

      </div>
    </div>
  )
}
export default StudentInfoField
