const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from local storage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${task}
            <button class="deleteBtn" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Add a new task
addTaskBtn.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
        tasks.push(taskInput.value.trim());
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        taskInput.value = "";
    }
});

// Delete a task
taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteBtn")) {
        const index = event.target.getAttribute("data-index");
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }
});

// Initial rendering
renderTasks();