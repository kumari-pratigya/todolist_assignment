import React from 'react'
import Star from '../../assets/ph_star.png'
import { MdDeleteOutline } from "react-icons/md";
import style from '../MainContent/mainContent.module.css'
import Weather from '../weather/Weather';
const TaskList = ({tasks,handleToggleComplete,handledelItem}) => {
    console.log(tasks)
  return (
    <>
     <ul className='list-unstyled'>
    {tasks.map((task, index) => (
      <li  key={index}>
    <div className={`p-3 w-100 d-flex align-items-center border-top  border-bottom`}><input className='mx-2'
      type="checkbox"    checked={task.completed}
      onChange={() => handleToggleComplete(index)}/>  <span className={task.completed ? 'text-decoration-line-through' : ''}>
              {task.text} {/* Ensure task.text is a string */}
            </span>
    {tasks.map((task, index) => (
        <div key={index} className="d-flex align-items-center gap-3">
          {task.type === 'outdoor' && <Weather />} {/* Conditionally render Weather component */}
        </div>
      ))}
              
         
            <div className="ms-auto d-flex align-items-center gap-3">
        <MdDeleteOutline onClick={()=>handledelItem(index)} className={` cursor-pointer ${style.delIcon}` }/>
        <img alt="add" src={Star} />
      </div>
      </div>
    </li>
    ))}
    </ul>  
    </>
  )
}

export default TaskList
