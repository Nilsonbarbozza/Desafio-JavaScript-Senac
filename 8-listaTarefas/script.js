const input = document.getElementById("new-task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");


function addTask() {
    const taskText = input.value.trim();

    if (taskText !== '') {
        const li = document.createElement("li");
        li.textContent = taskText;

       
        li.addEventListener("click", () => {
            li.remove();
        });

        taskList.appendChild(li);
        input.value = "";
        input.focus();
    } else {
        alert("Digite uma tarefa antes de adicionar!");
    }
}


addBtn.addEventListener("click", addTask);


input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
