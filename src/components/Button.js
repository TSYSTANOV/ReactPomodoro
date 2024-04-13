
function Button({stop, controller, onClick, className, text,activeTask}){
    return  <button onClick={()=>{
        if(!activeTask){
            return
        }
        if(!stop){
            controller()
        }
        onClick((state)=>{
            if(stop){
                clearInterval(state.timerID)
                return {...state, isPause:true, timeToLeft:state[state.ACTIVE_STATE]*60, timerID:null}
            }
            return {...state, isPause:!state.isPause}
        })
    }} className={className}>{text}</button>
}
export {Button}