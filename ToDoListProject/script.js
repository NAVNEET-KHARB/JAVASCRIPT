document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => renderTask(task));

  addTaskBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const myTask = {
      id: Date.now(),
      text: taskText,
      isCompleted: false,
    };

    tasks.push(myTask);
    saveTasks();
    renderTask(myTask);
    todoInput.value = "";
    // console.log(tasks);
  });

  function renderTask(task){
    let li = document.createElement("li");
    if(task.isCompleted) li.classList.add("completed");
    li.setAttribute("data-id",task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    
    li.addEventListener("click", (e) => {
        if(e.target.tagName === "BUTTON") return;
        task.isCompleted = !task.isCompleted;
        li.classList.toggle("completed");
        saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e)=>{
        e.stopPropagation();
        tasks = tasks.filter(indTask => indTask.id !== task.id);
        li.remove();
        saveTasks();
    });
    
    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
