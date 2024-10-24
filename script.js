document.addEventListener('DOMContentLoaded', () => {

  const inputBox =document.querySelector("#inputBox");
  const addBtn = document.querySelector("#addBtn");
  const taskList = document.querySelector("#taskList");

  /*
  addBtn.addEventListener("click", ()=>{
    let inputText = inputBox.value.trim();

    if(inputText.length <= 0){
      alert(`You must write your to-do in input box.`)
      return false;
    }

    let div = document.createElement("div");
    let p = document.createElement("p");

    p.innerHTML = inputText;
    div.appendChild(p)

    taskList.appendChild(div)
  });
  */

  


  function addTask(task){



    // Create task item main div
    let div = document.createElement("div");
    div.classList.add("grid", "grid-cols-12", "pt-6", "p-3", "min-w-[800px]", "hover:bg-slate-600", "text-white", "w-full", "border-b");

    div.addEventListener("click", () => {
      div.classList.toggle("bg-slate-800"); // Toggle background color
    });

    
    // Create task number
    let numberP = document.createElement("p");
    numberP.classList.add("text-xl", "col-span-1");
    numberP.innerHTML = taskList.children.length + 1;
    div.appendChild(numberP);

    // Create task text
    let taskP = document.createElement("p");
    taskP.classList.add("text-xl", "col-span-6", "text-center", "cursor-pointer");
    taskP.innerHTML = task;
    div.appendChild(taskP);



    // Child div for div & parent div for Date, Status, Edit, Actions
    let divC1 = document.createElement("div");
    divC1.classList.add("col-span-5");
    div.appendChild(divC1); 

    
    let divC2 = document.createElement("div");
    divC2.classList.add("grid", "grid-cols-12");
    divC1.appendChild(divC2); 

    // Create task date
    let dateP = document.createElement("p");
    dateP.classList.add("pr-20", "text-xl", "col-span-3", "text-center");
    dateP.innerHTML = new Date().toLocaleDateString();
    divC2.appendChild(dateP);


    
    // Create task status & its toggle
    let statusP = document.createElement("p");
    statusP.classList.add("text-xl", "col-span-3", "text-center", "text-yellow-500");
    statusP.innerHTML = "Pending";
    divC2.appendChild(statusP);

    taskP.addEventListener("click", ()=>{
      if(statusP.innerHTML === "Pending"){
        statusP.innerHTML = "Completed";
        statusP.classList.add("text-green-500");
        statusP.classList.remove("text-yellow-500");
        taskP.classList.add("line-through");
        editBtn.classList.add("fa-ban", "text-red-500", "cursor-not-allowed");
        editBtn.classList.remove("fa-pen-to-square", "text-blue-500", "hover:text-blue-700", "cursor-pointer");
      }else{
        statusP.innerHTML = "Pending"
        statusP.classList.remove("text-green-500");
        statusP.classList.add("text-yellow-500");
        taskP.classList.remove("line-through");
        editBtn.classList.remove("fa-ban", "text-red-500", "cursor-not-allowed");
        editBtn.classList.add("fa-pen-to-square", "text-blue-500", "hover:text-blue-700", "cursor-pointer");
      }
    })



    // Edit button using Font Awesome icon
    let editBtn = document.createElement("i");
    editBtn.className = 'fa-solid fa-pen-to-square text-blue-500 hover:text-blue-700 ml-2 cursor-pointer text-xl col-span-3 text-center';

    editBtn.addEventListener("click", (event)=>{
      event.stopPropagation();
      const newTask = prompt("Edit your task", task);
      if(newTask){
        taskP.textContent = newTask;
      };
    })
    divC2.appendChild(editBtn);

    /*
    // Create task edit 
    let editP = document.createElement("p");
    editP.classList.add("text-xl", "md:col-span-3", "col-span-4", "text-center");
    editP.innerHTML = "Edit";
    divC2.appendChild(editP);
    */



    // Create actions button
    let actionsP = document.createElement("p");
    actionsP.className = 'fa-solid fa-trash text-xl col-span-3 text-center text-red-500 hover:text-red-700 cursor-pointer';

    actionsP.addEventListener("click", (event)=>{
      event.stopPropagation();
      div.remove();
    });
    divC2.appendChild(actionsP);


    // Finally, append the task div into the taskList container
    taskList.appendChild(div);
  }

  
  // Add event listener for Enter key
  inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addBtn.click(); 
    }
  });


  addBtn.addEventListener("click", () => {
    let inputText = inputBox.value.trim();

    if (inputText) {
      addTask(inputText);
    }else{
      alert("You must write your to-do in the input box.");
      return false;
    }

    inputBox.value = "";
  });
});

