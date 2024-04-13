
function Audio(activeState){
    switch (activeState){
        case 'WORK_time':
          return <audio style={{display:'none'}} autoPlay src='./audio/august.mp3' type="audio/mp3"></audio>
        case 'BREAK_time':
           return <audio style={{display:'none'}} autoPlay src='./audio/deep-end.mp3' type="audio/mp3"></audio>
        case 'RELAX_time':
           return  <audio style={{display:'none'}} autoPlay src='./audio/dudu.mp3' type="audio/mp3"></audio>
    }
}
export {Audio}