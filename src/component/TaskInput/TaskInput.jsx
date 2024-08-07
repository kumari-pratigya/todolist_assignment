import React from 'react'
import style from '../MainContent/mainContent.module.css'
import Reminder from '../../assets/notification.png'
import DueDate from '../../assets/calendar.png'
import Repeat from '../../assets/Vector.png'

const TaskInput = ({setTask,handleKeyPress,handleAddTask,task,showDropdown,setShowDropdown,setActivityType}) => {
const handleChange=(e)=>{
    setTask(e.target.value);
    setShowDropdown(true);
}
  return (
    <>
     <select className={style.dropdown}>
      <option>To do</option>
    </select>
    <div className={` position-relative ${style.inputContainer}`}>
    <input   value={task}  onChange={handleChange} onKeyDown={handleKeyPress} type="text" placeholder="Add a Task"/>
   {showDropdown &&  <select  onChange={(e) => setActivityType(e.target.value)} className=' px-2 mx-2'>
   <option disabled> Activity Type</option>

        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>

    </select>}
  
    <div className=' d-flex align-items-center gap-3 p-2 w-100  position-absolute bottom-0'>
<img src={Reminder}/>
<img src={DueDate}/>
<img src={Repeat}/>
<button  className='ms-auto me-0'  onClick={handleAddTask} type="submit">Add Task</button>
    </div>
    </div> 
    </>
  )
}

export default TaskInput
