const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
function addTask(){
    const task = inputBox.value;
    if(task){
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    else{
        alert("Bakchodi mat kar");
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("TODO",listContainer.innerHTML);
}

function loadData(){
    if(localStorage.getItem("TODO")){
        listContainer.innerHTML = localStorage.getItem("TODO");
    }
}
loadData();