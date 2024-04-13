import { Button } from "./Button";
function Control({pomodoroController,setState, isPause, activeTask}){
    return (
        <div className="control">
            <Button controller={pomodoroController} onClick={setState} className='control__btn control__btn_start' text={isPause ? "Старт" : 'Пауза'} activeTask={activeTask}/>
            <Button stop={true} controller={pomodoroController} onClick={setState} className='control__btn control__btn_stop' text="Стоп" activeTask={activeTask}/>
        </div>
    )
}
export {Control}