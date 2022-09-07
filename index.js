const startTimer = () => {
    let myMillieSec = millisec.value;
    myMillieSec++;
    millisec.value = myMillieSec;
   myTimeout = setTimeout(startTimer, 9);
    if(millisec.value == 100){
        millisec.value = 00;
        seconds.value++;
    }
    if(seconds.value== 60){
        seconds.value = 00;
        minutes.value++;
    }
    if(minutes.value == 60){
        minutes.value = 00;
        hours.value++;
    }
}
        
function stop(){
            // location.reload()
            clearInterval(myTimeout)
            millisec.value = "00"
            seconds.value = "00"
            minutes.value = "00"
            hours.value = "00"

        }
const pause = () =>{
    myTimeout = clearInterval(myTimeout)
} 
    
        
        
        
        
        
        
        
        
        
        
        
        
        
        // const stop = ()=> {
//     let mySeconds = seconds.value
//     let myMinutes = minutes.value
//     let myHour = hours.value
//     if(mySeconds && myMinutes && myHour == ""){
//         alert("stop")
//     }
// }