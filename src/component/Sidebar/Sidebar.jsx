import React from 'react'
import Menu from '../../assets/menu.png'
import Star from '../../assets/ph_star.png'
import Calendar from '../../assets/calendar.png'
import Group from '../../assets/Group.png'
import Plan from '../../assets/carbon_plan.png'
import Add from '../../assets/material-symbols-light_add.png'
import PieChart from '../../assets/Ellipse 2319.png'
import Icon from '../../assets/Ellipse 16.png'

import style from './Sidebar.module.css'
const Sidebar = () => {
  return (
    <div className={` p-3 mb-3 ${style.sideBar}`}>
    <div className='text-center '>
      <img width="150px" height="150px" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png"/>
      <p>hey,Allen</p>
      </div>
      <div className={`p-3 my-3 ${style.list}`} >
        <ul className={`list-unstyled `}>
            <li ><img alt="menu" className='p-2' src={Menu}/><a >All Tasks</a></li>
            <li><img alt="today" className='p-2' src={Calendar}/><a>Today</a></li>
            <li><img alt="imp" className='p-2' src={Star}/><a>Important</a></li>
            <li><img alt="planned" className='p-2' src={Plan}/><a>Planned</a></li>
            <li><img alt="group" className='p-2' src={Group}/><a>Assigned to me</a></li>
        </ul>
      </div>
      <div className={`p-3 my-3 d-flex align-item-center ${style.list}`}>
        <ul  className='list-unstyled'>
            <li><img alt="add" className='p-2' src={Add}/><a >Add List</a></li>
        </ul>
      </div>
      <div className='d-flex p-3 '>
<p className='mb-0'>Today Task </p><span className='text-end pe-2'><img alt="icon" src={Icon}/>
</span>
</div>
<p className='mb-0'>11</p>
<hr/>
<div className='p-3 mb-3'>
<img alt="piechart" src={PieChart}/>
      </div>
      </div>
    
  )
}

export default Sidebar
