import React from 'react'
// import { Dropdown } from 'react-bootstrap';
import './DateePicker.css';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
 

function Datepicker() {
    
  return (
    <div className='Datepicker'>
        <DatePicker  className='pick' placeholderText='Pick Date'/>
        <hr className='hr1'/>
        
       
    </div>
  )
}

export default Datepicker