$(document).ready(function()
{
function showTime()
{
    // To Get current Time/date
    var date = new Date();


    //Make Variables to get hours, minute and second 

    var hours = date.getHours();  //get hours
    var min = date.getMinutes();  //get Monutes
    var sec = date.getSeconds();  // get second

    // AM,PM setting

    var session = "AM";

    // conditions for time behaviour

    if(hours == 0)
    {
        hours = 12;
    }
    if(hours >= 12)
    {
        session ="PM";
    }
    if(hours > 12)
    {
        hours=hours-12;
    }
    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Set the variable to span 
    $("#hours").text(hours);
    $("#min").text(min);
    $("#sec").text(sec);
   $("#period").text(session);


    //To change time in every seconds 

    setTimeout(showTime,1000)
}
    showTime();
});