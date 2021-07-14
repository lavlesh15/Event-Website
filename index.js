
// CountDown Funtion 

var countDate = new Date("Aug 25 , 2021 00:00:00").getTime();

var x = setInterval(function(){

    var now = new Date().getTime();
    var difference = countDate - now;

    var days =Math.floor(difference / (1000*60*60*24));
    var hours = Math.floor(difference % (1000*60*60*24)/ (1000*60*60));
    var minutes = Math.floor(difference % (1000*60*60)/ (1000*60));
    var seconds = Math.floor(difference % (1000*60)/ (1000));

    document.getElementById("countdown").innerHTML= days + "D " + hours +"H " + minutes + "M "+ seconds +"S ";


},1000);


// Aos Lib  

