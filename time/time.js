var displayDate = () => {
    let allMonths = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let allDays = ['Sunday', 'Monday', 'Tuesday', 'Thuesday', 'Friday', 'Statuday'];
    let myDate = new Date();
    let myday = myDate.getDay();
    let mymonth = myDate.getMonth();
    let year = myDate.getFullYear();
    let displayDay = " ";
    let displayMonth = " ";
    for(let i = 0; i < allDays.length; i++){
        switch(myday){
        case i:
        displayDay = allDays[i];
        break;
        }
    }
    for(let i = 0; i < allMonths.length; i++){
        switch(mymonth){
            case i:
            displayMonth = allMonths[i];
            break;
        }
    }
    let result = document.querySelector('h1');
    result.innerHTML = displayDay + " / " + displayMonth + " / " + year;
}
displayDate();


















































































/*var time = () => {
    let day = new Date();
    let hours = (day.getHours() % 12).toString();
    let minute = day.getMinutes().toString();
    let second = day.getSeconds().toString();
    let output = document.querySelector('h1');
    if(hours < 10){
        hours = '0' + hours;
    }
    if(minute < 10){
        minute = '0' + minute;
    }
    if(second < 10){
        second = second + '0';
    }
    output.innerHTML = hours + " : " + minute + " : " + second;
}
// for day
var days = () =>{
    let days = new Date();
    let myDay = days.getDay();
    let displayDay = " ";
    let allDays = ['Sunday', 'Monday', 'Tuesday', 'Thuesday', 'Friday', 'Statuday'];
    for(i = 0; i < allDays.length; i++){
        switch(myDay){
            case i:
                displayDay = allDays[i];
                break;
        }
    }
    document.querySelector('h1').innerHTML = displayDay;
}
days();


setInterval(time, 1000);
var displayDate= () => {
    allDays=["sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "saturday"];
    allMonths=["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let myDate = new Date();
    let day     =   myDate.getDays();
    let month   =   myDate.getMonth();
    let year    =   myDate.getFullYear();
    displayDay = " ";
   
    // day
    for(let i = 0; i<allDays.length; i++){
        switch(myDate){
            case i:
            displayDate= allDays[i];
            break;
        }
    } 
    let result = document.querySelector('h1');
    result.innerHTML= displayDay;
}
// month
displayMonth = " ";
    for(let i = 0; i <  allMonths.length);{
        switch(month){
            case i:
            deisplayMonths= allMonths[i];
            break;
        }
    } 
    let result = document.querySelector('h1');
    result.innerHTML= displayDay + " " + displayMonth;
}
displayDate();



var clok = () => {
    var day = new Date();
    var hour = day.getHours();
    var minute = day.getMinute();
    var second = day.getSecond();
    var 
}
*/