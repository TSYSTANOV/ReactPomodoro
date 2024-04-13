function TaskItem({task, deleteTask, editTask, setTitleMain, setPomodoroCount, setPomodoroState, pomodoro, setActiveTask}){
    return <li className='todo__item' task-id={task.id}>
        <div className="todo__item-wrapper">
        <button className='todo__btn' onClick={()=>{
            setTitleMain(task.title)
            setPomodoroCount(task.pomodoroCount)
                clearInterval(pomodoro.timerID)
                setPomodoroState({...pomodoro, ACTIVE_STATE:'WORK_time', isPause:true, timeToLeft:pomodoro["WORK_time"]*60, timerID:null, HOW_MANY_TIMES_WORK:0})
                setActiveTask(task)
        }}>{task.title}</button>
        <button className='todo__edit' aria-label='Редактировать' onClick={()=>{
            const newTitle = prompt(`Edit Task ${task.title}`)
            if(newTitle){
                editTask(task.id, newTitle)
            }
        }}></button>
        <button className='todo__del' aria-label='Удалить' onClick={()=>{
            deleteTask(task.id)
        }}></button>
        </div>
    </li>
}
export {TaskItem}

