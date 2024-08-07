import React from 'react'
import style from './rightContent.module.css'
import Star from '../../assets/ph_star.png'
import Add from '../../assets/material-symbols-light_add.png'
import Reminder from '../../assets/notification.png'
import DueDate from '../../assets/calendar.png'
import { MdDeleteOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import Repeat from '../../assets/Vector.png'

const rightContent = () => {
  return (
    <div className={`p-3  mb-3 position-relative ${style.rightContent}`}>
    <ul className='list-unstyled'>
        <li className={`p-3 ${style.firstList}`}><input className='mx-2'  type="checkbox"/>Buy Groceries<img className='ms-auto me-0' alt="add"  src={Star}/></li>
        <li className={`p-2 ${style.firstList}`}><img className='mx-2' alt="add"  src={Add}/>Add Steps</li>
        <li className={`p-2 ${style.firstList}`}><img className='mx-2' alt="add"  src={Reminder}/>Set Reminder</li>
        <li className={`p-2 ${style.firstList}`}><img className='mx-2' alt="add"  src={DueDate}/>Add Due dates</li>
        <li className={`p-2 ${style.firstList}`}><img className='mx-2' alt="add"  src={Repeat}/>Updates</li>
        <li style={{color:"grey"}} className='px-5 py-2'>Add Notes</li>
    </ul>
    <div className='position-absolute right-0 bottom-0 pt-4 pb-4 border-top d-flex align-items-center justify-content-between ' style={{ gap: '10px' ,width:"90%"}} >
<IoClose/>
    <p className='mb-0'>Created Today</p>
<MdDeleteOutline/>
    </div>
    </div>
  )
}

export default rightContent
