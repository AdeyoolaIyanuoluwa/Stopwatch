const startTimer = () => {
    let myMillieSec = millisec.value;
    myMillieSec++;
    millisec.value = myMillieSec;
    setTimeout(startTimer, 9);
    if(millisec.value == 100){
        millisec.value = 0;
        seconds.value++;
    }
    if(seconds.value== 60){
        seconds.value = 0;
        minutes.value++;
    }
    if(minutes.value == 60){
        minutes.value = 0;
        hours.value++;
    }
}
        
function stop(){
            location.reload()
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // const stop = ()=> {
//     let mySeconds = seconds.value
//     let myMinutes = minutes.value
//     let myHour = hours.value
//     if(mySeconds && myMinutes && myHour == ""){
//         alert("stop")
//     }
// }