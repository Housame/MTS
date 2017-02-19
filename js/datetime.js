function displayTime()
{
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();

    if (hours.toString().length == 1)
        hours = '0' + hours.toString();

    if (minutes.toString().length == 1)
        minutes = '0' + minutes.toString();

    if (seconds.toString().length == 1)
        seconds = '0' + seconds.toString();

    document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
    setInterval(displayTime, 1000);
}

var weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function displayDate()
{

    var dateTime = new Date();
    var day = dateTime.getDay();
    var date = dateTime.getDate();
    var month = dateTime.getMonth();
    var year = dateTime.getFullYear();

    document.getElementById('date').innerHTML = weekDay[day] + ", " + date + "/" + month + "/" + year;
    setInterval(displayDate, 1000);
}
