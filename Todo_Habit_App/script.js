// Todo-funktioner
function addTodo() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    li.onclick = () => li.remove();
    document.getElementById("todo-list").appendChild(li);
    input.value = "";
  }
}

// Habit-funktioner
function addHabit() {
  const input = document.getElementById("habit-input");
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    li.onclick = () => li.remove();
    document.getElementById("habit-list").appendChild(li);
    input.value = "";
  }
}