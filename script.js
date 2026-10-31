let input=document.getElementById("inputTask");
let button=document.getElementById("add");
let tasklist=document.getElementById("taskList");
button.addEventListener("click",function(){
    let task=input.value;
    if(task==""){
        alert("enter the task");
        return;
    }
    let li=document.createElement("li");
    li.innerText=task;
    tasklist.appendChild(li);
    input.value="";
});