
function ButtonHeadTab({className, activeBtn, activeClass, dataUse, setState}){
    const btn = Object.keys(dataUse).reduce((acc, el)=>{
        acc['text'] = el
        acc['state'] = dataUse[el]
        return acc
    },{})
    return (
        <button className={`${className} ${activeBtn === btn['state'] ? activeClass: ''}`} data-use={btn['state']} onClick={()=>{
            setState((state)=>{
                clearInterval(state.timerID)
                return {
                    ...state,
                    ACTIVE_STATE:btn['state'],
                    isPause:true,
                    timerID:null,
                    timeToLeft:state[btn['state']] * 60, 
                }
            })
        }}>{btn['text']}</button>
    )
}
export {ButtonHeadTab}