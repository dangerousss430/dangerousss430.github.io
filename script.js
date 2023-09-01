var alarmTime = '';
var ringToneList = ['samsung.mp3', 'funny_cock.mp3', 'beep.mp3'];
var activeRingTone = 0;
var ringTone = new Audio(ringToneList[activeRingTone]);
var playRingtone = ()=>{
    ringTone.play();  
    ringTone.loop = true;
}
let amPm = true;



//  autoUpdate time function 

let time = ()=>{
    let dateObj = new Date();
    let timeElem = document.getElementById('time');
    let dayElem = document.getElementById('day');
    let dateElem = document.getElementById('date');
    let amPmArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,0];
    let hours = dateObj.getHours().toString();
    let amPmHour = dateObj.getHours().toString();
    let minutes = dateObj.getMinutes().toString();
    let seconds = dateObj.getSeconds().toString();
    let dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
    let day = dateObj.getDay();
    let date = dateObj.getDate().toString();
    let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = dateObj.getMonth().toString();
    let year = dateObj.getFullYear().toString();

   

    // Show Am Pm if selected else 24 hour format 

    if(amPm){
        if(hours >= 12){
            amPmHour = amPmArr[hours];
        }
    }


    // condition to satisfy HHMMSS format

    if(seconds < 10){
        seconds = '0' + seconds;
    }
    if(hours < 10){
        hours = '0' + hours;
    }
    if(amPmHour < 10){
        amPmHour = '0' + amPmHour;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }

    
    // assign time day and date to variables

    let fullTime = `${amPmHour} : ${minutes} : ${seconds}`;
    let fullDay = `${dayArr[day]}`;
    let fullDate = `${monthArr[month]} ${date}, ${year}`;
    

    // Add Am Pm

    if(amPm){
        if(hours <= 11 || hours == 24){
            fullTime += ' AM';
        }
        if(hours >= 12 && hours <= 23){      
            fullTime += ' PM';
        }
        if(hours == 24){
            hours = amPmArr[hours];
            hours = '0' + hours;
        }
    }


    // assign elements 

    timeElem.innerHTML = fullTime;
    dayElem.innerHTML = fullDay;
    dateElem.innerHTML = fullDate;


    // turn on alarm 

    if(`${alarmTime}:00` == `${hours}:${minutes}:${seconds}`){
        playRingtone();
        document.getElementById('alarm-stop-input').classList.remove('hide');
    }
}

    time();  // call function to !delay first time
    setInterval(time, 1000);


    // set Alarm to alarmTime variable

    function setAlarm(){
        alarmTime = document.getElementById('set-time-input').value;
        document.getElementById('alarm-list').innerHTML = `<p>Alarm set at: ${alarmTime}</p>`;
        document.getElementById('alarm-list').classList.remove('hide');
        setTimeout(()=>{
            document.getElementById('alarm-input-panel').classList.add('hide');
        }, 3000);
    }


    // display Alarm Input Panel

    function displayPanel(elemId){
        document.getElementById('alarm-input-panel').classList.add('hide');
        document.getElementById('ringtone-input').classList.add('hide');
        document.getElementById(elemId).classList.toggle('hide');
    }


    // stop Alarm

    function stopAlarm(){
        ringTone.pause();
        document.getElementById('alarm-stop-input').classList.add('hide');
        alarmTime = '';
        document.getElementById('alarm-list').classList.add('hide');
    }


    // change Ringtone

    function setRingtone(ringtoneIndex){
        activeRingTone = ringtoneIndex;
        ringTone.src = ringToneList[activeRingTone];

        // conditions to show check on active Ringtone

        if(ringtoneIndex == 0){
            document.getElementById('samsungCheck').classList.remove('hide');
            document.getElementById('funnyCockCheck').classList.add('hide');
            document.getElementById('beepCheck').classList.add('hide');
        }
        if(ringtoneIndex == 1){
            document.getElementById('samsungCheck').classList.add('hide');
            document.getElementById('funnyCockCheck').classList.remove('hide');
            document.getElementById('beepCheck').classList.add('hide');
        }
        if(ringtoneIndex == 2){
            document.getElementById('samsungCheck').classList.add('hide');
            document.getElementById('funnyCockCheck').classList.add('hide');
            document.getElementById('beepCheck').classList.remove('hide');
        }
    }


    // dark mode

    function darkModeToggle(){
        document.getElementById('dark-mode').classList.toggle('vhide');
        document.getElementById('light-mode').classList.toggle('vhide');
        document.getElementById('body').classList.toggle('dark');
        document.getElementById('nav-bar-container').classList.toggle('dark');
        document.getElementById('alarm-input-panel').classList.toggle('white');
        document.getElementById('alarm-stop-input').classList.toggle('white');
        document.getElementById('alarm-list').classList.toggle('white');
        document.getElementById('ringtone-input').classList.toggle('white');
        
    }


    // Toggle Am Pm

    function toggleAmPm(){
        document.getElementById('ampm').classList.toggle('vhide');
        document.getElementById('hr24').classList.toggle('vhide');
        if(amPm){
            amPm = false;
        }
        else{
            amPm = true;
        }   
    }





  
    






 





