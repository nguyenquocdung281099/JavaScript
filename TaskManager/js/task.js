"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
//  taskList.valueEdit = $("task").value;
var addToTaskList = function () {
  var taskTextbox = $("task");
  var newTask = new Task(taskTextbox.value);
  if (newTask.isValid()) {
    // add task to tasklist
    taskList.add(newTask);
    // save task list to local storage
    taskList.save();
    // display tasklist on view
    taskList.display();
    // reset task textbox
    taskTextbox.value = "";
  } else {
    alert("Please enter a task");
  }
  taskTextbox.focus();
};

var clearTaskList = function () {
  taskList.clear();
  $("task").focus();
};

var deleteFromTaskList = function () {
  taskList.delete(this.id); // this => clicked link
  taskList.save();
  taskList.display();
  $("task").focus();
};
 
var editTaskList = function () {
   $("task").value = taskList.valueEdit;
  taskList.edit(this.id, $("add_task")); // this => clicked link
  taskList.idCurrent = this.id;
};
var editfunction = function(){
  if(taskList.storage.get().length == 0){
    alert("you can add task before edit");
  }
  else{
    taskList.tasks[taskList.idCurrent] = $("task").value;
  taskList.save();
  taskList.display();
  $("task").focus()
  $("task").value= "";
  $("add_task").removeAttribute("disabled");
  }
}
window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;
  $("editButton").onclick= editfunction;
  
  
  // set value for tasklist properties
  taskList.displayDiv = $("tasks");
  taskList.deleteClickHandler = deleteFromTaskList;
  taskList.editTask = editTaskList;
  // load tasks and display
  taskList.load();
  taskList.display();
  $("task").focus();
};
