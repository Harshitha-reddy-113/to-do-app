const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const taskList = document.getElementById("taskList");

function addTask(){

  if(taskInput.value === ""){
    alert("Please enter a task");
    return;
  }

  let formattedTime = "";

  if(taskTime.value){

    let [hours, minutes] =
      taskTime.value.split(":");

    hours = parseInt(hours);

    let ampm =
      hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    formattedTime =
      `${hours}:${minutes} ${ampm}`;
  }

  const li =
    document.createElement("li");

  li.classList.add("task");

  li.innerHTML = `

    <div class="task-top">

      <span class="task-text">
        ${taskInput.value}
      </span>

      <div class="task-buttons">

        <button
          class="complete-btn"
          onclick="completeTask(this)">
          ✓
        </button>

        <button
          class="edit-btn"
          onclick="editTask(this)">
          Edit
        </button>

        <button
          class="delete-btn"
          onclick="deleteTask(this)">
          X
        </button>

      </div>

    </div>

    <div class="date-time">
      ${taskDate.value} ${formattedTime}
    </div>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
  taskDate.value = "";
  taskTime.value = "";
}

function completeTask(button){

  button.closest(".task")
    .classList.toggle("completed");
}

function deleteTask(button){

  button.closest(".task").remove();
}

function editTask(button){

  const task =
    button.closest(".task");

  const text =
    task.querySelector(".task-text");

  const updatedTask =
    prompt("Edit task", text.innerText);

  if(updatedTask !== null &&
     updatedTask.trim() !== ""){

    text.innerText = updatedTask;
  }
}