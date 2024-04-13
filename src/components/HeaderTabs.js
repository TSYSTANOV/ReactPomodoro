import { ButtonHeadTab } from "./ButtonHeadTab"
function HeaderTabs({activeState, setState}){
    const stateBtn = [{'Помодоро':'WORK_time'}, {'Перерыв':"BREAK_time"},{'Отдых':"RELAX_time"}]
    return (
    <div className="navigation">
        {stateBtn.map((item, index)=>{
            return <ButtonHeadTab key={index} className='navigation__btn' activeBtn={activeState.ACTIVE_STATE} activeClass='navigation__btn_active' dataUse={item} setState={setState}/>
        })}
      </div>
    )
}
export {HeaderTabs}