function timerLeft(year,month,day,hour,minute) {
    setInterval(function() {
        var daysLeft_1 = document.getElementById('timer-v-days-1'),
            daysLeft_2 = document.getElementById('timer-v-days-2'),
            hoursLeft_1 = document.getElementById('timer-v-hours-1'),
            hoursLeft_2 = document.getElementById('timer-v-hours-2'),
            minutesLeft_1 = document.getElementById('timer-v-minutes-1'),
            minutesLeft_2 = document.getElementById('timer-v-minutes-2'),
            dateNow = new Date().getTime(),
            dateFinish = new Date(year,month,day,hour,minute).getTime(),
            sec = Math.floor((dateFinish - dateNow) / 1000),
            secToMinutes = sec % 3600,
            daysNumber = Math.floor(sec / (3600*24)),
            hoursNumber = Math.floor((sec / 3600)%24),
            minutesNumber = Math.floor(secToMinutes / 60);
        if(daysNumber < 10){
            daysNumber="0"+daysNumber;
        }
        if(hoursNumber < 10){
            hoursNumber="0"+hoursNumber;
        }
        if(minutesNumber < 10){
            minutesNumber="0"+minutesNumber;
        }
        daysLeft_1.innerHTML = Math.floor(daysNumber/10);
        daysLeft_2.innerHTML = Math.floor(daysNumber%10);
        hoursLeft_1.innerHTML = Math.floor(hoursNumber/10);
        hoursLeft_2.innerHTML = Math.floor(hoursNumber%10);
        minutesLeft_1.innerHTML = Math.floor(minutesNumber/10);
        minutesLeft_2.innerHTML = Math.floor(minutesNumber%10);

    },1000)
}
timerLeft(2020,1 ,25, 0, 0);
