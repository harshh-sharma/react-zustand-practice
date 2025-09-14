import {create} from "zustand";

const useTaskStore = create((set,get) => ({
     tasks : [],

   setTask: ({ id, title, description = "" }) => {
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id, title, description, isCompleted: false }
      ]
    }));
  },

    getTasks: () => {
        return get().tasks;
    },

    updateTask: (id,title,isCompleted,description = "") => {
        set((state) => {
            const updatedTasks = state?.tasks?.map((task) => {
                if(task?.id == id){
                    task.title = title, 
                    task.description = description || "",
                    task.isCompleted = isCompleted
                }
                return task
            })
            return { tasks: updatedTasks }
        })
    },

    deleteTask: (id) => {
        console.log("id",id);
        
        set(state => {
            const updatedTasks = state?.tasks?.filter(task => task.id !== id);
            return {tasks:updatedTasks}
        })
    },

    changeTaskStatus: (id) => {
        set(state => {
            const updatedTasks = state?.tasks?.map(task => {
                if(task?.id == id){
                    return {
                        ...task,
                        isCompleted:!task?.isCompleted
                    }
                }
                return  task
            })
            return {tasks: updatedTasks}
        })
    }
}))

export default useTaskStore;