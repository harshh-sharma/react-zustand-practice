import { useState } from "react";
import AddTaskModel from "./components/AddTaskModel";
import useTaskStore from "./zustand/store";

const App = () => {
  // const {tasks, changeTaskStatus, delte} = useTaskStore();
  const {tasks, changeTaskStatus, deleteTask} = useTaskStore();
  // console.log("deleteTask",deleteTask);
  
  const [showAddTaskModel, setShowAddTaskModel] = useState(false);
  return (
    <div>
    <div className="flex justify-between">
      <h1>State Management With  zustand</h1>
      <button onClick={() =>  setShowAddTaskModel(true)}>Add Task</button>
    </div>
      <div>
        {
          showAddTaskModel && <AddTaskModel setShowAddTaskModel={setShowAddTaskModel} />
        }
      </div>

      <div>
        {
          tasks?.map((task) => (
            <div key={task?.id} className="flex gap-5 border-2 border-red-500 my-2">
              <h1>{task?.title}</h1>
              <p>{task?.description}</p>
              <button onClick={() => changeTaskStatus(task?.id)}>{task?.isCompleted ? 'Completed': 'mark as completed'}</button>
              <button onClick={() => deleteTask(task.id)}>Remove Task</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App;