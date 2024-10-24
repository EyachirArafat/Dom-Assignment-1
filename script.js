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


addBtn.addEventListener("click", () => {
  let inputText = inputBox.value.trim();

  if (inputText.length <= 0) {
    alert("You must write your to-do in the input box.");
    return false;
  }

  

  // Create task item wrapper
  let div = document.createElement("div");
  div.classList.add("grid", "grid-cols-12", "pt-6", "p-3", "min-w-[700px]", "hover:bg-slate-600", "text-white", "w-full", "border-b");

  // Create task number
  let numberP = document.createElement("p");
  numberP.classList.add("text-xl", "col-span-1");
  numberP.innerHTML = taskList.children.length + 1;
  div.appendChild(numberP);

  // Create task text
  let taskP = document.createElement("p");
  taskP.classList.add("text-xl", "col-span-6", "text-center");
  taskP.innerHTML = inputText;
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
  dateP.classList.add("hidden", "md:block", "text-xl", "md:col-span-3", "text-center");
  dateP.innerHTML = new Date().toLocaleDateString();
  divC2.appendChild(dateP);


  // Create task status
  let statusP = document.createElement("p");
  statusP.classList.add("text-xl", "md:col-span-3", "col-span-4", "text-center");
  statusP.innerHTML = "Pending";
  divC2.appendChild(statusP);

  // Create task edit and actions
  let editP = document.createElement("p");
  editP.classList.add("text-xl", "md:col-span-3", "col-span-4", "text-center");
  editP.innerHTML = "Edit";
  divC2.appendChild(editP);

  let actionsP = document.createElement("p");
  actionsP.classList.add("text-xl", "md:col-span-3", "col-span-4", "text-center");
  actionsP.innerHTML = "Actions";
  divC2.appendChild(actionsP);


  // Finally, append the task div into the taskList container
  taskList.appendChild(div);

  // Clear input box after adding the task
  inputBox.value = "";
});















/*
text-white grid grid-cols-12 pt-6 p-3 min-w-[700px] w-full sticky top-0 border-b bg-slate-500

<p class="text-xl font-bold col-span-1">Number</p>
          <p class="text-xl font-bold text-center col-span-6">Task</p>
          <div class="col-span-5">
            <div class="grid grid-cols-12">
              <p class="hidden md:block text-xl font-bold md:col-span-3 text-center">Date</p>
              <p class="text-xl font-bold md:col-span-3 col-span-4 text-center">Status</p>
              <p class="text-xl font-bold md:col-span-3 col-span-4 text-center">Edit</p>
              <p class="text-xl font-bold md:col-span-3 col-span-4 text-center">Actions</p>
            </div>
          </div>

*/



