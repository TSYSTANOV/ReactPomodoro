import { useEffect } from "react"

function Timer({state, title}){
    let timer = state.timeToLeft
    title.textContent = (Math.floor(timer / 60) < 10 ? '0'+ Math.floor(timer / 60): Math.floor(timer / 60)) + ':' + (timer % 60 < 10 ? '0'+ timer % 60 : timer % 60)
    return (
        <p className="time">
            <span className="time__minutes">{Math.floor(timer / 60) < 10 ? '0'+ Math.floor(timer / 60): Math.floor(timer / 60)}</span>:
            <span className="time__seconds">{timer % 60 < 10 ? '0'+ timer % 60 : timer % 60}</span>
        </p>
    )
}
export {Timer}

