
//This snippet is for displaying current Day.
var presentDay = $("#currentDay");
var dateDay = new Date();
var displayDay = dateDay.toString().slice(0,15);
presentDay.text(`${displayDay}`);
//console.log(displayDay);

var textArea = $("#textArea");
var saveBtn = $(".saveBtn");



