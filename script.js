
//This snippet is for displaying current Day.
var presentDay = $("#currentDay");

var dateDay = new Date();
var displayDay = dateDay.toString().slice(0,15);
presentDay.text(`${displayDay}`);
//console.log(displayDay);


var saveTaskBtn = $(".saveBtn");

var taskDes = $(".description");



function getTask(){
  var task = localStorage.getItem("task");
     if(task === null){
          return;
    }
    console.log("get task---"+task);
   taskDes.text(task);
   alert(task);
}

saveTaskBtn.on("click", function(event){
    event.preventDefault();
    

    var task = $(".description").val();
    
    console.log(task);
    if(task === ""){
        return alert("Enter task");
    }else {
        console.log("else loop---"+task);
        localStorage.setItem("task", task);
        getTask();
    }
});

getTime();

function getTime(){
   
    var currentHour = dateDay.getHours();
    console.log(currentHour);
    
    
    
     

    $('.time-block').each(function() {
        var dataTime = $(this).data('time');
        console.log(dataTime);
        
        if(dataTime < currentHour){
            $(".task").addClass("past");
        }else if(dataTime === currentHour){
            $(".task").addClass("present");
        }else {
            $(".task").addClass("future");
        }
    });



}

