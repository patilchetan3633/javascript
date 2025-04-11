const input = document.getElementById("input");  
const button = document.getElementById("button");  
const list = document.querySelector(".main .list"); 
let crud = JSON.parse(localStorage.getItem("crud")) || []; 
let isEdit = false;
let editIndex = 0;


function readTask() {
  list.innerHTML = ""; 
  crud.forEach((todo, index) => {
    const p = document.createElement("p");
    p.textContent = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn";
    deleteBtn.id = "deleteId";
    deleteBtn.textContent = "remove";
    deleteBtn.onclick = () => deleteTask(index); 

    const editBtn = document.createElement("button");
    editBtn.className = "btn";
    editBtn.id = "editId";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => updateTask(index); 

    const div = document.createElement("div");
    div.className = "row";
    div.appendChild(p);
    div.appendChild(deleteBtn);
    div.appendChild(editBtn);

    list.appendChild(div); 
  });
}

function addTask() {
  const value = input.value;
  crud.push(value); 
  localStorage.setItem("crud", JSON.stringify(crud)); 
  input.value = ""; 
  readTask(); 
}


function deleteTask(index) {
  crud.splice(index, 1); 
  localStorage.setItem("crud", JSON.stringify(crud)); 
  readTask(); 
}

function updateTask(index) {
  input.value = crud[index]; 
  isEdit = true;
  editIndex = index;
}


button.addEventListener("click", function () {
  if (isEdit) {
    crud[editIndex] = input.value;
    isEdit = false;
  } else {
    addTask(); 
  }
  localStorage.setItem("crud", JSON.stringify(crud)); 
  input.value = "";
  readTask(); 
});

readTask(); 