if (typeof document !== "undefined") {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    // Create list item
    const li = document.createElement("li");
    li.className = "todo-item";

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Clear input
    todoInput.value = "";
  });
}
