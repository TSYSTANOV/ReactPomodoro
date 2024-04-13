import React from "react";
import { useEffect } from "react"
import "./App.css";
import { Control } from "./components/Control";
import { Timer } from "./components/Timer";
import { HeaderTabs } from "./components/HeaderTabs";
import { Task } from "./components/Task";
import { Audio } from "./components/Audio";
function App({title}) {
  const [pomodoroState, setPomodoroState] = React.useState({
    WORK_time:25,
    BREAK_time:5,
    RELAX_time:20,
    timerID:null,
    ACTIVE_STATE:"WORK_time",
    timeToLeft: null,
    isPause:true,
    HOW_MANY_TIMES_WORK:0
  })
  const [titleMain, setTitleMain] = React.useState('Написать Pomodoro')
  const [pomodoroCount, setPomodoroCount] = React.useState(0)
  const [activeTask, setActiveTask] = React.useState(null)
 
  useEffect(()=>{
    setPomodoroState((stat)=>{
        return {...stat, timeToLeft: stat[stat.ACTIVE_STATE] * 60}
    })
    },[])

  function pomodoroControllerHandler(){
    if(pomodoroState.isPause){
      let timer = setInterval(()=>{
        setPomodoroState((pomodoro)=>{
          if(pomodoro.timeToLeft === 0){
            if(pomodoro.ACTIVE_STATE === "WORK_time"){
              setActiveTask({...activeTask, pomodoroCount: activeTask.pomodoroCount++})
              setPomodoroCount(activeTask.pomodoroCount)
            }
            // clearInterval(pomodoro.timerID)
            function changeState(){
              if(pomodoro.HOW_MANY_TIMES_WORK > 3) {
                return 'RELAX_time'
              }
              if(pomodoro.ACTIVE_STATE === "WORK_time"){
                
                return "BREAK_time"
              }
                return 'WORK_time'
              
            }
            return {...pomodoro,
              HOW_MANY_TIMES_WORK: pomodoro.HOW_MANY_TIMES_WORK > 3 || pomodoro.ACTIVE_STATE === 'RELAX_time'? 0 : pomodoro.HOW_MANY_TIMES_WORK + 1,
              ACTIVE_STATE: changeState(),
              timeToLeft:pomodoro[changeState()] * 60, 
              timerID:timer
              }
          }else{
              return {...pomodoro, timeToLeft:pomodoro.timeToLeft-=1, timerID:timer} 
          }
        })
      },1000)
    }else{
      clearInterval(pomodoroState.timerID)
      setPomodoroState((pomodoro)=>{
        return {...pomodoro}
      })
    }
  }
  return (<>
  <div className="container">
    <Task setTitleMainOnPage={setTitleMain} setPomodoroCount={setPomodoroCount} pomodoro={pomodoroState} setPomodoroState={setPomodoroState} activeTask={activeTask} setActiveTask={setActiveTask}/>
    <div className="timer">
      <div className="header">
        <h1 className="header__title">Помодоро</h1>

        <img src="./img/logo.svg" alt="Логотип"/>
      </div>
      <HeaderTabs activeState={pomodoroState} setState={setPomodoroState}/>
      <Timer state={pomodoroState} setState={setPomodoroState} title={title}/>
      <p className="title">{titleMain}</p>
      <Control setState={setPomodoroState} isPause={pomodoroState.isPause} pomodoroController={pomodoroControllerHandler} activeTask={activeTask}/>
    </div>

    <div className="count">
      <p className="count_num">{pomodoroCount}</p>
      <p className="count_text">Кол-во помодорок</p>
    </div>
  </div>
  {!pomodoroState.isPause && Audio(pomodoroState.ACTIVE_STATE)}
    </>
  )
}

export { App };
