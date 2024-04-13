import { v4 as uuidv4 } from "uuid";
import React from "react";
import { TaskItem } from "./TaskItem"
function Task({setTitleMainOnPage, setPomodoroCount, setPomodoroState, pomodoro, activeTask, setActiveTask}){
    const tasksDATA = localStorage.getItem('taskPOMODORO') ? JSON.parse(localStorage.getItem('taskPOMODORO')) : []
    let [newTask, setTask] = React.useState(tasksDATA)
    localStorage.setItem('taskPOMODORO', JSON.stringify(newTask))
    function createTask(){
        const newTaskTitle = prompt('Add new Task')
        if(newTaskTitle){
            setTask([...newTask,{
                title:newTaskTitle,
                id:uuidv4(),
                pomodoroCount:0
            }])
        }
    }
    function deleteTaskHandler(id){
        setTask(newTask.filter((task)=> {return task.id !== id}))
        if(activeTask.id === id){
            setActiveTask(null)
            clearInterval(pomodoro.timerID)
            setPomodoroState({...pomodoro, timerID:null, timeToLeft:pomodoro[pomodoro.ACTIVE_STATE] * 60, HOW_MANY_TIMES_WORK:0})
            setPomodoroCount(0)
            setTitleMainOnPage('Написать Pomodoro')
        }
    }
    function editTaskHandler(id, newTitle){
        setTask(newTask.map((task)=>{
            if(task.id === id){
                task.title = newTitle
                setTitleMainOnPage(newTitle)
                return task
            }else{
                return task
            }
        }))
        
    }
    React.useEffect(()=>{
        if(activeTask){
        setTask(newTask.map((task)=>{
            if(task.id === activeTask.id){
                task.pomodoroCount = activeTask.pomodoroCount
                return task
            }
                return task
        }))
        }
    },[])

    return (
        <div className="todo">
        <h2 className="todo__title">Задачи</h2>
        <ol className="todo__list">
           {newTask.length > 0 && newTask.map((task)=>{
            return <TaskItem key={task.id} task={task} deleteTask={deleteTaskHandler} editTask={editTaskHandler} setTitleMain={setTitleMainOnPage} setPomodoroCount={setPomodoroCount} setPomodoroState={setPomodoroState} pomodoro={pomodoro} activeTask={activeTask} setActiveTask={setActiveTask}/>
           })}
          <li className="todo__item">
            <button className="todo__add" onClick={createTask}>Добавить новую задачу</button>
          </li>
        </ol>
      </div>   
    )
}
export {Task}