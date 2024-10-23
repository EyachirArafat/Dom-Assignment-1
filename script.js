const inputBox =document.querySelector("#inputBox");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");


addBtn.addEventListener("click", ()=>{
  let inputText = inputBox.value.trim();

  if(inputText.length <= 0){
    alert(`You must write your to do in input box.`)
    return false;
  }
  console.log("hello")

  let div = document.createElement("div");
  let p = document.createElement("p");

  p.innerHTML = inputText;
  div.appendChild(p)

  taskList.appendChild(div)




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



