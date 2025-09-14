import React, { useState } from 'react'
import useTaskStore from '../zustand/store'

const AddTaskModel = ({setShowAddTaskModel}) => {
    const {setTask} = useTaskStore();

    const  generateId = () =>  {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
        }

    const [taskData, setTaskData] = useState({
        id:"",
        title:"",
        description:"",
        isCompleted: false,
    })
  const handleChange = (e) => {
    const {name, value} = e.target;
    setTaskData((prev) => ({
        ...prev,
        [name]:value
     }))
  }

  const handleSubmit = () => {
    const randomId = generateId();
    const updatedTaskData = {
        ...taskData,
        id:randomId

    }
    setTask(updatedTaskData);
    setShowAddTaskModel(false);
  }
  return (
    <div>
        <input type="text" name='title' placeholder='Enter title...' onChange={handleChange} />
        <input type="text" name='description' placeholder='Enter description...'  onChange={handleChange}/>
        <input type="checkbox" name='isCompleted' onChange={handleChange}  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default AddTaskModel