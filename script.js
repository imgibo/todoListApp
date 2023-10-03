const inputBox1 = document.getElementById("input-box1");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox1.value === '') {
        alert("Please add task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox1.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox1.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showSaveData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showSaveData();